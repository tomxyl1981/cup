e, "inputs": [], "name": "token0", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "token1", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "value", "type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "value", "type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"}
  ]
}
```

{% hint style="info" %}
**交互最佳实践 (参考实现体现):**

* **交易发送封装:** 使用辅助函数处理 nonce 获取、gas price 设置、交易签名 (`web3.eth.accounts.signTransaction`) 和发送 (`web3.eth.sendSignedTransaction`)，并包含 `try...catch` 错误处理。
* **Gas 估算:** 在发送交易前使用合约方法的 `.estimateGas()`，并可增加少量 buffer (e.g., 10-20%) 防止因链上状态变化导致 Gas 不足。
* **滑点控制:** 对于 Swap 和流动性操作，务必计算并使用 `amount*Min` 或 `amount*Max` 参数。
* **Approve 检查:** 在执行需要花费 ERC20 代币的操作前，检查现有 `allowance`，避免不必要的 `approve` 交易。
* **Deadline:** 为有时限的操作 (Swap, Liquidity) 设置合理的 `deadline`。
* **大数处理:** 使用 `BigInt` (Javascript 原生) 或 `web3.utils.toWei/fromWei` 以及 BN.js (Web3.js 内置) 处理代币数量。
  {% endhint %}

{% hint style="warning" %}
在部署到主网或处理实际资产前，请务必在测试网上进行充分的测试。始终参考 JuChain 官方文档和区块浏览器以获取最新、最权威的信息和完整的 ABI。安全地管理您的私钥！
{% endhint %}


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/sheng-tai/qu-zhong-xin-hua-jiao-yi-suo.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.