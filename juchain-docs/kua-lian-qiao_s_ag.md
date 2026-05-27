:[{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"uint8","name":"_percents","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"operator","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"oracle","outputs":[{"internalType":"contract Oracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"platformCoin","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"preCheckLockedFounds","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_bridgeServiceFee","type":"uint256"}],"name":"setBridgeServiceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_feeReceiver","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_tokenDeployer","type":"address"}],"name":"setTokenDeployer","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"token2address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenAddrAllow2name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"tokenAllow2Lock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"tokenDeployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"_claimID","type":"bytes32"},{"internalType":"address payable","name":"_recipient","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"stateMutability":"payable","type":"receive"}
]
```

**跨链流程**

JuChain 跨链桥支持以下跨链流程：

**从 JuChain 到 BSC/ETH 的跨链流程**

1. **销毁资产 (用户操作 - JuChain)**:
   * 在 JuChain 测试网上，用户调用 `BridgeBank` 合约的 `burnBridgeTokens` 函数。
   * 参数包括：目标链 ID（BSC Chapel 为 97，ETH Holesky 为 17000）、接收地址（在目标链上）、代币地址（JuChain 上的桥接代币）和金额。
   * 函数会销毁 JuChain 上的桥接代币，并触发 `LogBtcTokenBurn` 事件。
2. **跨链验证 (链下操作 - Relayer & Signer)**:
   * **Relayers** 监听并检测到 JuChain 上的 `LogBtcTokenBurn` 事件。
   * Relayers 将事件信息提交给 **Signers**。
   * Signers 验证该销毁事件的有效性（确认交易已在 JuChain 上成功执行），并生成授权（例如，签名）。
3. **目标链解锁 (链下驱动，链上执行 - BSC/ETH)**:
   * 获得授权后，**Relayer** 调用目标链（BSC 或 ETH）`BridgeBank` 合约的 `unlock` 函数，附带授权信息。
   * 目标链 `BridgeBank` 合约验证授权的有效性，然后将等量的原始代币解锁/转移到用户指定的接收地址。

**从 BSC/ETH 到 JuChain 的跨链流程**

1. **锁定资产 (用户操作 - BSC/ETH)**:
   * 在 BSC 或 ETH 测试网上，用户调用 `BridgeBank` 合约的 `lock` 函数。
   * 参数包括：接收地址（在 JuChain 上）、代币地址（源链上的原始代币）和金额。
   * 函数会锁定用户的代币，并触发 `LogLock` 事件。
2. **跨链验证 (链下操作 - Relayer & Signer)**:
   * **Relayers** 监听并检测到源链上的 `LogLock` 事件。
   * Relayers 将事件信息提交给 **Signers**。
   * Signers 验证该锁定事件的有效性（确认交易已在源链上成功执行），并生成授权。
3. **JuChain 铸造 (链下驱动，链上执行 - JuChain)**:
   * 获得授权后，**Relayer** 调用 JuChain 测试网 `BridgeBank` 合约的 `mintBridgeTokens` 函数，附带授权信息。
   * JuChain `BridgeBank` 合约验证授权的有效性，然后铸造等量的桥接代币到用户指定的接收地址。

**代码示例**

以下是使用 Web3.js 与跨链桥交互的代码示例：

**从 JuChain 到 BS