# 智能合约

{% hint style="warning" %}
JuChain 当前仅支持 Solidity 版本 <= 0.8.8 进行编译，后续版本支持将根据官方通知逐步开放。
{% endhint %}

JuChain 完全兼容以太坊虚拟机（EVM），这意味着开发者可以轻松部署和运行用 Solidity 编写的智能合约。本文档将指导您了解在 JuChain 上进行智能合约开发的基础知识。

### 合约开发

#### 开发环境

要在 JuChain 上开发智能合约，您需要：

1. 代码编辑器（如 VSCode、Remix）
2. Solidity 编译器
3. Web3 开发框架（如 Hardhat、Truffle）
4. JuChain RPC 端点

#### 合约部署

您可以通过以下方式部署智能合约到 JuChain：

1. Remix IDE（连接到 JuChain 网络）
2. Hardhat 或 Truffle 部署脚本
3. 直接与 Web3 库交互

### 最佳实践

在 JuChain 上开发智能合约时：

1. 始终彻底测试您的合约
2. 遵循安全最佳实践
3. 优化 gas 效率
4. 使用最新的稳定版 Solidity
5. 实施适当的访问控制

### 合约验证

部署后，您可以在 JuChain 的区块浏览器上验证您的合约源代码，以确保透明度和安全性。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/zhi-neng-he-yue.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.