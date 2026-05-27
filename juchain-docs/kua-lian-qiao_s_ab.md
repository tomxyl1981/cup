Signer Address) | `0xc739962C7805a46BEd5bDADB4Df033e9B9aC1ff2`                                                                                    | 用于验证 ETH -> JuChain 跨链交易     |
| BSC Mainnet             | 签名地址 (Signer Address) | `0xc3F59038F2fceDec5f41f46aBb130ca4446556E1`                                                                                    | 用于验证 BSC -> JuChain 跨链交易     |
| JuChain Mainnet         | 签名地址 (Signer Address) | `0xA62b1782af4AfFd74CEcFC5E0BA96E1b31eb371C`                                                                                    | 用于验证 JuChain -> ETH/BSC 跨链交易 |
| **--- 测试网 Testnet ---** |                       |                                                                                                                                 |                              |
| JuChain Testnet         | BridgeBank            | [`0x3516949D3c530E4FB65Fa2a02ef808e5587ebaBE`](https://testnet.juscan.io/address/0x3516949D3c530E4FB65Fa2a02ef808e5587ebaBE)    | JuChain 测试网核心跨链合约            |
| JuChain Testnet         | USDT (桥接后)            | [`0x16E0499Cb600ef4F4FbEca756E90D658D9a74E4D`](https://testnet.juscan.io/token/0x16E0499Cb600ef4F4FbEca756E90D658D9a74E4D)      | JuChain 测试网上代表 USDT 的桥接代币    |
| JuChain Testnet         | tBNB (桥接后)            | [`0x2598d2e226Ce13288E314569569838bBc6Ff9402`](https://testnet.juscan.io/token/0x2598d2e226Ce13288E314569569838bBc6Ff9402)      | JuChain 测试网上代表 tBNB 的桥接代币    |
| JuChain Testnet         | tETH (桥接后)            | [`0x1a4911109be74dc5C9CC8e4AfC3d8D7Fd06CA672`](https://testnet.juscan.io/token/0x1a4911109be74dc5C9CC8e4AfC3d8D7Fd06CA672)      | JuChain 测试网上代表 tETH 的桥接代币    |
| BSC Testnet (Chapel)    | BridgeBank            | [`0x30DBF30Eb71ddb49d526AFdb832C7Ba4D85953f6`](https://testnet.bscscan.com/address/0x30DBF30Eb71ddb49d526AFdb832C7Ba4D85953f6)  | BSC 测试网核心跨链合约                |
| BSC Testnet (Chapel)    | USDT (桥接前)            | [`0xcD1093897a5dB4a9aF153772B35AAA066ab969f3`](https://testnet.bscscan.com/address/0xcD1093897a5dB4a9aF153772B35AAA066ab969f3)  | BSC 测试网上的 USDT 合约            |
| ETH Testnet (Holesky)   | BridgeBank            | [`0x264960f4bf655c14a74DE1A7fC5AA68E71f71924`](https://holesky.etherscan.io/address/0x264960f4bf655c14a74DE1A7fC5AA68E71f71924) | ETH Holesky 测试网核心跨链合约        |
| ETH Testnet (Holesky)   | USDT (桥接前)            | [`0xc7062D0A7553fabbf0b9B5DF9E9648Cffd2B9add`](https://holesky.etherscan.io/address/0xc7062D0A7553fabbf0b9B5DF9E9648Cffd2B9add) | ETH Holesky 测试网上的 USDT 合约    |

**BridgeBank 合约功能**

BridgeBank 合约是跨链桥的核心，提供了以下关键功能，开发者可通过 ABI 与合约交互：

* **`lock`** (ETH/BSC -> JuChain): 在源链（ETH/BSC）上锁定代币，并发起跨链转移。**此操作会触发 `LogLock` 事件，被 Relayers 监听。**
  * 参数：`_recipient`（JuChain 上的接收地址）、`_token`（源链代币地址）、`_amount`（转移金额）。
* **`burnBridgeTokens`** (JuChain -> ETH/BSC): 在 JuChain 上销毁桥接代币，并发起返回源链的跨链转移。**此操作会触发 `LogBtcTokenBurn` 事件，被 Relayers 监听。**
  * 参数：`_chainID`（目标链 ID）、`_receiver`（源链上的接收地址）、`_bridgeTokenAddress`（JuChain 上的桥接代币地址）、`_amount`（金额）。
* **`unlock`** (JuChain -> ETH/BSC completion): 在目标链（ETH/BSC）上解锁原始代币。**此操作由 Relayer 在收到 Signer 授权后调用。**
  * 参数：`_recipient`（接收地址）、`_token`（代币地址）、`_name`（代币名称）、`_amount`（金额）。(ETH/BSC ABI 中还包含 `_claimID`)
* **`mintBridgeTokens`** (ETH/BSC -> JuChain completion): 在目标链（JuChain）上铸造桥接代币。**此操作由 Relayer 在收到 Signer 授权后调用。**
  * 参数：`_intendedRecipient`（接收地址）、`_bridgeTokenAddress`（桥接代币地址）、`_amount`（金额）。

**ABI 数据**

以下是测试网使用的 BridgeBank 合约 ABI，开发者可用于与合约交互：

**JuChain BridgeBank ABI**

```json
[
  {"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"address","name":"_oracleAddress","type":"address"},{"internalType":"address","name":"_btcBridgeAddress","type":"address"},{"internalType":"address","name":"_tokenDeployer","type":"address"},{"internalType":"address payable","name":"_feeReceiver","type":"address"},{"internalType":"uint256","name":"_bridgeServiceFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":