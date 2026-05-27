# 跨链桥

JuChain 的跨链桥是一个去中心化的服务，允许开发者在不同测试网之间转移资产，如 JuChain 测试网、BSC 测试网（Chapel）和 ETH 测试网（Holesky）。它通过链上智能合约（主要是 `BridgeBank` 合约）和链下组件（Relayers 和 Signers）协同工作，管理锁定、解锁、铸造和销毁操作，确保资产跨链转移的安全性和效率。

#### 架构概览

JuChain 跨链桥采用典型的"锁定/销毁 & 铸造/解锁"模型，并结合了链下验证机制。以下是核心组件及其交互：

* **BridgeBank 合约**:部署在各个支持的链（JuChain, BSC, ETH）上的核心智能合约。
  * 在**源链**: 负责接收和锁定（`lock`）用户的原始资产，或销毁（`burnBridgeTokens`）已桥接回来的资产，并触发相应的事件（`LogLock`, `LogBtcTokenBurn`）。
  * 在**目标链**: 负责根据验证后的信息铸造（`mintBridgeTokens`）桥接资产，或解锁（`unlock`）返回的原始资产。
* **Relayers (中继器)**: 链下服务，负责监控各个链上 `BridgeBank` 合约的事件。
  * **监听**: 持续监听源链上的 `LogLock` 事件（用于 ETH/BSC -> JuChain）或 JuChain 上的 `LogBtcTokenBurn` 事件（用于 JuChain -> ETH/BSC）。
  * **提交**: 检测到相关事件后，收集事件数据并将其提交给 Signers 进行验证。
  * **执行**: 收到 Signers 的有效签名/授权后，调用目标链 `BridgeBank` 合约的相应方法（`mintBridgeTokens` 或 `unlock`）来完成跨链操作。图示中有多个 Relayer (Relayer\_0, Relayer\_1, Relayer\_2)，可能意味着存在冗余或并行处理机制。
* **Signers (签名者/验证者)**: 链下服务，负责验证跨链事件的真实性和有效性。
  * **验证**: 接收来自 Relayer 的事件数据，并独立验证该事件在源链上是否真实发生且有效。
  * **授权**: 验证通过后，生成签名或其他形式的授权，允许 Relayer 在目标链上执行操作。图示中存在 `signer0` 和 `signer1`（甚至可能是多个 `signer1` 实例或代表一个多签群体），表明验证过程可能涉及多方或根据特定流程/链进行区分。`signer0` 处的索引信息（`Index: 0:for juchain, 1:eth, 2:bse`）表明验证节点内部需要区分不同的链。
* **用户 (用户)**: 发起跨链转移的最终使用者，与源链的 `BridgeBank` 合约交互以启动流程 。
* **管理员 (管理员)**: 可能代表进行初始流动性提供、合约维护或其他管理操作的角色（如图中向 BSC 存入 20）。

这个架构确保了跨链操作的安全性，因为目标链上的操作（铸造/解锁）必须经过链下验证者的确认。

***

**合约地址与代币信息**

以下是跨链桥相关合约和代币在不同网络上的详细地址，开发者需确保在正确网络中使用：

| 网络                      | 合约/代币                 | 地址                                                                                                                              | 说明/链接                        |
| ----------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- |
| **--- 主网 Mainnet ---**  |                       |                                                                                                                                 |                              |
| ETH Mainnet             | USDT (桥接前)            | [`0xf127CcE9849BC3333B883F168efBf9773f49fD98`](https://etherscan.io/address/0xf127CcE9849BC3333B883F168efBf9773f49fD98)         | ETH 主网上的 USDT 合约             |
| BSC Mainnet             | USDT (桥接前)            | [`0x77051143118f4Dbe64cEE8ABEbd87A4B9b095402`](https://bscscan.com/address/0x77051143118f4Dbe64cEE8ABEbd87A4B9b095402)          | BSC 主网上的 USDT 合约             |
| JuChain Mainnet         | BridgeBank            | [`0x0B14AEc91b1020Bd03440A452C18B60C4D98fd0D`](https://juscan.io/address/0x0B14AEc91b1020Bd03440A452C18B60C4D98fd0D)            | JuChain 主网核心跨链合约             |
| JuChain Mainnet         | USDT (桥接后)            |                                                                                                                                 | JuChain 主网上代表 USDT 的桥接代币     |
| JuChain Mainnet         | BNB (桥接后)             | [`0x151b6F646Ac02Ed9877884ed9637A84f2FD8FaA6`](https://juscan.io/token/0x151b6F646Ac02Ed9877884ed9637A84f2FD8FaA6)              | JuChain 主网上代表 BNB 的桥接代币      |
| JuChain Mainnet         | ETH (桥接后)             | [`0x80077F108Dd73B709C43A1a13F0EEf25e48f7D0e`](https://juscan.io/token/0x80077F108Dd73B709C43A1a13F0EEf25e48f7D0e)              |                              |
| ETH Mainnet             | 签名地址 (