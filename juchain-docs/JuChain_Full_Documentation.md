---
title: JuChain 中文文档
description: JuChain 区块链完整中文文档 - 技术架构、开发者指南、代币经济学、生态应用
source: https://juchain.gitbook.io/juchain-docs/zh
language: zh-CN
tags:
  - blockchain
  - juchain
  - evm
  - smart-contract
  - web3
---

# JuChain 中文文档

JuChain 是一个高性能的 EVM 兼容区块链，采用 JPoSA 共识机制，1秒出块时间，低成本交易。

## 核心特点

- **共识机制**: JPoSA (权益证明 + 权威证明)
- **出块时间**: 1秒
- **交易确认**: 2-3秒
- **链ID**: 210000 (主网), 202599 (测试网)
- **代币符号**: JU
- **RPC端点**: https://rpc.juchain.org
- **区块浏览器**: https://juscan.io



## juchain-docs/zh

# Page Not Found

The URL `zh` does not exist. This page may have been moved, renamed, or deleted.

## Suggested Pages

You may be looking for one of the following:
- [What is JuChain?](https://juchain.gitbook.io/juchain-docs/what-is-juchain.md)
- [Design Philosophy](https://juchain.gitbook.io/juchain-docs/design-philosophy.md)
- [Decentralized Exchange](https://juchain.gitbook.io/juchain-docs/ecosystem/decentralized-exchange.md)
- [Start Using JuChain](https://juchain.gitbook.io/juchain-docs/basics/start-using-juchain.md)
- [On-Chain Ecosystem](https://juchain.gitbook.io/juchain-docs/ecosystem/on-chain-ecosystem.md)

## How to find the correct page

If the exact page cannot be found, you can still retrieve the information using the documentation query interface.

### Option 1 — Ask a question (recommended)

Perform an HTTP GET request on the documentation index with the `ask` parameter:

```
GET https://juchain.gitbook.io/juchain-docs/what-is-juchain.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

### Option 2 — Browse the documentation index

Full index: https://juchain.gitbook.io/juchain-docs/sitemap.md

Use this to discover valid page paths or navigate the documentation structure.

### Option 3 — Retrieve the full documentation corpus

Full export: https://juchain.gitbook.io/juchain-docs/llms-full.txt

Use this to access all content at once and perform your own parsing or retrieval. It will be more expensive.

## Tips for requesting documentation

Prefer `.md` URLs for structured content, append `.md` to URLs (e.g., `/juchain-docs/what-is-juchain.md`).

You may also use `Accept: text/markdown` header for content negotiation.


## dai-bi-jing-ji-xue/dai-bi-fen-pei-ji-hua

# 代币分配计划

JuChain的代币分配旨在平衡即时效用与长期可持续性。分配计划反映了项目致力于构建稳健且广泛使用的区块链生态系统的承诺。

## 高层级代币分配

JU代币的初始分配结构如下：

| 类别    | 分配比例 |
| ----- | ---- |
| 算力贡献者 | 97%  |
| 初始发行  | 3%   |

这种分配结构强调：

1. **社区驱动增长**：绝大多数代币(97%)分配给算力贡献者，确保随时间推移的广泛分配和社区参与。
2. **最小预售**：只有小部分(3%)分配给初始投资者。
3. **获取式分配**：大多数代币通过积极参与网络安全和运营进入流通，而非通过预售分配。
4. **长期协调**：通过算力逐步释放代币，使代币分配与网络增长和使用保持一致。

## 战略理由

这种分配方法在战略上旨在：

* 防止代币过度集中在少数人手中
* 确保所有参与者获取JU代币的公平机会
* 支持渐进、有机的价格发现
* 使代币分配与实际网络参与和增长保持一致
* 创造可持续的代币经济，支持JuChain作为链流量中心的长期愿景


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/dai-bi-fen-pei-ji-hua.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/dai-bi-fen-pei-ming-xi

# 代币分配明细

本节提供JU代币分配的详细明细，包括关于初始发行和固定每日发行计划的具体内容。

## 初始发行

初始发行代表了公众参与JuChain生态系统的初始机会：

* **分配**: 总供应量的3% (6,300,000 JU)
* **发行价格**: 每JU 0.1 USD
* **释放计划**: 代币生成事件(TGE)时100%解锁

## 固定每日发行

在初始代币生成事件之后，JU代币将根据固定每日发行计划释放：

* **每日总产出**: 72,000 JU
* **分配明细**:
  * 算力产出 (80%): 57,600 JU
  * JuChain基金会 (10%): 7,200 JU
  * JuChain合伙人节点 (10%): 7,200 JU

## 分配规则

每日发行的分配反映了JuChain的战略优先事项：

1. **算力产出 (80%)**: 最大的分配算力贡献者，确保社区可持续发展。
2. **JuChain基金会 (10%)**: 这一分配资金用于持续开发、营销和生态系统增长计划，确保协议和支持工具的可持续发展。
3. **JuChain合伙人节点 (10%)**: 合作伙伴节点在扩展JuChain的覆盖范围和实用性方面发挥关键作用，为生态系统带来战略资源和用户。

## 创世供应

* **总创世供应量**: 210,000,000 JU (100%)
* **即时流通**: 3% (6,300,000 JU) 通过IO
* **逐步释放**: 剩余97%通过算力产出和生态系统计划随时间释放


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/dai-bi-fen-pei-ming-xi.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/dai-bi-xiao-yong-yu-yong-li

# 代币效用与用例

除了保障网络安全的角色外，JU代币被设计为一种多功能资产，支撑JuChain生态系统的每一层。

## 核心效用功能

### Gas费用

所有链上交易、合约执行和跨分片消息都以JU支付，创造随网络活动扩展的持续需求。

### 质押和委托

验证者必须自我质押JU，委托人绑定JU以赚取奖励，直接将代币价值与网络安全联系起来。

### 治理

JU持有者可以在链上治理模块下提议和投票决定协议升级、参数变更和财政拨款。

## 生态系统应用

### 生态系统支付

Dapps可以用JU计价应用内购买、NFT铸造费用和订阅模式——受益于低费用和即时最终确定性。

### 抵押品和DeFi

一旦JuChain DeFi堆栈启动，JU可用作贷款协议的抵押品和流动性池供应。

### 跨链桥费用

JuChain与外部网络（如以太坊、BSC）之间的转移产生以JU支付的桥费，进一步扩展效用。

## 价值积累机制

JU代币设计通过几种方式从网络增长和增加使用中获取价值：

1. **交易量**：随着网络上发生更多交易，需要更多JU支付gas费用
2. **质押需求**：更高的验证者和委托人参与锁定更多代币，减少流通供应
3. **生态系统扩展**：随着更多应用程序在JuChain上构建，JU的效用和需求增加
4. **跨链活动**：随着网络成为可互操作的中心，桥费创造额外需求
5. **治理价值**：随着网络增长，治理权的价值增加，推动对JU的需求

这种多方面的效用确保JU代币价值与JuChain作为终极链流量中心的成功和增长紧密相连。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/dai-bi-xiao-yong-yu-yong-li.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/gong-ying-dong-tai

# 供应动态

为了在支持可持续增长的同时保持长期稀缺性，JuChain采用控制发行和定期减半的双重机制。

## 创世供应与流通

* **创世供应量：** 在代币生成事件(TGE)铸造210,000,000JU (100%)
* **初始流通量：** 3%（6,300,000）通过初始发行立即流通
* **锁定供应量：** 剩余97%通过算力贡献和生态系统计划锁定供应量

## 每日发行曲线

* **初始每日产出：** 72,000 JU
* **减半计划：** 每四年，发行率减半，遵循公式：

  ```
  O_n = O_0/2^(n/4)
  ```

  其中：

  * O\_n 是第n年的产出
  * O\_0 是初始产出

## 预计供应增长

在减半模型下，流通供应量预计将遵循以下轨迹：

* **第4年：每日产出** 36,000JU
* **第8年：每日产出** 18,000 JU
* **第12年+：每日产出** 9,000 JU
* 以此类推，每日供应量每 4 年减半<br>

这种受控的发行计划确保：

1. 代币供应保持可预测
2. 早期采用者获得奖励
3. 长期供应有上限以保持价值
4. 发行率适应网络成熟度


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/gong-ying-dong-tai.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/juchain-he-huo-ren-jie-dian

# JuChain合伙人节点

合伙人节点是JuChain生态系统中的战略盟友，获得每日代币发行量的10%(7,200 JU)用于推动生态系统增长和用户采用。

## 准入标准

合伙人节点状态只授予满足严格要求的实体：

* 显著的行业资源
* 对JuChain生态系统的战略价值
* 与JuChain愿景的一致性
* 通过JuChain严格的评估标准

## 发行分配机制

合伙人节点间的代币分配基于对生态系统的可衡量贡献：

* 链上预言机每月聚合独特活跃地址和交易量
* 通过透明指标测量和验证流量贡献
* 每个合伙人节点根据其贡献获得每日7,200 JU池的比例份额

## 关键义务

合伙人节点必须履行几项重要职责才能维持其状态：

* 维护99.9%正常运行时间的验证者或存档节点
* 在发布后七天内应用强制升级
* 锁定最低50,000 JU自我质押以保证经济一致性
* 举办季度社区研讨会或AMA以招募新用户和开发者
* 向基金会提交经审计的流量指标和安全报告

## 激励方案

除基本代币发行外，合伙人节点获得几项福利：

* 在官方JuChain Dapp门户和营销活动中优先展示
* 有资格获得基金会的联合营销拨款和战略投资

## 合伙人考核

为确保持续创造价值，合伙人节点接受考核：

* 基金会每年考核合伙人状态
* 如果节点未能履行承诺，社区可能投票减少其发行或将其移除
* 性能指标公开供社区审查
* 新合伙人节点申请需经社区治理批准

这种结构化方法确保合伙人节点与JuChain作为终极链流量中心的目标保持一致，引导用户使用生态系统中有价值的应用程序。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/juchain-he-huo-ren-jie-dian.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/juchain-ji-jin-hui

# JuChain基金会

JuChain基金会在生态系统发展中扮演关键角色，获得每日代币发行量的10%(7,200 JU)用于资助各种计划。

## 治理结构

基金会的资金由社区选举的多重签名财库管理，确保：

* 透明的链上资金管理
* 交易需要多个签名人
* 社区监督所有支出

## 预算分配

基金会将其资源分配至五个战略预算：

### 研发 (40%)

* 核心协议升级
* 安全审计
* 可扩展性研发
* 学术合作
* 黑客马拉松

### 拨款与孵化 (25%)

* 基于里程碑的Dapp团队拨款
* 工具开发
* 基础设施提供商
* 社区计划

### 营销与增长 (20%)

* 全球会议
* 大使计划
* 教育内容
* 放大JuChain流量中心战略的用户获取激励

### 流动性与市场运营 (10%)

* AMM种子资金
* 交叉交易所流动性
* 市场做市以减少早期市场的滑点和波动性

### 应急储备 (5%)

* 漏洞赏金的紧急资金
* 关键基础设施故障
* 不可预见的监管成本

## 透明度与责任

为确保资源的正确使用，基金会实施多项问责措施：

1. **季度报告**：基金会每季度发布详细支出报告
2. **社区批准**：报告必须通过简单多数治理投票批准
3. **预算续期**：持续资金取决于社区批准
4. **链上跟踪**：所有资金流动在区块链上可见
5. **公开申请**：拨款计划以透明标准和公开申请流程运作

这种结构化方法确保基金会资源指向最大化JuChain生态系统价值的计划，同时保持完全透明和社区监督。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/juchain-ji-jin-hui.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## dai-bi-jing-ji-xue/suan-li-chan-chu

# 算力产出

JU算力代表JU代币分配的主要机制，占每日代币发行量的80%(57,600 JU)。本节详细介绍算力产出过程、产出结构和减半计划。

## 算力产出原则

算力产出系统设计考虑了几个关键原则：

1. **公平分配**：根据计算能力贡献分配产出
2. **长期可持续性**：减半机制确保可持续的代币经济
3. **可预测产出**：每日自动分配提供持续激励
4. **比例分配**：产出随个人对网络安全的贡献而扩展

## 减半计划

为确保长期代币价值保存和逐步降低通胀，JuChain实施减半计划：

* **频率**：每4年算力产出减半
* **公式**：每次减半将减少前一数额的50%
* **影响**：随时间创造稀缺性，同时保持早期参与者的激励

## 产出分配

算力产出产出根据明确透明的机制分配：

* **计算基础**：按算力比例分配
* **公式**：

  ```
  每日产出 = (个人算力 / 当日总算力) × 57,600
  ```
* **结算**：自动每日产出计算和分配
* **透明度**：所有分配记录在链上以供验证

## 战略重要性

算力产出结构在JuChain生态系统中发挥几个关键作用：

1. 确保代币在积极网络参与者中广泛分配
2. 为维护网络安全创造经济激励
3. 按比例于网络增长逐步将新代币引入流通
4. 产出早期采用者同时维持长期可持续性
5. 建立参与者可以围绕规划的可预测供应曲线


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/dai-bi-jing-ji-xue/suan-li-chan-chu.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## ji-chu-xin-xi/wang-luo-xin-xi

# 网络信息

## 网络信息

### 网络信息

#### JuChain 主网

| 名称     | 值                                                         |
| ------ | --------------------------------------------------------- |
| 网络名称   | JuChain Mainnet                                           |
| 描述     | JuChain 主网                                                |
| RPC 端点 | <p><https://rpc.juchain.org><br>wss\://ws.juchain.org</p> |
| 链 ID   | 210000                                                    |
| 货币符号   | JU                                                        |
| 区块浏览器  | <https://juscan.io>                                       |

#### JuChain 测试网

| 名称     | 值                                 |
| ------ | --------------------------------- |
| 网络名称   | JuChain Testnet                   |
| 描述     | JuChain 公共测试网                     |
| RPC 端点 | <https://testnet-rpc.juchain.org> |
|        | wss\://testnet-ws.juchain.org     |
| 链 ID   | 202599                            |
| 货币符号   | JU                                |
| 区块浏览器  | <https://testnet.juscan.io>       |


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/ji-chu-xin-xi/wang-luo-xin-xi.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## ji-shu-jia-gou

# 技术架构

### 架构分层

JuChain 的技术架构分为以下关键层级，每层负责特定功能：

#### 数据层（Data Layer）

* **功能**：存储区块链的所有数据。
* **核心组件**：
  * **区块**：包含头部（时间戳、前区块哈希、Merkle 根）和交易数据。
  * **状态数据库**：使用 Merkle Patricia Trie（MPT）存储账户余额和合约状态。
  * **交易池**：缓存待打包的交易。
* **特点**：支持快速查询和数据完整性验证。

#### 网络层（Network Layer）

* **功能**：处理节点间通信和数据同步。
* **核心组件**：
  * **P2P 网络**：基于点对点协议实现节点发现和数据传播。
  * **节点类型**：全节点（完整数据）、轻节点（仅头部）和验证者节点。
* **特点**：高效广播交易和区块。

#### 共识层（Consensus Layer）

* **功能**：确保网络状态一致性。
* **核心机制**：JPoSA（详见下文）。
* **特点**：1 秒出块时间，提供快速确认。

#### 执行层（Execution Layer）

* **功能**：执行交易和智能合约。
* **核心组件**：
  * **EVM**：支持 Solidity 智能合约。
  * **Gas 机制**：低成本交易费用。
* **特点**：兼容以太坊工具和合约。

#### 应用层（Application Layer）

* **功能**：提供开发者接口。
* **核心组件**：
  * **JSON-RPC API**：支持 Web3.js 交互。
  * **工具**：开发者平台、流量分析仪表板。
* **特点**：便于 dApp 开发和集成。

***

### JPoSA 共识机制

JPoSA 是 JuChain 的核心共识机制，结合权益证明（PoS）和权威证明（PoA）的特点，提供高效和安全的区块生成。

#### 核心设计

* **验证者架构**：
  * **核心验证者**：最多 21 个，负责出块。
  * **备用验证者**：随时替换故障核心验证者。
  * **候选验证者**：通过质押 JU 代币参与竞争。
* **质押机制**：
  * 用户质押 JU 代币以成为验证者或委托给现有验证者。
* **出块流程**：
  * 核心验证者轮流生成区块，每 1 秒产生一个新区块。

#### 性能参数

* **出块时间**：1 秒。
* **交易确认时间**：2-3 秒（2-3 个区块）。
* **吞吐量**：支持每秒数千笔交易（具体数值取决于网络负载和优化）。
* **容错性**：可容忍不超过 1/3 的核心验证者故障（即最多 7 个）。

#### 安全性

* **投票权重**：根据验证者质押量和历史表现调整。
* **惩罚机制**：恶意行为或离线将扣除部分质押 JU。

***

### 网络结构

JuChain 使用去中心化的 P2P 网络，支持多种节点角色。

#### 节点类型

1. **全节点**：
   * 存储完整区块链数据，验证所有交易。
   * 适合开发者或高可靠性需求。
2. **轻节点**：
   * 仅同步区块头部，依赖全节点获取数据。
   * 适合资源受限的设备。
3. **验证者节点**：
   * 参与 JPoSA 共识，需质押 JU 并保持在线。

#### 数据同步

* **区块传播**：通过 P2P 网络快速广播新区块。
* **状态同步**：新节点从最新状态开始增量更新。

***

### 核心组件

#### 1. JU 代币

* **用途**：
  * 支付交易 Gas 费用。
  * 质押以参与共识和治理。
* **特点**：驱动网络安全和生态激励。

#### 2. 区块结构

* **头部**：
  * 时间戳、前区块哈希、Merkle 根、验证者签名。
* **主体**：
  * 交易列表（包括普通转账和合约调用）。
* **大小**：默认 2 MB，可根据需求调整。

#### 3. 状态数据库

* **实现**：基于 MPT，存储账户和合约数据。
* **特点**：高效读写，支持快速状态查询。

***

### 性能特点

JuChain 的设计优化了以下性能指标：

* **快速出块**：1 秒出块时间，适合高频交易和实时应用。
* **低成本**：Gas 费用远低于以太坊，平均低于 0.001 JU。
* **高吞吐量**：通过并行交易处理支持高并发。
* **EVM 兼容性**：支持以太坊智能合约和工具，无需额外学习成本。

***

### 开发者集成

#### 1. RPC 接口

* **端点**：`https://rpc.juchain.org`
* **示例**（查询区块高度）：

```bash
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://rpc.juchain.org
```

* **id: 1 并不是链 ID（chainId），而是 JSON-RPC 协议中的请求编号，用于客户端识别请求与响应是否对应。**
* **响应**：

  ```json
  {"jsonrpc":"2.0","id":1,"result":"0x1a2b3c"}
  ```

#### 2. 网络配置

* **主网**：
  * RPC：`https://rpc.juchain.org`
  * 链 ID：210000
  * 货币符号：JU
* **Gas 参数**：
  * 最低 Gas 价格：1 gwei。
  * 交易 Gas 限制：5,500,000。

#### 3. 工具支持

* **开发框架**：Truffle、Hardhat。
* **区块浏览器**：[`https://juscan.io`](<https://juscan.io&#xA;&#xA;>)

***

### 与其他区块链对比

| **特性**      | **JuChain** | **Ethereum** | **BNB Chain** |
| ----------- | ----------- | ------------ | ------------- |
| **共识机制**    | JPoSA       | PoS          | PoSA          |
| **出块时间**    | 1 秒         | 12-15 秒      | 3 秒           |
| **交易成本**    | < 0.001 JU  | 较高           | 中等            |
| **EVM 兼容性** | 是           | 是            | 是             |

JuChain 在出块速度和成本上具有明显优势。

***

### 总结

JuChain 的技术架构通过 JPoSA 共识、EVM 兼容性和高效网络设计，提供了一个快速、低成本的区块链平台。其 1 秒出块时间和高吞吐量使其特别适合流量密集型和实时性要求高的 dApp。开发者可利用本文档中的信息，快速集成 JuChain 并构建应用。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/ji-shu-jia-gou.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## jie-dian/jie-dian-sheng-ji-2025.12

# 节点升级 【2025.12】

### 1. 升级说明

本次升级为**大版本升级**，新版本使用的数据存储格式**与旧版本不兼容**，需要重新同步全链数据。\
为了保障升级过程业务运行稳定，建议**部署全新节点进行同步升级**，待新节点同步完成后再**停止旧节点，并使用新节点对外提供服务**。

### 2. 硬件及系统配置建议

| 组件    | 配置建议             |
| ----- | ---------------- |
| CPU   | 8 核及以上           |
| 内存    | 16G 及以上          |
| 硬盘存储  | 1.5T SSD 及以上     |
| 网络带宽  | 100Mbps 以上       |
| 公网 IP | 需独立固定公网 IP       |
| 操作系统  | Ubuntu 24.04 及以上 |

### 3. 升级前准备

* 准备服务器并完成系统安装；
* 配置好独立固定公网 IP；
* 联系对接人员，将节点 IP 添加至白名单；

### 4. 升级步骤

1. 解压升级包；
2. 进入 `juchain` 目录，执行创世区块初始化：

   ```bash
   ./bin/geth --datadir data init config/genesis.json
   ```
3. 运行启动脚本：

   ```bash
   bash start.sh
   ```
4. 观察 `logs/` 目录下日志是否正常输出；
5. 等待节点完成全量数据同步；
6. 同步完成后对外提供服务；

### ⚠️ 重要提示

1. ⚠ **请务必在 2025-12-05 12:00:00 之后再使用新节点对外提供服务**，否则可能出现服务不稳定。
2. ⚠ 在主网分叉正式确认成功前（**2025-12-10 12:00:00**），请**不要删除或拆除旧节点环境**，以便在必要时进行回滚，避免影响核心业务。

### 5. 回滚步骤

如果 JuChain 主网分叉升级失败，请立即：

1. 停止新部署的同步节点；
2. 继续使用旧节点对外提供服务；
3. 如需协助，请及时联系技术对接人员；

### 6. 升级包

{% file src="/files/vGURE8RZEDsIhcDz4MHc" %}

> ✅ 建议部署前使用 SHA256 或其他校验工具验证文件完整性。

### 7. 技术支持

* 需要添加 IP 白名单、确认同步状态或技术协助时，请联系您的对接人员。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/jie-dian/jie-dian-sheng-ji-2025.12.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## jie-dian/tong-bu-jie-dian-fu-wu-qi-bu-shu

# 同步节点服务器部署

### 一、节点服务器建议配置

为保证节点的稳定运行与区块同步效率，推荐如下服务器配置：

| 组件   | 配置建议                 |
| ---- | -------------------- |
| CPU  | 8 核（8c）              |
| 内存   | 16 GB（16g）           |
| 硬盘   | 500 GB 固态硬盘（SSD）     |
| 网络带宽 | ≥100 Mbps（建议独立公网 IP） |

> ⚠️ 如区块增长迅速或有日志密集操作需求，建议适当提升存储容量。

***

### 二、节点初始化流程

#### 1. 初始化创世区块（仅需执行一次）

```bash
./bin/geth --datadir data init config/genesis.json
```

> 注意：初始化只需执行一次。节点运行后**请勿重复执行**，否则会清空数据。

***

#### 2. 启动节点服务

```bash
bash start.sh
```

***

#### 3. 停止节点服务

```bash
bash stop.sh
```

{% file src="/files/FrzoSnircNYPhVnm1a61" %}


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/jie-dian/tong-bu-jie-dian-fu-wu-qi-bu-shu.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-chang-jian-wen-ti-jie-da-faq

# 开发者常见问题解答（FAQ）

### 1. JuChain 主网和测试网的 RPC 地址是多少？

* 主网 RPC: <https://rpc.juchain.org>
* 主网 WebSocket: wss\://ws.juchain.org
* 测试网 RPC: <https://testnet-rpc.juchain.org>
* 测试网 WebSocket: ws\://testnet-ws.juchain.org

### 2. JuChain 的 Chain ID 是多少？

* 主网 Chain ID: 210000
* 测试网 Chain ID: 202599

### 3. 如何在 Hardhat 中配置 JuChain 网络？

```
networks: {
  jucoin: {
    url: "https://testnet-rpc.juchain.org",
    accounts: [PRIVATE_KEY]
  }
}
```

将 PRIVATE\_KEY 替换为你的钱包私钥。

### 4. 如何在 Truffle 中配置 JuChain 网络？

```
const HDWalletProvider = require("@truffle/hdwallet-provider");
module.exports = {
  networks: {
    juchain: {
      provider: () => new HDWalletProvider(PRIVATE_KEY, "https://testnet-rpc.juchain.org"),
      network_id: '202599',
    },
  }
}
```

### 5. 合约部署时报 “insufficient funds” 怎么办？

请确保你的钱包地址在 JuChain 测试网有足够的 JU 代币。可以通过 [测试网水龙头](/juchain-docs/zh/sheng-tai/ce-shi-wang-shui-long-tou.md) 领取。

### 6. 如何在 Remix 上部署合约到 JuChain？

* 在 MetaMask 添加 JuChain 测试网。
* 选择 “Injected Provider - MetaMask” 环境。
* 连接钱包后即可部署。

### 7. 如何在 Brownie 中添加 JuChain 网络？

`brownie networks add Juchain host=https://testnet-rpc.juchain.org chainid=202599`

### 8. 为什么合约验证失败？

* 请确保上传的源码与部署时完全一致。
* 检查编译器版本、优化参数等设置是否一致。
* 参考合约源码验证实践。

### 9. JuChain 支持哪些 Solidity 版本？

JuChain 当前仅支持 Solidity 版本 <= 0.8.8 进行编译，后续版本支持将根据官方通知逐步开放。

### 10. 如何获取更多技术支持？

* 访问 JuChain 社区与支持

<br>


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-chang-jian-wen-ti-jie-da-faq.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian

# 合约源码验证实践

对已部署的智能合约进行源码验证，是提升项目透明度与安全性的关键环节。验证后的合约允许任何人在区块链浏览器（如 JuScan）上审查其行为逻辑，并与之安全交互。本指南将引导您使用 Hardhat 框架/浏览器图形化界面完成 JuChain上的合约验证流程。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian/shi-yong-hardhat-kuang-jia-wan-cheng-juchain-shang-de-he-yue-yan-zheng-liu-cheng

# 使用 Hardhat 框架完成 JuChain 上的合约验证流程

本指南将引导您使用 Hardhat 框架完成 JuChain (及其他兼容链) 上的合约验证流程。

***

### 1. 环境配置

确保您的 Hardhat 开发环境已就绪，特别是验证相关的配置。

#### 1.1 核心插件：`@nomicfoundation/hardhat-verify`

此插件负责处理与区块浏览器 API 的交互。通过 npm 或 yarn 将其添加到项目开发依赖中：

```bash
npm install --save-dev @nomicfoundation/hardhat-verify
# 或
# yarn add --dev @nomicfoundation/hardhat-verify
```

#### 1.2 `hardhat.config.js` 配置详解

合约验证的配置集中在 `hardhat.config.js` (或 `.ts`) 文件。

**a) 启用插件:**

在配置文件顶部引入该插件：

```javascript
require("@nomicfoundation/hardhat-verify");
```

**b) 网络定义 (`networks`):**

定义目标部署网络，确保包含 `url` (RPC 地址), `chainId` 和用于部署的 `accounts`。

```javascript
// .env 文件示例: PRIVATE_KEY=0x...
// 使用 dotenv 加载环境变量，如私钥
require("dotenv").config();

// ... 其他 require 语句 ...

networks: {
  JuChainTestnet: {
    url: "https://testnet-rpc.juchain.org",
    chainId: 202599,
    // 强烈建议从环境变量加载私钥，避免硬编码
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  JuChain: {
    url: "https://rpc.juchain.org",
    chainId: 210000,
    accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
  },
  // ... 其他网络如 mainnet, sepolia 等
},
```

* **关键:** `accounts` 列表中的私钥必须是执行合约部署操作的那个账户。

**c) 区块浏览器验证配置 (`etherscan`):**

此部分用于对接区块浏览器的验证服务。**即使目标是 Juscan，配置项也需置于 `etherscan` 字段下**。

```javascript
etherscan: {
  // 目前 Juscan 不需要 API Key，保持该值即可。
  // 如果未来 Juscan 更新策略需要 API Key，请查阅其官方文档获取。
  apiKey: {
    JuChainTestnet: "JUSCAN_NO_API_KEY_REQUIRED",
    JuChain: "JUSCAN_NO_API_KEY_REQUIRED",
  },
  // 自定义兼容 Etherscan API 的区块链配置
  customChains: [
    {
      network: "JuChainTestnet",
      chainId: 202599,
      urls: {
        apiURL: "https://testnet.juscan.io/api",
        browserURL: "https://testnet.juscan.io",
      },
    },
    {
      network: "JuChain", // 确保此 network 名称与 networks 中定义的键名一致
      chainId: 210000,
      urls: {
        // 请以 Juscan 官方文档为准确认最新的主网 API URL
        apiURL: "https://juscan.io/api",
        browserURL: "https://juscan.io",
      },
    },
    // ... 其他自定义链
  ],
},
```

* **`customChains`**: 配置非 Etherscan 原生支持的网络。`network` 字段必须严格对应 `networks` 中的键名。`apiURL` 是验证请求的目标地址。

**d) Sourcify (可选):**

按需配置 Sourcify 验证支持。

```javascript
sourcify: {
  enabled: false, // 如需使用，设为 true
},
```

***

### 2. 合约部署（前置条件）

验证操作的前提是合约已成功部署到目标网络。**以下为示例场景，请替换为您实际的合约和参数：**

* **示例 `ContractA` (无依赖):**
  * 部署地址 (示例): `0x60322a8476918646E297E0267F3444872cF5bA09`
  * 构造参数 (示例): `100`, `"0x...00a"` (假设为某个地址或bytes32)
* **示例 `ContractB` (依赖 `ContractA` 地址):**
  * 部署地址 (示例): `0x2C8B08E38fd8BaaED93F91929659b9aF2B65345E`
  * 构造参数 (示例): `0x60322a8476918646E297E0267F3444872cF5bA09` (ContractA 地址), `50`, `"0x...00b"`

您应通过 Hardhat 部署脚本准确记录下实际的部署地址和使用的构造函数参数。

***

### 3. 执行验证命令

使用 `npx hardhat verify` 命令发起验证。

#### 3.1 验证示例 `ContractA`

```bash
# 命令结构: npx hardhat verify --network <网络名> <合约地址> [构造函数参数...]
# 确保使用您实际的部署地址和构造函数参数
npx hardhat verify --network JuChainTestnet 0x60322a8476918646E297E0267F3444872cF5bA09 100 "0x000000000000000000000000000000000000000a"
```

* 参数必须严格按照部署时的顺序和类型提供。

#### 3.2 验证示例 `ContractB`

```bash
# 确保使用您实际的部署地址和构造函数参数
npx hardhat verify --network JuChainTestnet 0x2C8B08E38fd8BaaED93F91929659b9aF2B65345E "0x60322a8476918646E297E0267F3444872cF5bA09" 50 "0x000000000000000000000000000000000000000b"
```

* 地址参数作为字符串传入。

#### 3.3 检查结果

验证成功后，命令行会打印区块浏览器的链接。访问该链接，确认合约代码旁出现验证标记（如绿色勾号），且"Contract" / "Code" 选项卡下显示了匹配的 Solidity 源码。

***

### 4. 常见问题与排查

验证失败通常由以下原因导致，请逐一排查：

#### 4.1 构造函数参数不匹配

* **核对**: 这是最常见的问题。请仔细比对 `verify` 命令提供的参数与部署脚本或交易记录中实际使用的参数，确保类型、顺序、数值完全一致。
* **复杂参数**: 对于复杂的参数（如 struct 或数组），建议使用 `--constructor-args` 选项指定一个导出参数列表的 JS/TS 文件。例如 `arguments.js`: `module.exports = [arg1, arg2, ...];`，然后运行 `npx hardhat verify --constructor-args arguments.js ...`。

#### 4.2 网络配置错误

* 检查 `hardhat.config.js` 中 `--network` 指定的网络名 (`JuChainTestnet`) 是否存在于 `networks` 和 `etherscan.customChains` 中，且 `chainId` 正确。
* 确认 `customChains` 中的 `apiURL` 是区块浏览器官方提供的有效验证接口。

#### 4.3 合约地址或名称错误

* 确认提供的合约地址无误，并且是部署在该 `--network` (`JuChainTestnet`) 上的。
* 如果一个 Solidity 文件包含多个合约，Hardhat 通常能自动推断。若推断失败或需要明确指定，使用 `--contract` 标志：`npx hardhat verify --contract contracts/MyFile.sol:MySpecificContract ...`。

#### 4.4 编译器或优化器设置不一致

* 确认 `hardhat.config.js` 中的 `solidity` 版本和优化器设置 (`optimizer: { enabled: true/false, runs: ... }`) 与部署时使用的设置完全相同。Hardhat 验证时会默认使用配置文件中的设置。

#### 4.5 代理合约

* **分开验证**: 通常需要先验证实现合约 (Logic Contract)，再单独处理代理合约 (Proxy Contract)。
* **链接代理**: 对于透明代理或 UUPS 代理，验证实现合约后，可能还需要在区块浏览器界面上手动将代理地址链接到实现合约地址。检查您使用的代理模式和区块浏览器的具体操作。`@openzeppelin/hardhat-upgrades` 插件提供了针对 OpenZeppelin 代理的验证辅助功能。

#### 4.6 验证服务的延迟或临时故障

* 有时即使提交成功，区块浏览器也需要几分钟时间处理并更新状态。稍后再刷新页面查看。
* 检查区块浏览器自身的状态页或社区，确认验证服务是否正常运行。

***

### 5. 手动验证（可选）

除了使用 Hardhat 插件进行验证外，大多数区块浏览器（包括 Juscan）也支持直接通过其网站界面手动验证合约源码。如果您在使用 Hardhat 验证时遇到困难，或者偏好图形化操作，可以尝试此方法。

大致步骤如下：

1. 在 Juscan (或其他浏览器) 上访问您已部署的合约地址页面。
2. 寻找类似 "Verify & Publish Contract Source Code" 或 "验证并发布合约源码" 的选项或按钮。
3. 根据提示选择正确的 Solidity **编译器版本** 和 **优化器设置**（必须与您部署时使用的完全一致）。
4. 将您的合约 **源代码** 粘贴到提供的文本框中。如果合约导入了其他文件，您可能需要：
   * 将所有代码"扁平化"(flatten)到一个文件中再粘贴。
   * 或者，如果浏览器支持，分别上传主合约文件和所有依赖的库/接口文件。
5. 如果您的合约有 **构造函数参数**，需要按照浏览器要求的格式输入。
6. 提交验证请求，等待浏览器处理。

手动验证对于理解验证过程的细节很有帮助，但在项目迭代中不如 Hardhat 自动化验证高效。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian/shi-yong-hardhat-kuang-jia-wan-cheng-juchain-shang-de-he-yue-yan-zheng-liu-cheng.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian/zai-juscan-liu-lan-qi-shang-tong-guo-tu-xing-hua-jie-mian-yan-zheng-he-yue-yuan-ma

# 在 JuScan 浏览器上通过图形化界面验证合约源码

本指南将详细介绍如何通过 JuScan 提供的图形用户界面 (GUI) 来完成合约验证。这为不熟悉命令行工具（如 Hardhat 或 Foundry）的用户提供了一种直观便捷的验证方式。验证后，用户可以直接在 JuScan 区块链浏览器上查看合约的源代码，了解其功能并与之安全交互。

***

### 准备工作

在开始验证之前，请确保您已准备好以下信息：

1. **合约地址**: 您已经成功部署到 JuChain 上的智能合约地址。
2. **合约源代码**: 完整的 Solidity (`.sol`) 或 Yul (`.yul`) 或 Vyper (`.vy`) 源代码文件。
3. **编译器版本**: 部署合约时使用的确切 Solidity / Yul / Vyper 编译器版本（例如 `0.8.8`）。
4. **EVM 版本** (如果非默认): 编译时指定的目标 EVM 版本。
5. **优化设置**: 部署时是否启用了编译优化，以及优化运行次数（`runs`，Solidity 默认通常是 `200`）。
6. **构造函数参数 ABI 编码**: 如果合约有构造函数，需要准备部署时传递给构造函数的参数经过 ABI 编码后的十六进制字符串 (以 `0x` 开头)。您可以从 Hardhat/Foundry 部署日志中查找，或使用 ethers.js/web3.js 等工具生成此编码值。
7. **库地址** (如果合约链接了外部库): 所有使用的库的名称和部署地址。
8. **许可证标识符 (SPDX License Identifier)** (可选但推荐): 您合约源代码中指定的 SPDX 许可证标识符 (例如 `MIT`, `GPL-3.0`)。
9. **JSON 输入或元数据文件** (如果选择特定验证方式): 编译器生成的标准 JSON 输入文件或 `metadata.json` 文件。

***

### 图形化验证步骤

1. **访问验证页面**:

   * **推荐**: 直接导航到您部署的合约地址页面。在合约详情页的 "Code" (代码) 选项卡下，查找并点击 "Verify & Publish" (验证并发布) 按钮或链接。
   * 或者，在 JuScan 浏览器的主菜单中寻找 "More" (更多) / "Tools" (工具) -> "Verify Contract" (验证合约) 的选项。
   * 或者，尝试直接访问验证 URL:`https://juscan.io/contract-verification（对于测试网络请访问https://testnet.juscan.io/contract-verification)` 。

   <figure><img src="/files/AoD8qNkD7cIaZ1VoPCvN" alt="" width="375"><figcaption><p>在此模块输入合约地址并选择许可证，然后选择验证方式</p></figcaption></figure>
2. **输入合约地址 (Contract Address to Verify)**: 如果您不是从合约页面直接跳转过来的，需要在此处粘贴您要验证的合约地址。
3. **选择合约许可证 (Contract License)**:
   * 从下拉菜单中选择与您合约源代码中 `SPDX-License-Identifier` (如果声明了) 相匹配的开源许可证。强烈建议指定许可证。
   * JuScan 支持多种常见许可证，包括 MIT, GPL 系列, Apache, Unlicense 等。
   * 如果代码不开源或未指定许可证，选择 "No License (None)"。
4. **选择验证方式 (Verification method / Compiler type)**:

* 此下拉菜单提供多种验证输入类型。请选择与您的项目和编译输出最匹配的方式：
  * **Solidity (Single file / Flattened source code)**: 适用于**单个 `.sol` 或 `.yul` 文件**。如果您的合约包含 `import` 语句，您需要先将所有依赖的代码"扁平化"(flatten)到这一个文件中。这是最直接的方式，但对于复杂项目可能需要预处理。
  * **Solidity (Standard JSON input)**: **推荐方式之一**。您需要上传由 Solidity 编译器生成的标准 JSON 输入文件。该文件包含了所有源码、编译器设置等信息，验证成功率较高。
  * **Solidity (Multi-part files)**: 适用于包含多个（至少两个） `.sol` 或 `.yul` 文件（例如，主合约、库、接口）并通过 `import` 相互引用的项目。您需要分别上传所有相关的源文件。
  * **Solidity (Hardhat)** / **Solidity (Foundry)**: 允许直接使用 Hardhat 或 Foundry 项目的编译产物（如 build-info 文件）进行验证。请根据界面提示操作。
  * **Vyper (Contract)**: 适用于单个 Vyper 合约文件。
  * **Vyper (Multi-part files)**: 适用于包含多个 Vyper 文件的项目。

5. **填写详细信息 (根据所选验证方式变化)**:

<figure><img src="/files/CP5P6LQ3MjNGpFzy4snm" alt="" width="375"><figcaption><p>填写详细信息模块</p></figcaption></figure>

* 根据您选择的验证方式，下方会显示不同的输入字段。
* **通用字段**:
  * **Compiler Version**: 选择与您部署时使用的**完全相同**的编译器版本 (例如 `0.8.8`)。避免选择 Nightly Builds。
  * **EVM Version**: 选择编译时指定的目标 EVM 版本。如果使用编译器默认值，通常选择 `default` 或对应编译器的默认 EVM。
  * **Optimization Enabled**: 如果编译时启用了优化，选择 "Yes" (是)，并填写优化运行次数 **Optimization Runs** (例如 `200`)。如果未启用，选择 "No" (否)。
* **对于 Solidity (Single file / Flattened)**:
  * **Is Yul contract?**: 如果您上传的是 Yul (`.yul`) 代码，勾选此项。
  * **Enter the Solidity Contract Code**: 将您的完整、扁平化后的 Solidity 或 Yul 源代码粘贴到此文本框中。
  * **Constructor Arguments**: 如果合约有构造函数，在此处粘贴 ABI 编码后的参数字符串 (以 `0x` 开头)。
  * **Contract Libraries**: 如果合约链接了外部库，点击 "Add Contract Library"，并分别填入库的**名称**和已部署的**地址**。
* **对于 Solidity (Standard JSON input)**:
  * 上传包含标准 JSON 输入的 `.json` 文件。
* **对于 Solidity (Multi-part files)**:
  * 逐个上传所有的 `.sol` 或 `.yul` 源文件，包括主合约和所有依赖文件。

6. **提交验证**: 仔细核对所有信息后，点击 "Verify and Publish" (验证并发布) 或类似名称的按钮提交验证请求。

***

### 检查验证结果

* **成功**: 如果所有信息都正确且与链上字节码匹配，页面会显示成功消息。在合约地址的详情页面，"Code" (代码) 选项卡旁边将出现一个绿色的勾号 ✅ 标记，表明合约已成功验证。同时会增加 "Read Contract" (读取合约) 和 "Write Contract" (写入合约) 选项卡，允许用户交互。
* **失败**: 如果验证失败，会显示错误信息，例如 "There was an error compiling your contract", "Bytecode does not match", "Compiler version mismatch" 等。请仔细阅读错误提示，它将指明问题所在。

***

### 常见问题与排查 (Troubleshooting)

验证失败时，请按以下步骤检查最常见的问题：

1. **编译器版本不匹配**: 确保选择的编译器版本 (包括修订号 `x.y.z`) 与部署时使用的**完全一致**。
2. **优化设置不匹配**: 确保优化启用状态 (Yes/No) 和优化运行次数 (`runs`) 与部署时完全一致。这是最常见的错误。
3. **EVM 版本不匹配**: 如果编译时指定了非默认的 EVM 版本，确保在此处也正确选择。
4. **源代码不匹配**:
   * 检查提交的源代码（无论是单个文件、多个文件还是 JSON 输入中的代码）是否与部署时的版本**逐字逐句完全一致**，包括空格、注释等。
   * 对于 Single file/Flattened 模式，确保所有 `import` 都已正确内联。
   * 源代码中的 `SPDX-License-Identifier` 应与您在表单中选择的许可证类型匹配。
5. **构造函数参数错误**: 确保提供的 ABI 编码参数字符串 (以 `0x` 开头) 与部署交易中使用的完全一致。编码方式、参数顺序、参数值都必须正确。
6. **库地址错误**: 如果使用了外部库，确保填写的库名称和已部署地址准确无误。
7. **选择了错误的验证方式**: 例如，对多文件合约使用了 Single file 方式而未扁平化。
8. **Yul 合约标识**: 如果验证的是 Yul 合约，检查是否已正确标记。
9. **网络或浏览器问题**: 尝试刷新页面、清除浏览器缓存或使用不同的浏览器重试。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/he-yue-yuan-ma-yan-zheng-shi-jian/zai-juscan-liu-lan-qi-shang-tong-guo-tu-xing-hua-jie-mian-yan-zheng-he-yue-yuan-ma.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/he-yue

# 合约

以下是一些Juchain支持的合约

代币支&#x6301;**:** JU / USDT / BNB / ETH

BNB: `0x151b6F646Ac02Ed9877884ed9637A84f2FD8FaA6`

ETH: `0x80077F108Dd73B709C43A1a13F0EEF25e48f7D0e`


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/he-yue.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/ji-shu-can-kao

# 技术参考

### 概述

“技术参考”部分为开发者提供了 JuChain 的核心技术细节，包括 API 接口、智能合约 ABI、共识机制参数和其他关键配置信息。本章节旨在作为开发者的技术手册，帮助您与 JuChain 测试网或主网交互、调试应用并优化开发流程。JuChain 的设计注重高性能、低成本和 EVM 兼容性，所有参考信息均基于此特性构建。

***

### 1. JSON-RPC API 参考

JuChain 提供标准的 JSON-RPC API，支持与区块链交互。以下是常用方法及其参数，适用于测试网（`https://testnet-rpc.juchain.org`）和主网（未来上线后提供）。

#### 1.1 配置

* **端点**：`https://testnet-rpc.juchain.org`
* **协议**：HTTP/HTTPS 或 WebSocket（`wss://testnet-rpc.juchain.org`）

#### 1.2 常用方法

**eth\_blockNumber**

* **描述**：返回当前区块高度。
* **请求**：

  ```json
  {
    "jsonrpc": "2.0",
    "method": "eth_blockNumber",
    "params": [],
    "id": 1
  }
  ```
* **响应**：

  ```json
  {
    "jsonrpc": "2.0",
    "id": 1,
    "result": "0x1a2b3c" // 十六进制区块高度
  }
  ```
* **示例**（cURL）：

  ```bash
  curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://testnet-rpc.juchain.org
  ```

**eth\_getBalance**

* **描述**：查询指定地址的 JU 余额。
* **参数**：
  * `address`：20 字节地址（如 `"0x1234567890abcdef1234567890abcdef12345678"`）。
  * `block`：区块标签（如 `"latest"`）。
* **请求**：

  ```json
  {
    "jsonrpc": "2.0",
    "method": "eth_getBalance",
    "params": ["0x1234567890abcdef1234567890abcdef12345678", "latest"],
    "id": 2
  }
  ```
* **响应**：

  ```json
  {
    "jsonrpc": "2.0",
    "id": 2,
    "result": "0x16345785d8a0000" // 余额（wei）
  }
  ```

**eth\_sendRawTransaction**

* **描述**：发送已签名的交易。
* **参数**：
  * `rawTx`：签名后的交易数据（十六进制字符串）。
* **请求**：

  ```json
  {
    "jsonrpc": "2.0",
    "method": "eth_sendRawTransaction",
    "params": ["0xf86c018502540be400825208941234567890abcdef1234567890abcdef1234567888016345785d8a00008025a0..."],
    "id": 3
  }
  ```
* **响应**：

  ```json
  {
    "jsonrpc": "2.0",
    "id": 3,
    "result": "0xabcdef1234567890abcdef1234567890abcdef1234567890abcdef1234567890" // 交易哈希
  }
  ```

**eth\_call**

* **描述**：调用智能合约的只读方法。
* **参数**：
  * `transaction`：包含 `to`（合约地址）和 `data`（方法签名及参数）。
  * `block`：区块标签。
* **请求**：

  ```json
  {
    "jsonrpc": "2.0",
    "method": "eth_call",
    "params": [{"to": "0xContractAddress", "data": "0x6d4ce63c"}, "latest"],
    "id": 4
  }
  ```
* **响应**：

  ```json
  {
    "jsonrpc": "2.0",
    "id": 4,
    "result": "0x000000000000000000000000000000000000000000000000000000000000002a" // 返回值（如 42）
  }
  ```

#### 1.3 完整 API 列表

* 更多方法（如 `eth_getTransactionByHash`、`eth_getBlockByNumber`）与 Ethereum API 兼容，请参考 [Ethereum JSON-RPC 文档](https://ethereum.org/en/developers/docs/apis/json-rpc/)。

***

### 2. 智能合约 ABI

以下是 JuChain 核心合约的 ABI 示例，用于与 JU 代币和其他功能交互。

#### 2.1 JU 代币 ABI

* **合约地址**：TODO。
* **标准**：ERC-20。
* **核心方法**：

  ```json
  [
    {
      "constant": true,
      "inputs": [{"name": "_owner", "type": "address"}],
      "name": "balanceOf",
      "outputs": [{"name": "balance", "type": "uint256"}],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {"name": "_to", "type": "address"},
        {"name": "_value", "type": "uint256"}
      ],
      "name": "transfer",
      "outputs": [{"name": "success", "type": "bool"}],
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {"name": "_spender", "type": "address"},
        {"name": "_value", "type": "uint256"}
      ],
      "name": "approve",
      "outputs": [{"name": "success", "type": "bool"}],
      "type": "function"
    }
  ]
  ```

***

### 3. JPoSA 参数

JPoSA（JuChain Proof of Stake Authorization）是 JuChain 的共识机制，以下是关键参数：

#### 3.1 共识参数

* **区块时间**：1 秒。
* **交易最终确认**：2-3 秒（2-3 个区块）。
* **最大核心验证者数量**：21。
* **最小质押要求**：10,000 JU（测试网可调整）。
* **验证周期**：默认 7200 区块（约 6 小时），动态调整范围 3600-14400 区块。

#### 3.2 容错性

* **拜占庭容错**：可容忍 1/3 验证者故障或恶意行为（最多 7 个核心验证者）。
* **惩罚机制**：连续 100 个区块未出块，扣除 5% 质押 JU。

#### 3.3 奖励

* **区块奖励**：每区块 2 JU（测试网），动态调整。
* **委托奖励分配**：验证者与委托者按 70:30 比例分配。

***

### 4. 网络配置

#### 4.1 测试网

* **RPC 端点**：`https://testnet-rpc.juchain.org`
* **WebSocket**：`wss://testnet-ws.juchain.org`
* **网络 ID**：202599
* **货币符号**：JU
* **区块浏览器**：`https://testnet-explorer.juchain.org`

#### 4.2 Gas 参数

* **Gas 价格**：最低 1 gwei（10⁹ wei），建议 1-5 gwei。
* **Gas 限制**：
  * 单笔交易：默认 5,500,000。
  * 区块：默认 30,000,000。
* **单位换算**：1 JU = 10¹⁸ wei。

#### 4.3 节点要求

* **全节点**：
  * CPU：4 核
  * 内存：8 GB
  * 存储：500 GB SSD
* **验证者节点**：内存增至 16 GB，需 24/7 在线。

***

### 5. 错误码

以下是常见错误及其解决方法：

| **错误码** | **描述**                    | **解决方法**           |
| ------- | ------------------------- | ------------------ |
| -32000  | 余额不足（Insufficient funds）  | 检查账户余额并获取更多 JU 代币。 |
| -32603  | Gas 不足（Out of gas）        | 提高交易的 Gas 限制。      |
| 429     | 请求过于频繁（Too Many Requests） | 等待 1 分钟后重试，或检查限额。  |
| 0x      | 交易失败（Reverted）            | 检查合约逻辑或输入参数。       |

***

### 6. 工具与 SDK

#### 6.1 Truffle 配置

* **示例**（`truffle-config.js`）：

  ```javascript
  const HDWalletProvider = require("@truffle/hdwallet-provider");
  module.exports = {
    networks: {
      juchain_testnet: {
        provider: () => new HDWalletProvider("助记词", "https://testnet-rpc.juchain.org"),
        network_id: 202599,
        gas: 5500000,
        gasPrice: 1000000000,
      },
    },
  };
  ```

***

### 7. 其他参考

* **EVM 兼容性**：JuChain 支持所有以太坊操作码（Opcodes），参考 [Ethereum Yellow Paper](https://ethereum.github.io/yellowpaper/paper.pdf)。
* **区块结构**：
  * 头部：版本、前哈希、时间戳、Merkle 根。
  * 主体：交易列表。
* **状态数据库**：基于 MPT，参考 [Ethereum Trie](https://ethereum.org/en/developers/docs/data-structures-and-encoding/)。

***

### 总结

本技术参考为开发者提供了与 JuChain 交互所需的详细技术信息，包括 API 调用、合约 ABI、共识参数和网络配置。结合\[开发者指南]和\[教程与示例]，您可以快速构建、部署和调试 dApp。如需更多支持，请访问\[社区与支持]页面。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/ji-shu-can-kao.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/jiao-cheng-yu-shi-li-gou-jian-bing-bu-shu-yi-ge-jian-dan-de-dapp

# 教程与示例：构建并部署一个简单的 DApp

本教程将引导您在 JuChain 上创建一个简单的去中心化应用程序（DApp）：一个“问候”智能合约，用户可以设置并读取自定义问候语。我们将使用 Solidity 编写合约，通过 Truffle 部署到 JuChain 测试网，并创建一个前端界面与 MetaMask 交互。本教程旨在展示 JuChain 的开发流程、快速交易确认和低成本优势。

***

### 前提条件

* **工具**：
  * Node.js（v16 或更高版本，安装：`https://nodejs.org/`）
  * Truffle Suite（全局安装：`npm install -g truffle`）
  * MetaMask 浏览器扩展（安装：`https://metamask.io/`）
* **JuChain 测试网**：
  * RPC 端点：`https://testnet-rpc.juchain.org`
  * 网络 ID：202599
  * 测试 JU 代币：通过 JuChain 测试网水龙头获取（假设为 `https://faucet-testnet.juchain.org`）
* **基础知识**：了解 JavaScript、Solidity 和基本的区块链概念。

***

### 步骤 1：设置项目

1. **创建项目目录并初始化 Truffle**：

   ```bash
   mkdir JuChainGreeting
   cd JuChainGreeting
   truffle init
   ```

   这将生成 `contracts/`、`migrations/` 和 `truffle-config.js` 等文件夹。
2. **安装依赖**：

   ```bash
   npm install @openzeppelin/contracts web3 dotenv
   ```

   * `@openzeppelin/contracts`：提供安全合约模板。
   * `web3`：用于前端与区块链交互。
   * `dotenv`：管理环境变量。
3. **创建 .env 文件**：\
   在项目根目录创建 `.env` 文件，用于存储敏感信息：

   ```plaintext
   MNEMONIC="你的 MetaMask 助记词"
   RPC_URL="https://testnet-rpc.juchain.org"
   ```

   > **安全提示**：不要将 `.env` 文件上传到 GitHub。

***

### 步骤 2：编写智能合约

在 `contracts/` 文件夹中创建 `Greeting.sol`：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Greeting {
    string public greeting;

    event GreetingSet(address indexed user, string newGreeting);

    constructor() {
        greeting = "Hello, JuChain!";
    }

    function setGreeting(string memory _greeting) public {
        require(bytes(_greeting).length > 0, "Greeting cannot be empty");
        greeting = _greeting;
        emit GreetingSet(msg.sender, _greeting);
    }

    function getGreeting() public view returns (string memory) {
        return greeting;
    }
}
```

**说明**

* **`greeting`**：存储问候语的公共变量。
* **`setGreeting`**：允许用户设置新问候语，触发事件。
* **`getGreeting`**：读取当前问候语。
* **事件**：记录每次问候语变更，便于前端监听。

***

### 步骤 3：配置 Truffle

编辑 `truffle-config.js`，添加 JuChain 测试网配置：

```javascript
require("dotenv").config();
const HDWalletProvider = require("@truffle/hdwallet-provider");

const { MNEMONIC, RPC_URL } = process.env;

module.exports = {
  networks: {
    juchain_testnet: {
      provider: () => new HDWalletProvider(MNEMONIC, RPC_URL),
      network_id: 202599, // JuChain 测试网 ID
      gas: 5500000,     // Gas 上限
      gasPrice: 1000000000, // 1 gwei
      confirmations: 2, // 等待 2 个区块确认
      timeoutBlocks: 200, // 超时区块数
    },
  },
  compilers: {
    solc: {
      version: "0.8.0", // Solidity 版本
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  },
};
```

**检查点**

* 确保 `.env` 文件中的 `MNEMONIC` 和 `RPC_URL` 已正确配置。
* 测试网络连接：

  ```bash
  truffle console --network juchain_testnet
  > web3.eth.getBlockNumber()
  ```

  如果返回区块高度，说明连接成功。

***

### 步骤 4：部署合约

1. **创建部署脚本**：\
   在 `migrations/` 文件夹中创建 `2_deploy_greeting.js`：

   ```javascript
   const Greeting = artifacts.require("Greeting");

   module.exports = function (deployer) {
     deployer.deploy(Greeting);
   };
   ```
2. **部署到 JuChain 测试网**：

   ```bash
   truffle migrate --network juchain_testnet
   ```

   * 输出示例：

     ```
     2_deploy_greeting.js
     ====================
     Deploying 'Greeting'
     --------------------
     > transaction hash: 0x...
     > contract address: 0x1234567890abcdef1234567890abcdef12345678
     ```
   * 记录合约地址（如 `0x1234...5678`），用于后续步骤。
3. **验证部署**：\
   在 Truffle 控制台中：

   ```bash
   truffle console --network juchain_testnet
   > let greeting = await Greeting.at("0x1234567890abcdef1234567890abcdef12345678")
   > await greeting.getGreeting()
   ```

   输出应为 `"Hello, JuChain!"`。

***

### 步骤 5：创建前端界面

1. **初始化前端文件夹**：

   ```bash
   mkdir public && cd public
   touch index.html
   ```
2. **编写 index.html**：\
   在 `public/index.html` 中添加以下内容：

   ```html
   <!DOCTYPE html>
   <html lang="en">
   <head>
     <meta charset="UTF-8">
     <title>JuChain Greeting dApp</title>
     <style>
       body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
       input { padding: 5px; margin: 10px; width: 200px; }
       button { padding: 10px 20px; margin: 5px; }
       #status { color: green; }
     </style>
   </head>
   <body>
     <h1>JuChain Greeting dApp</h1>
     <p>Current Greeting: <span id="greeting">Loading...</span></p>
     <input id="newGreeting" type="text" placeholder="Enter new greeting" />
     <br />
     <button onclick="setGreeting()">Set Greeting</button>
     <p id="status"></p>

     <script src="https://cdn.jsdelivr.net/npm/web3@1.5.3/dist/web3.min.js"></script>
     <script>
       const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // 替换为你的合约地址
       const abi = [
         {
           "inputs": [],
           "stateMutability": "nonpayable",
           "type": "constructor"
         },
         {
           "anonymous": false,
           "inputs": [
             {"indexed": true, "internalType": "address", "name": "user", "type": "address"},
             {"indexed": false, "internalType": "string", "name": "newGreeting", "type": "string"}
           ],
           "name": "GreetingSet",
           "type": "event"
         },
         {
           "inputs": [],
           "name": "getGreeting",
           "outputs": [{"internalType": "string", "name": "", "type": "string"}],
           "stateMutability": "view",
           "type": "function"
         },
         {
           "inputs": [{"internalType": "string", "name": "_greeting", "type": "string"}],
           "name": "setGreeting",
           "outputs": [],
           "stateMutability": "nonpayable",
           "type": "function"
         },
         {
           "inputs": [],
           "name": "greeting",
           "outputs": [{"internalType": "string", "name": "", "type": "string"}],
           "stateMutability": "view",
           "type": "function"
         }
       ];
       let web3, contract;

       async function init() {
         if (window.ethereum) {
           web3 = new Web3(window.ethereum);
           try {
             await window.ethereum.request({ method: "eth_requestAccounts" });
             contract = new web3.eth.Contract(abi, contractAddress);
             updateGreeting();
           } catch (error) {
             console.error("User denied account access", error);
             document.getElementById("status").innerText = "Please connect MetaMask";
           }
         } else {
           alert("Please install MetaMask!");
         }
       }

       async function updateGreeting() {
         const greeting = await contract.methods.getGreeting().call();
         document.getElementById("greeting").innerText = greeting;
       }

       async function setGreeting() {
         const accounts = await web3.eth.getAccounts();
         const newGreeting = document.getElementById("newGreeting").value;
         if (!newGreeting) {
           document.getElementById("status").innerText = "Greeting cannot be empty!";
           return;
         }
         document.getElementById("status").innerText = "Setting greeting...";
         try {
           await contract.methods.setGreeting(newGreeting).send({ from: accounts[0] });
           document.getElementById("status").innerText = "Greeting updated successfully!";
           updateGreeting();
         } catch (error) {
           document.getElementById("status").innerText = "Error: " + error.message;
         }
       }

       window.onload = init;
     </script>
   </body>
   </html>
   ```
3. **获取 ABI**：
   * 从 `build/contracts/Greeting.json` 中复制 `"abi"` 字段，替换 `index.html` 中的 `abi` 变量内容。
   * 将 `contractAddress` 替换为步骤 4 中记录的实际合约地址。

***

### 步骤 6：运行和测试

1. **启动本地服务器**：

   ```bash
   npx http-server ./public
   ```

   * 默认访问 `http://localhost:8080`。
2. **连接 MetaMask**：
   * 在 MetaMask 中添加 JuChain 测试网：
     * 网络名称：JuChain Testnet
     * RPC URL：`https://testnet-rpc.juchain.org`
     * 链 ID：202599
     * 货币符号：JU
   * 确保账户中有测试 JU 代币（从水龙头获取）。
3. **测试 dApp**：
   * 打开浏览器，访问 `http://localhost:8080`。
   * 检查初始问候语是否显示为 `"Hello, JuChain!"`。
   * 输入新问候语（如 `"Welcome to JuChain!"`），点击“Set Greeting”。
   * 确认状态更新为“Greeting updated successfully!”，页面显示新问候语。
   * 检查 MetaMask，交易应在 3-6 秒内确认，费用极低（约 0.001 JU）。

***

### 成果

您已成功构建并部署了一个简单的“问候”dApp：

* **智能合约**：部署在 JuChain 测试网，支持设置和读取问候语。
* **前端界面**：通过 MetaMask 与合约交互，直观显示结果。
* **JuChain 优势**：
  * **秒级确认**：交易快速完成，提升用户体验。
  * **低成本**：每次设置问候语的费用极低，适合频繁交互。
  * **EVM 兼容**：使用熟悉的以太坊工具（Truffle、Web3.js）无缝开发。

***

### 注意事项

* **网络状态**：确保 JuChain 测试网 RPC 可用，若不可用，联系 JuChain 支持。
* **Gas 费用**：测试网费用低，但在主网部署前需估算实际成本。

###


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/jiao-cheng-yu-shi-li-gou-jian-bing-bu-shu-yi-ge-jian-dan-de-dapp.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/jiao-cheng-yu-shi-li-gou-jian-yi-ge-jian-dan-de-defi-jie-dai-dapp

# 教程与示例：构建一个简单的 DeFi 借贷 DApp

本教程将指导你在 **JuChain** 上开发一个简单的去中心化金融（DeFi）借贷 DApp。用户可以存入 JU（JuChain 的原生代币）作为抵押，借出一定比例的 JU，偿还借款后取回抵押品。我们将使用 Solidity 编写智能合约，利用 JuChain 的 EVM 兼容性进行部署，并通过前端与用户交互。

此示例展示了 JuChain 的 **秒级交易确认** 和 **极低成本** 优势，非常适合 DeFi 应用场景。

***

### 教程：简单 DeFi 借贷 DApp

#### 前提条件

**开发环境**

* **Node.js**：v16 或更高版本
* **Truffle Suite**：通过 `npm install -g truffle` 安装
* **MetaMask**：浏览器扩展，配置为 JuChain 测试网
* **基础知识**：熟悉 Solidity 和 Web3.js

**JuChain 测试网**

* **测试网 RPC**：`https://testnet-rpc.juchain.org`
* **网络 ID**：`202599`（假设）
* **测试 JU**：通过 JuChain 测试网水龙头获取

***

#### 步骤 1：设置项目

1. **创建项目目录并初始化 Truffle**：

   ```bash
   mkdir JuChainLending
   cd JuChainLending
   truffle init
   ```
2. **安装依赖**：

   ```bash
   npm install @openzeppelin/contracts web3
   ```

***

#### 步骤 2：编写借贷智能合约

在 `contracts/` 文件夹中创建 `LendingPool.sol`：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract LendingPool is ReentrancyGuard {
    mapping(address => uint256) public collateral; // 用户抵押的 JU 数量
    mapping(address => uint256) public borrowed;   // 用户借出的 JU 数量
    uint256 public constant LTV = 50;              // 贷款价值比（Loan-to-Value），50%
    uint256 public constant INTEREST_RATE = 5;     // 年化利率 5%（简化为每次还款收取）

    event Deposited(address indexed user, uint256 amount);
    event Borrowed(address indexed user, uint256 amount);
    event Repaid(address indexed user, uint256 amount);
    event Withdrawn(address indexed user, uint256 amount);

    constructor() {
        // 无需参数，JU 是原生代币
    }

    // 存入 JU 作为抵押
    function depositCollateral() external payable nonReentrant {
        require(msg.value > 0, "Amount must be greater than 0");
        collateral[msg.sender] += msg.value;
        emit Deposited(msg.sender, msg.value);
    }

    // 借出 JU，基于抵押的 50% LTV
    function borrow(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        uint256 maxBorrow = (collateral[msg.sender] * LTV) / 100;
        require(borrowed[msg.sender] + amount <= maxBorrow, "Exceeds max borrowable amount");
        borrowed[msg.sender] += amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        emit Borrowed(msg.sender, amount);
    }

    // 偿还借款（含利息）
    function repay(uint256 amount) external payable nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(borrowed[msg.sender] >= amount, "Repay exceeds borrowed amount");
        uint256 interest = (amount * INTEREST_RATE) / 100;
        uint256 totalRepay = amount + interest;
        require(msg.value >= totalRepay, "Insufficient payment");
        borrowed[msg.sender] -= amount;
        emit Repaid(msg.sender, amount);

        // 退回多余的 JU
        if (msg.value > totalRepay) {
            (bool success, ) = msg.sender.call{value: msg.value - totalRepay}("");
            require(success, "Refund failed");
        }
    }

    // 提取抵押（需先还清借款）
    function withdrawCollateral(uint256 amount) external nonReentrant {
        require(amount > 0, "Amount must be greater than 0");
        require(collateral[msg.sender] >= amount, "Insufficient collateral");
        require(borrowed[msg.sender] == 0, "Must repay all loans first");
        collateral[msg.sender] -= amount;
        (bool success, ) = msg.sender.call{value: amount}("");
        require(success, "Transfer failed");
        emit Withdrawn(msg.sender, amount);
    }

    // 查看用户状态
    function getUserStatus(address user) external view returns (uint256, uint256, uint256) {
        uint256 maxBorrow = (collateral[user] * LTV) / 100;
        return (collateral[user], borrowed[user], maxBorrow);
    }
}
```

**功能说明**

* **`depositCollateral()`**：用户发送 JU（原生代币）作为抵押。
* **`borrow(uint256 amount)`**：根据 50% LTV 从合约借出 JU。
* **`repay(uint256 amount)`**：偿还借款并支付 5% 利息，多余的 JU 会退回。
* **`withdrawCollateral(uint256 amount)`**：还清借款后提取抵押的 JU。
* **`getUserStatus(address user)`**：查看用户的抵押、借款和最大可借额度。
* **安全性**：使用 `ReentrancyGuard` 防止重入攻击。

**注意**

JU 是 JuChain 的原生代币，不依赖 ERC20 标准，直接通过 `msg.value` 和 `call` 处理。

***

#### 步骤 3：配置 Truffle

编辑 `truffle-config.js`，连接 JuChain 测试网：

```javascript
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = "你的 MetaMask 助记词"; // 替换为你的助记词

module.exports = {
  networks: {
    juchain_testnet: {
      provider: () => new HDWalletProvider(mnemonic, "https://testnet-rpc.juchain.org"),
      network_id: 202599,
      gas: 5500000,
      gasPrice: 1000000000, // 1 gwei
    },
  },
  compilers: {
    solc: {
      version: "0.8.0",
    },
  },
};
```

***

#### 步骤 4：部署合约

1. **创建部署脚本**：\
   在 `migrations/` 文件夹中添加 `2_deploy_lending.js`：

   ```javascript
   const LendingPool = artifacts.require("LendingPool");

   module.exports = function (deployer) {
     deployer.deploy(LendingPool);
   };
   ```
2. **部署到 JuChain 测试网**：

   ```bash
   truffle migrate --network juchain_testnet
   ```

   记录部署后的 `LendingPool` 合约地址。

***

#### 步骤 5：测试合约

使用 Truffle 控制台验证功能：

1. **进入控制台**：

   ```bash
   truffle console --network juchain_testnet
   ```
2. **测试代码**：

   ```javascript
   let lending = await LendingPool.deployed();
   let accounts = await web3.eth.getAccounts();

   // 存入 100 JU 作为抵押
   await lending.depositCollateral({ from: accounts[0], value: web3.utils.toWei("100") });
   console.log((await lending.collateral(accounts[0])).toString()); // 输出 "100000000000000000000"

   // 借出 50 JU
   await lending.borrow(web3.utils.toWei("50"), { from: accounts[0] });
   console.log((await lending.borrowed(accounts[0])).toString()); // 输出 "50000000000000000000"

   // 查看用户状态
   let status = await lending.getUserStatus(accounts[0]);
   console.log(status.map(x => web3.utils.fromWei(x))); // 输出 [100, 50, 50]

   // 偿还 50 JU（含 5% 利息，共 52.5 JU）
   await lending.repay(web3.utils.toWei("50"), { from: accounts[0], value: web3.utils.toWei("52.5") });
   console.log((await lending.borrowed(accounts[0])).toString()); // 输出 "0"

   // 提取 100 JU
   await lending.withdrawCollateral(web3.utils.toWei("100"), { from: accounts[0] });
   console.log((await lending.collateral(accounts[0])).toString()); // 输出 "0"
   ```

***

#### 步骤 6：创建前端界面

在项目根目录创建 `index.html`：

```html
<!DOCTYPE html>
<html>
<head>
  <title>JuChain Lending dApp</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 50px; }
    button { padding: 10px 20px; margin: 5px; }
    input { padding: 5px; margin: 5px; }
  </style>
</head>
<body>
  <h1>JuChain Lending Pool</h1>
  <p>Collateral: <span id="collateral">0</span> JU</p>
  <p>Borrowed: <span id="borrowed">0</span> JU</p>
  <p>Max Borrowable: <span id="maxBorrow">0</span> JU</p>
  <input id="amount" type="number" placeholder="Amount in JU" />
  <br />
  <button onclick="deposit()">Deposit Collateral</button>
  <button onclick="borrow()">Borrow JU</button>
  <button onclick="repay()">Repay Loan</button>
  <button onclick="withdraw()">Withdraw Collateral</button>

  <script src="https://cdn.jsdelivr.net/npm/web3@1.5.3/dist/web3.min.js"></script>
  <script>
    const contractAddress = "你的 LendingPool 合约地址"; // 替换为实际地址
    const abi = [ /* 从 build/contracts/LendingPool.json 获取 ABI */ ]; // 替换为完整 ABI
    let web3, lending;

    async function init() {
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        lending = new web3.eth.Contract(abi, contractAddress);
        updateStatus();
      } else {
        alert("Please install MetaMask!");
      }
    }

    async function updateStatus() {
      const accounts = await web3.eth.getAccounts();
      const status = await lending.methods.getUserStatus(accounts[0]).call();
      document.getElementById("collateral").innerText = web3.utils.fromWei(status[0]);
      document.getElementById("borrowed").innerText = web3.utils.fromWei(status[1]);
      document.getElementById("maxBorrow").innerText = web3.utils.fromWei(status[2]);
    }

    async function deposit() {
      const accounts = await web3.eth.getAccounts();
      const amount = web3.utils.toWei(document.getElementById("amount").value);
      await lending.methods.depositCollateral().send({ from: accounts[0], value: amount });
      updateStatus();
    }

    async function borrow() {
      const accounts = await web3.eth.getAccounts();
      const amount = web3.utils.toWei(document.getElementById("amount").value);
      await lending.methods.borrow(amount).send({ from: accounts[0] });
      updateStatus();
    }

    async function repay() {
      const accounts = await web3.eth.getAccounts();
      const amount = web3.utils.toWei(document.getElementById("amount").value);
      const interest = (BigInt(amount) * 5n) / 100n;
      const total = (BigInt(amount) + interest).toString();
      await lending.methods.repay(amount).send({ from: accounts[0], value: total });
      updateStatus();
    }

    async function withdraw() {
      const accounts = await web3.eth.getAccounts();
      const amount = web3.utils.toWei(document.getElementById("amount").value);
      await lending.methods.withdrawCollateral(amount).send({ from: accounts[0] });
      updateStatus();
    }

    init();
  </script>
</body>
</html>
```

**配置说明**

* **ABI**：从 `build/contracts/LendingPool.json` 中复制完整的 ABI 替换到 `abi` 变量。
* **合约地址**：将 `contractAddress` 替换为步骤 4 中部署的地址。
* **运行**：使用本地服务器（如 `npx http-server`）打开 `index.html`，通过 MetaMask 连接 JuChain 测试网。

***

#### 步骤 7：运行和测试

1. 在 MetaMask 中切换到 JuChain 测试网，并确保有足够的测试 JU。
2. 打开浏览器中的 `index.html`，依次测试：
   * **存入抵押**：输入 100 JU，点击 "Deposit Collateral"。
   * **借出 JU**：输入 50 JU，点击 "Borrow JU"。
   * **偿还借款**：输入 50 JU，点击 "Repay Loan"（自动包含 5% 利息，共 52.5 JU）。
   * **提取抵押**：输入 100 JU，点击 "Withdraw Collateral"。
3. JuChain 的秒级确认将确保交易快速完成，交易成本极低（通常低于 0.001 美元）。

***

#### 成果

你已成功构建并部署了一个简单的 DeFi 借贷 dApp：

* 用户可以存入 JU 作为抵押。
* 根据 50% LTV 借出 JU。
* 偿还借款并支付 5% 利息后取回抵押品。
* 前端界面直观显示用户的抵押、借款和可借额度。

此 dApp 展示了 JuChain 的高性能金融基础设施，适合扩展到更复杂的 DeFi 应用（如多资产支持或动态利率）。

***

#### 注意事项

1. **安全性**：
   * 实际生产中需添加清算机制（防止抵押价值不足）并进行代码审计。
   * 当前合约未处理极端情况（如 JU 余额不足）。
2. **测试网**：
   * 确保账户中有足够的测试 JU 用于交互。
3. **扩展性**：
   * 可添加时间相关的利息计算或支持其他资产。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/jiao-cheng-yu-shi-li-gou-jian-yi-ge-jian-dan-de-defi-jie-dai-dapp.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/json-rpc

# JSON-RPC

本篇文档介绍 JuChain 节点搭建与 JSON-RPC API 调用的常见问题与操作方法，适用于开发者快速集成与排查。

***

### 节点搭建

#### 1. 支持的操作系统

JuChain 节点支持主流 Linux 发行版（如 Ubuntu、CentOS）、macOS 以及 Windows（推荐使用 WSL）。

#### 2. 获取节点程序

* **端点**：`https://testnet-rpc.juchain.org`
* **示例**（查询区块高度）：

  ```bash
  curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://testnet-rpc.juchain.org
  ```
* **响应**：

  ```json
  {"jsonrpc":"2.0","id":1,"result":"0x1a2b3c"}
  ```

#### 3. 快速启动全节点

以 Linux 为例：

```bash
wget https://github.com/juchain/juchain/releases/download/vX.Y.Z/juchain-linux-amd64.tar.gz
tar -xzvf juchain-linux-amd64.tar.gz
cd juchain
./juchain --network mainnet
```

* `--network mainnet` 表示主网，测试网可用 `--network testnet`。

#### 4. 节点同步时间

首次全量同步时间取决于网络带宽和硬盘性能，通常需要数小时到一天不等。建议使用 SSD 硬盘以提升同步速度。

#### 5. 查看节点同步状态

启动节点后，终端会持续输出区块高度等信息。你也可以通过 RPC API 查询同步状态：

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_syncing","params":[],"id":1}' https://testnet-rpc.juchain.org
```

#### 6. 开放节点 RPC 服务

启动节点时添加参数：

```bash
./juchain --rpc --rpcaddr 0.0.0.0 --rpcport 8545
```

* `--rpc` 启用 RPC 服务
* `--rpcaddr` 设置监听地址
* `--rpcport` 设置端口

#### 7. 节点常见问题排查

* **端口被占用**：请检查 8545、30303 等端口是否被其他程序占用。
* **同步卡住**：可尝试重启节点或检查网络连接。
* **数据损坏**：可尝试删除数据目录后重新同步（注意备份密钥）。

***

### JSON-RPC API 调用

#### 1. 支持的 API

JuChain 兼容以太坊 JSON-RPC API，常用接口包括 `eth_blockNumber`、`eth_getBalance`、`eth_sendRawTransaction` 等。

#### 2. 通过 curl 调用 RPC

**查询区块高度：**

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}' https://rpc.juchain.org
```

**查询账户余额：**

```bash
curl -X POST --data '{"jsonrpc":"2.0","method":"eth_getBalance","params":["0xYourAddress","latest"],"id":1}' https://rpc.juchain.org
```

#### 3. Web3.js/ethers.js 连接示例

**Web3.js：**

```js
const Web3 = require('web3');
const web3 = new Web3('https://rpc.juchain.org');
web3.eth.getBlockNumber().then(console.log);
```

**ethers.js：**

```js
import { ethers } from "ethers";
const provider = new ethers.providers.JsonRpcProvider("https://rpc.juchain.org");
provider.getBlockNumber().then(console.log);
```

#### 4. WebSocket 支持

主网 WebSocket 地址：`wss://ws.juchain.org`\
测试网 WebSocket 地址：`ws://testnet-ws.juchain.org`

#### 5. 监听链上事件

以 ethers.js 为例：

```js
const provider = new ethers.providers.WebSocketProvider("wss://ws.juchain.org");
provider.on("block", (blockNumber) => {
  console.log("New block:", blockNumber);
});
```

#### 6. API 调用常见错误及排查

* **返回 403/401**：请检查 RPC 节点是否对外开放，或是否有访问权限限制。
* **超时/无响应**：检查网络连接，或节点是否同步完成。
* **数据格式错误**：请确保请求体为标准 JSON-RPC 格式。

***

### API 请求限制 `(2025.7.25) 更新`

#### 1. 请求频率限制

**接口限制**:

* 对 `eth_getLogs` 和 `eth_getFilterLogs` 接口的请求频率进行限制，每个请求最多支持 10 秒内 500 次调用。
* 当请求频率超过此限制时，系统将不再提供请求服务，确保节点的稳定性和响应性能。

#### 2. 区块跨度限制

**接口限制**:

* 为了提升查询效率并减少数据负载，`eth_getLogs` 和 `eth_getFilterLogs` 查询接口引入了区块跨度限制。
* 用户在查询时需确保区块跨度不超过设定的最大值，超出区块跨度将会被拒绝处理。通过控制查询数据的区间，避免大跨度的查询操作导致节点处理性能下降，同时提升常规查询的响应速度。

#### 3. 移除 `debug_` 系列方法

**接口限制**:

* 从本次更新开始，不再提供 `debug_` 下的所有调试方法。这些方法会被彻底移除，不再作为公开对外支持的功能。
* 例如：`debug_traceTransaction`、`debug_traceBlock` 等调试相关方法将无法使用。

***

### JuChain 网络信息

* 主网 RPC: `https://rpc.juchain.org`
* 主网 WebSocket: `wss://ws.juchain.org`
* 主网 Chain ID: `210000`
* 测试网 RPC: `https://testnet-rpc.juchain.org`
* 测试网 WebSocket: `ws://testnet-ws.juchain.org`
* 测试网 Chain ID: `202599`

***

如需更详细的节点搭建脚本、API 示例或遇到具体报错，可以联系官方社区支持。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/json-rpc.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/kuai-su-kai-shi

# 快速开始

{% hint style="warning" %}
JuChain 当前仅支持 Solidity 版本 <= 0.8.8 进行编译，后续版本支持将根据官方通知逐步开放。
{% endhint %}

## 配置网络

### 网络信息

#### JuChain 主网

| 名称     | 值                                                         |
| ------ | --------------------------------------------------------- |
| 网络名称   | JuChain Mainnet                                           |
| 描述     | JuChain 公共主网                                              |
| RPC 端点 | <p><https://rpc.juchain.org><br>wss\://ws.juchain.org</p> |
| 链 ID   | 210000                                                    |
| 货币符号   | JU                                                        |
| 区块浏览器  | <https://juscan.io>                                       |

#### JuChain 测试网

| 名称     | 值                                                                            |
| ------ | ---------------------------------------------------------------------------- |
| 网络名称   | JuChain Testnet                                                              |
| 描述     | JuChain 公共测试网                                                                |
| RPC 端点 | <p><https://testnet-rpc.juchain.org> </p><p>ws\://testnet-ws.juchain.org</p> |
| 链 ID   | 202599                                                                       |
| 货币符号   | JU                                                                           |
| 区块浏览器  | <https://testnet.juscan.io>                                                  |

## 部署

### **Hardhat​** &#x20;

\
修改您的 Hardhat 配置文件 `hardhat.config.ts` 以指向 Juchain Testnet 公共 RPC。

```
const config: HardhatUserConfig = {
  ...
  networks: {
    jucoin: {
      url: "https://testnet-rpc.juchain.org" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
};
```

### **Foundry​**&#x20;

\
要使用 Juchain Testnet Public RPC 进行部署，请运行：

```
forge create ... --rpc-url=https://testnet-rpc.juchain.org --legacy
```

### **Remix Web IDE​** &#x20;

编译合约后，使用 Remix 部署的最简单方法是[设置 Metamask](https://docs.bitlayer.org/user-guide/setup#metamask) ，然后选择 **Juchain Testnet** 网络。

在“部署和运行交易”选项卡中，使用“环境”下拉菜单并选择“注入提供程序 - MetaMask”。\
连接你的钱包并选择 Juchain 测试网。你的账户应该会在 Remix 中自动选中，点击“部署”。

### **Truffle​** &#x20;

警告\
Truffle Suite 即将**停用** 。有关持续支持、迁移选项和常见问题解答，请访问 [Consensys 博客 ](https://consensys.io/blog/consensys-announces-the-sunset-of-truffle-and-ganache-and-new-hardhat?utm_source=github\&utm_medium=referral\&utm_campaign=2023_Sep_truffle-sunset-2023_announcement_)。

\
假设你已经设置了 Truffle 环境，请转到 Truffle[ 配置文件 ](https://trufflesuite.com/docs/truffle/reference/configuration/)， `truffle.js` 。确保已安装 HDWalletProvider： `npm install @truffle/hdwallet-provider@1.4.0`

```
const HDWalletProvider = require("@truffle/hdwallet-provider")
...
module.exports = {
  networks: {
    juchain: {
      provider: () =>
        new HDWalletProvider(process.env.PRIVATE_KEY, "https://testnet-rpc.juchain.org"),
      network_id: '202599',
    },
  }
}
```

### **Brownie​**&#x20;

要添加 Juchain 测试网，请运行以下命令：

```
brownie networks add Juchain host=https://testnet-rpc.juchain.org chainid=202599 
```

要将其设置为默认网络，请在项目配置文件中添加以下内容：

```
networks:
  default: Juchain


```

<pre><code><strong>添加 Juchain 测试网的另一种方法是创建一个 yaml 文件并运行命令来添加它。
</strong></code></pre>

\
这是名为 `network-config.yaml` 的 yaml 文件的示例

```
live:
- name: Juchain
 networks:
 - chainid: 202599
   explorer: https://testnet.juscan.io
   host: https://testnet-rpc.juchain.org
   id: juchain
   name: Juchain Testnet
   要将 Juchain 测试网添加到网络列表，请运行以下命令：
```

```
brownie networks import ./network-config.yaml
```

要在 Juchain 上部署，请运行以下命令。本例中， `token.py` 是部署智能合约的脚本。请将其替换为您的脚本名称：

```
brownie run token.py --network Juchain
```

### **ethers.js​**&#x20;

在 `ethers` 脚本中设置 Juchain 测试网提供商：

```
import { ethers } from "ethers"

const provider = new ethers.providers.JsonRpcProvider("https://testnet-rpc.juchain.org")
```

### **scaffold-eth​**

要使用 Scaffold-eth 进行部署，您需要将 Hardhat 和 React 设置指向 Juchain Testnet。

### **配置 Hardhat​**&#x20;

在 `packages/hardhat/hardhat.config.js` 文件中，您将添加网络并选择它作为默认网络。

```
...
//
// Select the network you want to deploy to here:
//
const defaultNetwork = "Juchain";
...
module.exports = {
...
	networks: {
...
          Juchain: {
            url: "https://testnet-rpc.juchain.org",
            accounts: {
              mnemonic: mnemonic(),
            },
          },
	}
...
}
```

确保也为部署钱包充值！运行 `yarn generate` 创建钱包，并创建 `yarn account` 来检查资金。充值完成后，运行 `yarn deploy --network Juchain` 即可在 Juchain 测试网上进行部署。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/kuai-su-kai-shi.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/liu-lan-qi

# 浏览器

### Block Explorers  区块浏览器 <a href="#block-explorers" id="block-explorers"></a>

使用提供的区块浏览器探索 Juchain 网络上的交易、区块和地址。这些工具可以深入了解测试网和主网环境中的网络活动。

#### 主网 点击此处访问 Juchain 主网区块浏览器： <a href="#mainnet" id="mainnet"></a>

* [Juchain 主网浏览器](https://juscan.io/)

#### 测试网 <a href="#testnet" id="testnet"></a>

点击此处访问 Juchain 测试网区块浏览器：

* [Juchain 测试网浏览器](https://testnet.juscan.io/)


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/liu-lan-qi.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/qian-bao

# 钱包

#### EVM 兼容钱包 <a href="#evm-compatible-wallets" id="evm-compatible-wallets"></a>

为了与以太坊和其他 EVM 网络交互，Juchain 支持以下钱包：

* [MetaMask](https://metamask.io/) - 具有集成 dApp 支持的浏览器扩展。

*与 EVM 兼容的钱包允许您执行智能合约并与各种 EVM 网络上的分散应用程序进行交互。*


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/qian-bao.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/ru-men-zhi-nan

# 入门指南

## JuChain 开发者文档 - 入门指南

{% hint style="warning" %}
JuChain 当前仅支持 Solidity 版本 <= 0.8.8 进行编译，后续版本支持将根据官方通知逐步开放。
{% endhint %}

欢迎体验 JuChain 开发者之旅！本指南将帮助您快速上手 JuChain 平台，从设置开发环境到部署您的首个智能合约，再到连接 JuChain 测试网。本章节面向初次接触 JuChain 的开发者，旨在提供清晰的步骤和实用示例，确保您能迅速开始构建。

### 前提条件

在开始之前，请确保您具备以下基础知识和工具：

* **基础区块链知识**：熟悉智能合约、区块链交易和以太坊虚拟机（EVM）的基本概念。
* **开发工具**：
  * **Node.js**（建议 v16 或更高版本）：用于运行 JavaScript 和安装依赖。
  * **npm** 或 **yarn**：包管理工具，用于安装项目依赖。
  * **代码编辑器**：推荐 Visual Studio Code 或类似工具。
* **钱包**：安装 MetaMask 或其他兼容 EVM 的钱包，用于管理账户和测试网代币。
* **终端技能**：基本的命令行操作能力。

如果您已经熟悉以太坊开发，JuChain 的完全 EVM 兼容性将让您的迁移过程非常顺畅。

### 第一步：设置开发环境

#### 安装必备工具

1. **安装 Node.js 和 npm**
   * 下载并安装最新版本的 Node.js（包含 npm）：[Node.js 官网](https://nodejs.org/)。
   * 验证安装：

     ```bash
     node -v
     npm -v
     ```
   * 如果您更喜欢 yarn，可使用 `npm install -g yarn` 安装。
2. **安装 Truffle 或 Hardhat**\
   JuChain 支持以太坊主流开发框架。这里以 Hardhat 为例：
   * 全局安装 Hardhat：

     ```bash
     npm install -g hardhat
     ```
   * 创建一个新 Hardhat 项目：

     ```bash
     npx hardhat
     ```

     选择“Create a basic sample project”并按提示完成初始化。
3. **安装 MetaMask**
   * 下载并安装 MetaMask 浏览器扩展：[MetaMask 官网](https://metamask.io/)。
   * 创建或导入一个钱包账户，用于后续测试网交互。

#### 配置 JuChain 网络

JuChain 提供主网和测试网供开发者使用。以下是测试网的配置信息：

* **网络名称**：JuChain Testnet
* **RPC URL**：`https://testnet-rpc.juchain.org`
* **链 ID**：
* **货币符号**：JU
* **区块浏览器 URL**：`https://explorer-testnet.juchain.org`

在 MetaMask 中添加 JuChain 测试网：

1. 打开 MetaMask，点击“网络”下拉菜单。
2. 选择“添加网络” > “手动添加网络”。
3. 输入上述配置信息并保存。

### 第二步：获取测试网 JU 代币

在 JuChain 测试网上部署和测试智能合约需要 JU 代币。您可以通过官方水龙头获取测试网 JU。

1. 访问 JuChain 测试网水龙头：<https://faucet-testnet.juchain.org>。
2. 输入您的 MetaMask 钱包地址。
3. 点击“领取”按钮，每日可领取一定数量的测试 JU（例如 10 JU）。
4. 在 MetaMask 中确认您的测试网余额已更新。

### 第三步：编写您的首个智能合约

以下是一个简单的智能合约示例，用于在 JuChain 上存储和读取数据。

#### 创建智能合约

1. 在 Hardhat 项目目录下，进入 `contracts` 文件夹。
2. 创建文件 `SimpleStorage.sol`，并输入以下代码：

   ```solidity
   // SPDX-License-Identifier: MIT
   pragma solidity ^0.8.0;

   contract SimpleStorage {
       uint256 private storedValue;

       // 存储一个值
       function set(uint256 _value) public {
           storedValue = _value;
       }

       // 获取存储的值
       function get() public view returns (uint256) {
           return storedValue;
       }
   }
   ```

#### 配置 Hardhat

1. 打开 `hardhat.config.js`，添加 JuChain 测试网配置：

   ```javascript
   require("@nomicfoundation/hardhat-toolbox");

   module.exports = {
     solidity: "0.8.0",
     networks: {
       juchain_testnet: {
         url: "https://testnet-rpc.juchain.org",
         chainId: 
         accounts: ["YOUR_PRIVATE_KEY"] // 替换为您的私钥（注意安全）
       }
     }
   };
   ```

   * 将 `YOUR_PRIVATE_KEY` 替换为您的 MetaMask 私钥（从“账户详情”中导出，注意不要公开分享）。
2. 确保安装必要的 Hardhat 插件：

   ```bash
   npm install --save-dev @nomicfoundation/hardhat-toolbox
   ```

#### 编译智能合约

在终端运行以下命令编译合约：

```bash
npx hardhat compile
```

成功后，您将在 `artifacts` 文件夹中看到编译结果。

### 第四步：部署到 JuChain 测试网

#### 编写部署脚本

1. 在 `scripts` 文件夹中，创建 `deploy.js`：

   ```javascript
   const hre = require("hardhat");

   async function main() {
     const SimpleStorage = await hre.ethers.getContractFactory("SimpleStorage");
     const simpleStorage = await SimpleStorage.deploy();

     await simpleStorage.deployed();
     console.log("SimpleStorage deployed to:", simpleStorage.address);
   }

   main()
     .then(() => process.exit(0))
     .catch((error) => {
       console.error(error);
       process.exit(1);
     });
   ```
2. 部署合约到 JuChain 测试网：

   ```bash
   npx hardhat run scripts/deploy.js --network juchain_testnet
   ```

   * 部署成功后，终端将输出合约地址，例如：

     ```
     SimpleStorage deployed to: 0x1234...abcd
     ```
3. 在 JuChain 测试网区块浏览器（`https://testnet-explorer.juchain.org`）上输入合约地址，验证部署是否成功。

### 第五步：与智能合约交互

#### 测试合约功能

1. 在 Hardhat 控制台中测试：

   ```bash
   npx hardhat console --network juchain_testnet
   ```
2. 输入以下命令与合约交互：

   ```javascript
   const SimpleStorage = await ethers.getContractFactory("SimpleStorage");
   const simpleStorage = await SimpleStorage.attach("0x1234...abcd"); // 替换为您的合约地址
   await simpleStorage.set(42);
   (await simpleStorage.get()).toString();
   ```

   * 输出应为 `"42"`，表示合约正常工作。

#### 使用 ethers.js 前端交互（可选）

如果您想通过网页与合约交互：

1. 初始化一个前端项目：

   ```bash
   npm init -y
   npm install ethers
   ```
2. 创建 `index.html` 和 `app.js`，示例代码如下：

   ```javascript
   import { ethers } from "ethers";

   const provider = new ethers.providers.Web3Provider(window.ethereum);
   await provider.send("eth_requestAccounts", []);
   const signer = provider.getSigner();
   const contractAddress = "0x1234...abcd"; // 替换为您的合约地址
   const abi = [ /* 从 artifacts/SimpleStorage.json 中复制 ABI */ ];
   const contract = new ethers.Contract(contractAddress, abi, signer);

   // 设置值
   await contract.set(100);
   // 获取值
   const value = await contract.get();
   console.log("Stored value:", value.toString());
   ```

### 第六步：连接 JuChain 测试网节点

JuChain 提供免费的公共 RPC 节点，开发者无需自己运行节点即可开发和测试。

#### 使用公共 RPC

* **测试网 RPC**：`https://testnet-rpc.juchain.org`
* 在 Hardhat 或其他工具中直接使用此 RPC URL 连接网络。

#### 运行自己的节点

* 暂未开放。

### 下一步

恭喜您已成功部署首个智能合约到 JuChain 测试网！接下来，您可以：

* 探索 开发者指南 以深入了解 API 和流量金融集成。
* 查看 教程与示例 以构建更复杂的 dApps。
* 加入 JuChain 开发者社区：Discord 或 论坛 获取支持。

如果遇到问题，请参考 FAQ 或联系技术支持团队。

***


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/ru-men-zhi-nan.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/shui-long-tou

# 水龙头

如果您想与 Juchain 测试网上的 Dapps 进行交互，您的第一站就是去“水龙头”加满您的“水箱”。

\
这里有一个直接分发 Juchain 测试网代币的水龙头： <https://faucet-testnet.juchain.org/>

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252Frn1HPsBvrTVmWjEUyX5W%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-19%2520%25E4%25B8%258B%25E5%258D%25884.19.24.png%3Falt%3Dmedia%26token%3Dacd1237d-3dbe-408b-ba36-0fedb9a1250a&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=5f3b8995&#x26;sv=2" alt=""><figcaption></figcaption></figure>

**JuChain 测试网水龙头是什么？**

JuChain 测试网水龙头是一款开发者友好型工具，可分发少量测试网代币 (JU)，供在 JuChain 测试网上使用。这些代币仅用于测试目的，不具有实际价值，可用于支付 Gas 费用、部署智能合约或与 DApp 交互。

**JuChain 测试网**

| 名称     | 值                                                                            |
| ------ | ---------------------------------------------------------------------------- |
| 网络名称   | JuChain Testnet                                                              |
| 描述     | JuChain 公共测试网                                                                |
| RPC 端点 | <p><https://testnet-rpc.juchain.org> </p><p>ws\://testnet-ws.juchain.org</p> |
| 链 ID   | 202599                                                                       |
| 货币符号   | JU                                                                           |
| 区块浏览器  | <https://testnet.juscan.io>                                                  |

**获取测试令牌的步骤**

按照以下简单步骤从 JuChain Testnet Faucet 领取测试 JU 代币：

**第 1 步：设置你的钱包**

1. 安装并配置支持 JuChain 测试网的钱包，例如 MetaMask 或任何与 EVM 兼容的钱包。
2. [将 JuChain 测试网添加到您的钱包。](https://juchain.gitbook.io/juchain-docs/basics/start-using-juchain)
3. 复制您的钱包地址。

**第 2 步：访问水龙头**

1. 打开浏览器并前往 [JuChain Testnet Faucet](https://faucet-testnet.juchain.org/) 。
2. 将您的 JuChain Testnet 钱包地址粘贴到页面的输入栏中。

\
**第3步：领取测试代币**

1. 点击“声明”按钮（或页面上的类似选项）。
2. 系统将处理您的请求：
   * 每个地址每 10 分钟最多可领取 **0.2 JU** 。
   * 使用邀请码可获得奖金。
3. 几秒钟内，测试代币就会进入您的钱包。

**Notes**&#x20;

* 每 10 分钟只能进行一次索赔。
* 测试代币仅限于测试网 - 请勿尝试在主网上使用它们。
* 如果遇到问题，请仔细检查您的网络连接或联系 JuChain 的社区支持。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/shui-long-tou.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-fa-zhe-zhi-nan/yu-yan-ji

# 预言机

探索 Juchain 网络上的预言机如何使智能合约无缝访问现实世界的数据，例如资产价格和外部事件。

\
预言机充当区块链和链下数据之间的桥梁，确保智能合约能够基于准确、去中心化的信息执行。

这种集成扩展了智能合约的功能，允许在 Juchain 生态系统中实现更复杂、更动态的应用。

JuChain 预言机服务为去中心化应用（dApps）提供可靠的链上价格数据。JU-USDT 价格预言机专门提供 JU 代币相对于 USDT 的实时价格，支持 DeFi 应用、交易平台和其他需要精准价格数据的智能合约。

#### &#x20;Juchain 上可用的预言机 <a href="#available-oracles-on-bitlayer" id="available-oracles-on-bitlayer"></a>

| <p>​<a href="https://www.apro.com/">APRO</a>​<br></p> | APRO Oracle 是比特币生态系统中顶级的去中心化预言机，通过其创新的 Oracle 3.0 标准提供比特币级别的安全性和快速响应。 |
| ----------------------------------------------------- | --------------------------------------------------------------------- |

### JU-USDT 价格预言机

{% hint style="info" %}
当前公链 Solidity 版本编译仅支持 <= 0.8.8，后续版本支持将根据官方通知逐步开放。
{% endhint %}

#### 合约信息

**主网合约信息**

* **网络**：JuChain 主网
* **合约地址**：`0x49E5c7f25711abe668F404307b27f4bE4836B0e7`
* **部署地址**：`0x7389F1B4717F5152B6Cc107bce4A42a11dC0b76E`
* **Owner**：`0x5021A15FaAFEFEC1daCB1c8b24FFE3F3E3f7277b`
* **更新权限地址**：`0xa6F32fe2920AcF559699825AFaC493aa4F49Ac1D`
* **部署交易哈希**：`0x233654f76766fb0f9fd1377a573bed11c60a44c0cdc8e59340ffda333d191140`
* **更新频率**：每 1 分钟
* **价格来源**：聚合多个中心化和去中心化交易所的 JU-USDT 交易对数据

**测试网合约信息**

* **网络**：JuChain 测试网
* **合约地址**：`0x70D3Fc0bcf1ffD64111FC0C708DA407d9732Ab95`
* **部署地址**：`0xa01d5Be3fDea4Fd8f1C35Ced0919353036De15d0`
* **更新权限地址**：`0x4878683a8C3007258278824228a92aC4E072F050`（仅此地址有权更新价格）
* **部署交易哈希**：`0x7e42454909c3ea9b52af4af84217149a87aa71aa08f129e11a01d5cea0989659`
* **更新频率**：每 1 分钟
* **价格来源**：聚合多个中心化和去中心化交易所的 JU-USDT 交易对数据

**权限说明**

* **部署者（Owner）**：
  * 主网：`0x5021A15FaAFEFEC1daCB1c8b24FFE3F3E3f7277b`，负责合约管理和权限分配。
  * 测试网：`0xa01d5Be3fDea4Fd8f1C35Ced0919353036De15d0`，负责合约管理和权限分配。
* **授权更新者（Authorized Updater）**：
  * 主网：`0xa6F32fe2920AcF559699825AFaC493aa4F49Ac1D`，唯一有权调用 `updatePrice` 更新价格的账户。
  * 测试网：`0x4878683a8C3007258278824228a92aC4E072F050`，唯一有权调用 `updatePrice` 更新价格的账户。
* **设计变更**：新版预言机将部署者和价格更新者分离，提升安全性。

#### 主要方法

**`getLatestPrice`**

* **描述**：获取 JU-USDT 交易对的最新价格信息。
* **返回值**：
  * `string`：交易对符号（如 `"JU/USDT"`）。
  * `uint256`：最新价格（需除以精度值）。
  * `uint256`：最后更新时间戳（Unix 时间戳）。
* **调用示例**：

  ```solidity
  (string memory symbol, uint256 price, uint256 timestamp) = oracle.getLatestPrice();
  ```

**`latestPrice`**

* **描述**：获取最新价格值（不含额外信息）。
* **返回值**：
  * `uint256`：最新价格值。

**`pricePrecision`**

* **描述**：获取价格精度值，用于计算实际价格。
* **返回值**：
  * `uint256`：价格精度（如 `1e8`，实际价格 = 返回价格 / 精度）。

**`lastUpdatedAt`**

* **描述**：获取价格最后更新的时间戳。
* **返回值**：
  * `uint256`：Unix 时间戳。

**`symbol`**

* **描述**：获取交易对符号。
* **返回值**：
  * `string`：交易对符号（如 `"JU/USDT"`）。

**`updatePrice`**

* **描述**：更新 JU-USDT 价格，仅限授权更新者调用。
* **参数**：
  * `uint256 _price`：新价格值。
* **权限**：仅 `0x4878683a8C3007258278824228a92aC4E072F050` 可调用。

**`setAuthorizedUpdater`**

* **描述**：设置新的授权更新者，仅限 Owner 调用。
* **参数**：
  * `address newAuthorizedUpdater`：新授权更新者地址。
* **权限**：仅 `0xa01d5Be3fDea4Fd8f1C35Ced0919353036De15d0` 可调用。

**`owner`**

* **描述**：获取当前合约拥有者地址。
* **返回值**：
  * `address`：Owner 地址。

#### ABI

以下是 JU-USDT 价格预言机的完整 ABI：

```json
[
  {
    "inputs": [
      {"internalType": "address", "name": "initialOwner", "type": "address"},
      {"internalType": "address", "name": "initialAuthorizedUpdater", "type": "address"}
    ],
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}], "name": "OwnableInvalidOwner", "type": "error"},
  {"inputs": [{"internalType": "address", "name": "account", "type": "address"}], "name": "OwnableUnauthorizedAccount", "type": "error"},
  {
    "anonymous": false,
    "inputs": [
      {"indexed": false, "internalType": "address", "name": "previousUpdater", "type": "address"},
      {"indexed": false, "internalType": "address", "name": "newUpdater", "type": "address"}
    ],
    "name": "AuthorizedUpdaterChanged",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": true, "internalType": "address", "name": "previousOwner", "type": "address"},
      {"indexed": true, "internalType": "address", "name": "newOwner", "type": "address"}
    ],
    "name": "OwnershipTransferred",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {"indexed": false, "internalType": "uint256", "name": "price", "type": "uint256"},
      {"indexed": false, "internalType": "uint256", "name": "timestamp", "type": "uint256"},
      {"indexed": false, "internalType": "address", "name": "updater", "type": "address"}
    ],
    "name": "PriceUpdated",
    "type": "event"
  },
  {"inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
  {"inputs": [{"internalType": "address", "name": "newAuthorizedUpdater", "type": "address"}], "name": "setAuthorizedUpdater", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
  {"inputs": [{"internalType": "address", "name": "newOwner", "type": "address"}], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
  {"inputs": [{"internalType": "uint256", "name": "_price", "type": "uint256"}], "name": "updatePrice", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
  {"inputs": [], "name": "authorizedUpdater", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "getLatestPrice", "outputs": [{"internalType": "string", "name": "", "type": "string"}, {"internalType": "uint256", "name": "", "type": "uint256"}, {"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "lastUpdatedAt", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "latestPrice", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "owner", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "pricePrecision", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
  {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"}
]
```

#### 使用示例

**Web3.js 示例**

以下代码展示如何通过 Web3.js 与预言机交互：

```javascript
const { Web3 } = require('web3');

// 主网 RPC
const mainnetRpc = 'https://rpc.juchain.org';
// 测试网 RPC
const testnetRpc = 'https://testnet-rpc.juchain.org';

// 选择网络（主网/测试网）
const web3 = new Web3(mainnetRpc); // 或 testnetRpc

// 主网合约地址
const mainnetContractAddress = '0x49E5c7f25711abe668F404307b27f4bE4836B0e7';
// 测试网合约地址
const testnetContractAddress = '0x70D3Fc0bcf1ffD64111FC0C708DA407d9732Ab95';

// 选择合约地址
const contractAddress = mainnetContractAddress; // 或 testnetContractAddress
const contract = new web3.eth.Contract(abi, contractAddress);

// 获取完整价格信息
async function getCompletePrice() {
  try {
    const [symbol, price, timestamp] = await contract.methods.getLatestPrice().call();
    const precision = await contract.methods.pricePrecision().call();
    console.log('完整价格信息:');
    console.log(`交易对: ${symbol}`);
    console.log(`价格: ${price / precision} JU/USDT`);
    console.log(`时间戳: ${timestamp} (${new Date(Number(timestamp) * 1000).toLocaleString()})`);
    return { symbol, price, timestamp, precision };
  } catch (error) {
    console.error('获取价格信息失败:', error);
  }
}

// 获取最新价格
async function getLatestPrice() {
  try {
    const price = await contract.methods.latestPrice().call();
    const precision = await contract.methods.pricePrecision().call();
    console.log(`最新价格: ${price / precision} JU/USDT`);
    return price;
  } catch (error) {
    console.error('获取最新价格失败:', error);
  }
}

// 获取授权更新者
async function getAuthorizedUpdater() {
  try {
    const updater = await contract.methods.authorizedUpdater().call();
    console.log(`授权更新者: ${updater}`);
    return updater;
  } catch (error) {
    console.error('获取授权更新者失败:', error);
  }
}

// 更新价格（仅限授权更新者）
async function updatePrice(newPrice, privateKey) {
  try {
    const account = web3.eth.accounts.privateKeyToAccount(privateKey);
    web3.eth.accounts.wallet.add(account);
    const tx = contract.methods.updatePrice(newPrice);
    const gas = await tx.estimateGas({ from: account.address });
    const receipt = await tx.send({ from: account.address, gas });
    console.log(`价格更新成功，交易哈希: ${receipt.transactionHash}`);
    return receipt;
  } catch (error) {
    console.error('更新价格失败:', error);
  }
}

// 执行所有查询
async function getAllInfo() {
  await getCompletePrice();
  await getLatestPrice();
  await getAuthorizedUpdater();
}

getAllInfo();
```

**Solidity 示例**

以下是使用预言机的智能合约示例：

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IJUOracle {
    function getLatestPrice() external view returns (string memory, uint256, uint256);
    function pricePrecision() external view returns (uint256);
}

contract JUPriceConsumer {
    IJUOracle public oracle;

    constructor(address _oracleAddress) {
        oracle = IJUOracle(_oracleAddress);
    }

    function getJUPrice() public view returns (uint256) {
        (, uint256 price, ) = oracle.getLatestPrice();
        uint256 precision = oracle.pricePrecision();
        return price; // 前端需除以 precision
    }

    function getFormattedPrice() public view returns (string memory symbol, uint256 price, uint256 precision, uint256 timestamp) {
        (symbol, price, timestamp) = oracle.getLatestPrice();
        precision = oracle.pricePrecision();
        return (symbol, price, precision, timestamp);
    }
}
```

#### 重要注意事项

* **网络选择**：
  * 主网：用于生产环境，合约地址为 `0x49E5c7f25711abe668F404307b27f4bE4836B0e7`
  * 测试网：用于开发和测试，合约地址为 `0x70D3Fc0bcf1ffD64111FC0C708DA407d9732Ab95`
* **价格精度**：合约返回的 `price` 需除以 `pricePrecision()` 返回的值以获得实际价格（如 `1e8` 表示 8 位精度）。
* **更新权限**：
  * 主网：仅 `0xa6F32fe2920AcF559699825AFaC493aa4F49Ac1D` 可调用 `updatePrice`
  * 测试网：仅 `0x4878683a8C3007258278824228a92aC4E072F050` 可调用 `updatePrice`
  * Owner 可通过 `setAuthorizedUpdater` 更换更新者
* **更新延迟**：价格每 1 分钟更新一次，使用前请检查 `lastUpdatedAt` 确保数据新鲜度。
* **价格波动**：加密货币价格可能剧烈波动，建议在 dApp 中加入风险管理机制。
* **合约升级**：预言机合约可能更新，请关注官方公告以获取最新地址和功能。
* **主网注意事项**：
  * 主网环境下的操作将产生实际费用，请谨慎操作


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-fa-zhe-zhi-nan/yu-yan-ji.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## kai-shi-shi-yong-juchain

# 开始使用 JuChain

### 在 MetaMask 钱包中使用 JuChain 主网

1. 点击 MetaMask 左上角的网络选择下拉菜单
2. 点击 "添加自定义网络"
3. 填写以下网络信息并点击保存：
   * 网络名称：JuChain Mainnet
   * RPC 地址：<https://rpc.juchain.org>
   * 链 ID：210000
   * 货币符号：JU
   * 区块浏览器：[http://juscan.io](http://testnet.juscan.io)

这将引导您完成使用 Juchain 设置和配置 MetaMask 钱包的步骤。\
**注意**：建议您通过 Chrome 进行设置。<br>

**步骤 1 - 安装 MetaMask**\
前往 MetaMask 的[网站](https://metamask.io/)然后点击下载你所选浏览器的扩展程序。请确保该扩展程序是由 `metamask.io` 提供的。

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2Fdocs.berachain.com%2Fassets%2Fmetamask-chrome-store.png&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=7dd904dc&#x26;sv=2" alt=""><figcaption><p>  Metamask Chrome 商店</p></figcaption></figure>

\
**第 2 步 - 在 MetaMask 中创建您的钱包**\
MetaMask 作为 Chrome 扩展程序完成安装后，将显示初始提示。点击 `Create a new wallet` 按钮即可开始此过程。

Metamask 入门

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2Fdocs.berachain.com%2Fassets%2Fmetamask-get-started.png&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=2fcfe81a&#x26;sv=2" alt=""><figcaption></figcaption></figure>

\
这会要求您首先设置密码。这是您打开 MetaMask 扩展程序时需要输入的密码：

Metamask 创建密码

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2Fdocs.berachain.com%2Fassets%2Fmetamask-create-password.png&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=2dfa4648&#x26;sv=2" alt=""><figcaption></figcaption></figure>

\
接下来，按照说明保护你的钱包密码。这一步非常重要，因为钱包密码用于证明你拥有钱包中的资产。

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2Fdocs.berachain.com%2Fassets%2Fmetamask-recovery-phrase.png&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=a77fef21&#x26;sv=2" alt=""><figcaption><p> Metamask 恢复短语</p></figcaption></figure>

\
🎉恭喜！您已设置好 MetaMask 钱包！

**Step 3: Add JuChain Mainnet**\
**步骤 3：添加 JuChain 主网**

1. 点击 MetaMask 左上角的网络选择下拉菜单
2. 点击“添加自定义网络”

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252Fb5pJggaX7dQSchYTd3lZ%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.24.48.png%3Falt%3Dmedia%26token%3D306c1b08-1aac-49a0-a71b-ce228f88fda4&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=55663040&#x26;sv=2" alt=""><figcaption></figcaption></figure>

3.填写以下网络信息，点击保存：

* 网络名称：JuChain 主网
* RPC URL

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252FFzPVU01YOew9ADLsL0MH%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.27.01.png%3Falt%3Dmedia%26token%3D8aa65322-2c87-4f6f-847b-c894e254d6be&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=e55ce805&#x26;sv=2" alt=""><figcaption></figcaption></figure>

* 链 ID：210000
* 符号：JU
* 区块浏览器： [http://juscan.io](http://testnet.juscan.io/)

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252FlbgIWlUlsgMPxeLumdM9%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.28.25.png%3Falt%3Dmedia%26token%3D617e7929-04d8-4291-8b7d-8e105f84342d&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=daff7b25&#x26;sv=2" alt=""><figcaption></figcaption></figure>

* 确认所有消息。

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252FnFoN2ZuowomyuEXcCUE3%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.29.36.png%3Falt%3Dmedia%26token%3D8b11a495-ad78-4c64-854a-084c0f89f24e&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=ccce9e7a&#x26;sv=2" alt=""><figcaption></figcaption></figure>

4.点击“保存”。\
保存网络配置后，您应该已连接到 Juchain 主网！

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252FS8YI5CsEpkeiSeSF0MpL%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.35.09.png%3Falt%3Dmedia%26token%3Da0ad99ba-40c0-4890-b4e5-d1ccc30f3f16&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=96e8d802&#x26;sv=2" alt=""><figcaption><p>增加成功提示</p></figcaption></figure>

<figure><img src="https://juchain.gitbook.io/~gitbook/image?url=https%3A%2F%2F2354961557-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Fspaces%252FFnN8dEv4ODUZJaBUfPrL%252Fuploads%252FnyGOZuMKZcT6eHvptV8H%252F%25E6%2588%25AA%25E5%25B1%258F2025-06-24%2520%25E4%25B8%258B%25E5%258D%25882.36.15.png%3Falt%3Dmedia%26token%3D4adea3e8-d9fd-4218-82d1-2906d1e8b75c&#x26;width=768&#x26;dpr=4&#x26;quality=100&#x26;sign=addf5d96&#x26;sv=2" alt=""><figcaption><p>余额界面</p></figcaption></figure>

**常见问题**

1. 如果添加网络失败，请检查：
   * 网络参数输入正确
   * 网络连接稳定
   * MetaMask 已更新
2. 如果无法获取测试令牌：
   * 确保钱包地址复制正确
   * 每个地址都有每日领取限额
   * 稍后再试
3. 如果看不到余额：
   * 确保您已切换到 JuChain 主网
   * 点击 MetaMask 中的刷新按钮
   * 检查网络连接

**重要说明**\
如果遇到问题，请通过社区寻求帮助


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/kai-shi-shi-yong-juchain.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## pin-pai-zi-yuan-yu-gui-fan

# 品牌资源与规范

## 品牌 Logo

#### 浅色模式

<figure><img src="/files/rSSNq8OZ2UOnahp0lZh6" alt=""><figcaption></figcaption></figure>

<div><figure><img src="/files/Ncb8amKGLz2AuKwJdvdq" alt=""><figcaption></figcaption></figure> <figure><img src="/files/qtePfszd9EKmnCGIwBFn" alt=""><figcaption></figcaption></figure></div>

#### 深色模式

<figure><img src="/files/XuNMaBeNzwFoLbShOp9j" alt=""><figcaption></figcaption></figure>

<div><figure><img src="/files/Q8LucwpOl7f1qWCtP457" alt=""><figcaption></figcaption></figure> <figure><img src="/files/XDy5pMRJ28SIvoP0pzu7" alt=""><figcaption></figcaption></figure></div>

{% file src="/files/t2glXYpQxikZ5IgUPNuM" %}

***

## Logo 规范

1. 徽标应尽可能与文字商标一起使用。
2. 水平锁定图标应始终在页面左对齐，切勿右对齐。
3. 垂直锁定图标应始终在页面居中对齐，切勿左对齐或右对齐。
4. 徽标仅应在以下情况下使用：\
   a. 按钮\
   b. 个人资料图片\
   c. 作为图标

## Logo 尺寸

1、垂直锁定（带文字标识的标志）宽度不得小于 99px。此规定适用于彩色和单色版本的标志。

2、水平锁定（带文字标识的标志）宽度不得小于 65px。此规定适用于彩色和单色版本的标志。

3、标志宽度不得小于 24px。此规定适用于彩色和单色版本的标志。

## 品牌颜色：

主色：

<figure><img src="/files/8ngc9HumQX0Q7npBF3Qu" alt=""><figcaption><p>C:83 M:75 Y:0 K:35<br>R:20 G:59 B:255<br>HEX #143BFF<br></p></figcaption></figure>

白色：

<div align="center"><figure><img src="/files/HTnZKDnNGTbRdz9GUh1f" alt=""><figcaption><p>C:0 M:0 Y:0 K:0<br>R:255 G:255 B:255<br>Hex: #FFFFFF</p></figcaption></figure></div>

黑色

<div align="center"><figure><img src="/files/HfCB2xmVj4FmpLmbLxdm" alt=""><figcaption><p>C:100 M:100 Y:100 K:100<br>R:0 G:0 B:0<br>Hex: #000000</p></figcaption></figure></div>

***

## 对项目的期望

1. 项目在使用徽标前应先获得 JuChain 的批准。
2. 项目需要提交其希望使用徽标的方案，并解释其分发方式。
3. 项目应以适当且尊重的方式使用 JuChain 徽标，同时确保遵守知识产权法。
4. 项目不得以暗示认可或赞助的方式使用 JuChain 徽标——特殊情况下，请先获得公关部门的批准，我们将根据具体情况进行评估。
5. 如果项目获得批准使用 JuChain 徽标，其使用必须对 JuChain 和项目本身产生积极的影响。
6. 项目应遵循品牌指南，以确保所有材料的一致性。
7. 在某些情况下，我们将根据具体情况进行评估，因为评估可能取决于多种因素，需要根据具体项目和业务需求进行调整。

## 项目可以做什么

{% hint style="success" %}
项目必须使用“由 JuChain 提供支持”、“可在 JuChain 上使用”、“基于 JuChain 构建”等措辞，并在社交媒体上标记 JuChain的标识。
{% endhint %}

{% hint style="success" %}
项目只能在其网站和社交媒体帖子中添加 JuChain 徽标，用于说明其项目基于 JuChain 构建或由 JuChain 提供支持。
{% endhint %}

{% hint style="success" %}
项目必须以与 JuChain 品牌一致的方式使用 JuChain 徽标，不得以任何方式对其进行更改。
{% endhint %}

## 项目应避免的行为

{% hint style="danger" %}
项目不得以任何方式修改 JuChain 徽标。
{% endhint %}

{% hint style="danger" %}
项目不得以暗示 JuChain 认可或赞助的方式使用 JuChain 徽标。在极少数情况下，此类行为必须经管理层批准和授权。
{% endhint %}

{% hint style="danger" %}
项目不得以误导或欺骗的方式使用 JuChain 徽标。
{% endhint %}

{% hint style="danger" %}
除非得到管理层的批准，否则项目不得使用“官方”、“合作伙伴”、“与 JuChain 合作”等措辞。
{% endhint %}

{% hint style="danger" %}
项目不得以诽谤 JuChain 的方式使用 JuChain徽标。
{% endhint %}


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/pin-pai-zi-yuan-yu-gui-fan.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## she-ji-li-nian

# 设计理念

JuChain的开发基于一套连贯且精心阐述的原则，指导其技术和运营框架。

## 核心原则

### 可扩展性

通过优雅设计的共识过程实现，而非依靠蛮力计算，优化资源利用以应对流量密集型生态系统的需求。

### 成本效益

交易费用设计为保持微不足道——通常低于0.001 JU——从而扩大接触多元化用户群体的范围，包括个人参与者、开发者和企业。

### 安全性

由大量经济押注和能够抵抗敌意压力的容错协议强化，确保设计用于每秒处理数千笔交易的网络的完整性。

### 互操作性

通过与以太坊虚拟机(EVM)的完全兼容性实现，确保JuChain无缝集成到更广泛的区块链生态系统中，使开发者能够以最小的摩擦利用现有工具、智能合约和用户基础。

### 去中心化

通过赋权各个层次的利益相关者的治理模型保持，从核心验证者到小规模代币持有者，培养一个推动平台发展的包容性社区。

## 流量驱动理念

除了这些基础原则，JuChain引入了一种流量驱动理念，使其与传统区块链平台区分开来。这一理念假定公共区块链的成功不仅取决于其技术实力，还取决于其作为用户参与和应用程序增长中心的能力。

通过优先聚合和分配用户流量，JuChain将区块链从被动的基础设施层转变为生态系统扩张的活跃引擎，使开发者能够利用预先存在的用户池并加速Dapp部署。

## 网络效应

这种以流量为中心的方法以网络效应原则为基础，其中平台价值与其用户基础的平方成正比(V = k · n²)。

这些原则不是抽象理念，而是可行的指令，精心转化为JuChain的架构，为以下对象提供切实的好处：

* 开发者
* 用户
* 更广泛的去中心化社区

这一定位确立了JuChain作为区块链技术实际应用领域的领导者。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/she-ji-li-nian.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## she-qu-yu-zhi-chi/jie-yu

# 结语

JuChain重新定义了公共区块链范式，将高性能与坚定的安全性和真正的去中心化融为一体，将自身确立为终极链流量中心。

## 技术卓越

JuChain的技术架构通过以下方式提供卓越能力：

* **JPoSA共识**：实现快速区块生产和近乎即时的最终确定性
* **双层质押框架**：平衡安全性和可访问性
* **高吞吐量基础设施**：每秒处理数千笔交易
* **超低交易成本**：使微激励模型在经济上可行
* **完全EVM兼容性**：确保与现有工具和应用程序无缝集成

## 战略重点

真正使JuChain与众不同的是其战略重点：

1. **聚合用户流量**：创建用户参与的中心枢纽
2. **赋能开发者**：提供工具和资源用于快速应用部署
3. **加速应用采用**：缩短典型的12-18个月用户获取时间线
4. **建立网络效应**：每个新参与者都增加所有其他人的价值
5. **民主化区块链访问**：使去中心化应用程序对主流用户可访问

## 学术基础

JuChain的方法建立在严格的学术基础上：

* 网络外部性理论如梅特卡夫定律
* 拜占庭容错原则
* 代币激励的经济模型
* 技术采用曲线的增长动态
* 领先区块链协议的见解

## 现实世界影响

通过弥合理论承诺与切实现实结果之间的差距，JuChain旨在：

* 催化下一个十亿用户加入去中心化系统
* 转变区块链应用获取和保留用户的方式
* 通过微激励模型创造新的经济机会
* 建立区块链可用性和性能的新标准
* 作为多链生态系统中的连接组织

## 前进道路

随着JuChain在2025年中从愿景转变为现实，推出主网，它邀请开发者、验证者、用户和有远见者共同构建这个变革性生态系统——一个不仅处理交易，还积极推动用户增长和应用采用的区块链平台，为去中心化技术实现其在重塑数字时代我们如何连接、创造和交换价值方面的全部潜力铺平道路。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/she-qu-yu-zhi-chi/jie-yu.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## she-qu-yu-zhi-chi/she-qu-yu-zhi-chi

# 社区与支持

## JuChain 开发者文档 - 社区与支持

欢迎加入 JuChain 的开发者社区！无论您是刚开始探索 JuChain，还是已经在构建复杂的 dApps，我们致力于为您提供全方位的支持。本章节将介绍如何获取帮助、参与社区讨论以及为 JuChain 生态做出贡献。通过这些资源，您可以更高效地解决问题、分享经验并推动 JuChain 的发展。

### 1. 获取支持

在开发过程中遇到问题时，您可以通过以下渠道获得帮助。我们鼓励开发者首先尝试自助资源，然后再联系社区或官方支持。

#### 1.1 自助资源

* **开发者文档**\
  本文档是您的首要资源，涵盖从入门到高级开发的详细指南。如果您的问题与智能合约、API 或流量金融相关，请查阅 入门指南 和 开发者指南。
* **区块浏览器**\
  使用 JuChain 测试网区块浏览器（`https://testnet-explorer.juchain.org`）跟踪交易状态或验证合约部署。
* **API 状态页面**\
  检查 RPC 和 API 服务是否正常运行：`https://status.juchain.org`（TODO）。

#### 1.2 官方支持

* **技术支持邮箱**\
  对于复杂问题或需要官方协助的情况，请发送邮件至 `support@juchain.org`。请提供以下信息以加快处理：
  * 问题描述
  * 相关的交易哈希或合约地址
  * 错误日志（如有）
  * 预期行为与实际行为的对比
* **响应时间**\
  工作日通常在 24 小时内回复，紧急问题可通过社区渠道优先标记。

#### 1.3 社区支持

社区是 JuChain 的核心驱动力，许多开发者愿意分享经验并提供帮助。

* **Discord 社区**\
  加入官方 Discord 服务器（`https://discord.gg/juchain`），参与以下频道：
  * `#dev-help`：技术问题求助
  * `#general`：通用讨论
  * `#announcements`：官方公告
* **Twitter/X**\
  关注 `@JuChain101`，通过私信或公开提问联系团队。

### 2. 常见问题解答（FAQ）

以下是开发者在使用 JuChain 时经常遇到的问题及其解答。如果您的疑问未在此列出，请在社区中提问。

#### 2.1 开发相关

* **Q：为什么我的交易一直在等待？**\
  A：检查 Gas 费用是否足够（建议使用默认值），或确认 RPC 节点是否正常（`https://testnet-rpc.juchain.org`）。若仍未解决，请在 Discord 的 `#dev-help` 频道提供交易哈希。
* **Q：如何获取更多测试网 JU 代币？**\
  A：访问水龙头（`https://faucet.juchain.org`）。如需更多，请联系支持团队并说明用途。
* **Q：JuChain 支持哪些开发工具？**\
  A：JuChain 完全兼容 EVM，支持 Hardhat、Truffle、Remix 和 ethers.js/Web3.js。详情见 入门指南。

#### 2.2 流量金融与生态

* **Q：如何计算流量金融的收入？**\
  A：收入基于用户活跃度和流量分析数据，具体逻辑由您的智能合约定义。参考 开发者指南 - 流量金融集成。
* **Q：生态激励申请流程是什么？**\
  A：提交申请至 <https://www.juchain.org/en/developer-support>，包括项目简介和预期用户规模。审核周期通常为 2-4 周。

#### 2.3 网络与共识

* **Q：JPoSA 的区块时间是多少？**\
  A：交易最终确认时间为 1 秒。详情见 简介 - JPoSA 共识。
* **Q：如何成为验证者？**\
  A：质押足够的 JU（具体数量待官方公布）并运行节点，参考 教程与示例（待补充）。

### 3. 参与社区

JuChain 的成功离不开开发者的积极参与。以下是您可以融入社区并发挥作用的方式。

#### 3.1 讨论与分享

* **提出问题或建议**\
  在 Discord 或论坛中分享您的开发经验、技术问题或对 JuChain 的改进建议。您的反馈可能影响未来的升级！
* **回答他人问题**\
  如果您有经验，帮助其他开发者解决问题，提升社区活跃度。
* **参与 AMA**\
  定期关注官方 AMA（Ask Me Anything）活动，直接与 JuChain 团队交流。

#### 3.2 社区活动

* **开发者聚会**\
  关注线下或线上开发者聚会，结识其他建设者并获取最新动态。
* **测试网反馈**\
  在测试网阶段报告 bug 或性能问题，帮助优化网络。

### 4. 为 JuChain 生态贡献

作为开源生态的一部分，JuChain 欢迎开发者为平台和社区做出贡献。

#### 4.1 提交问题报告

如果您发现 bug 或功能缺失：

1. 创建新 Issue，提供以下信息：
   * 问题复现步骤
   * 环境详情（操作系统、工具版本）
   * 日志或截图
2. 标记优先级（低/中/高），团队将尽快处理。

#### 4.2 贡献代码或文档

* **代码贡献**\
  如果您想改进 JuChain 节点软件或工具：
  1. Fork 仓库并创建分支。
  2. 提交 Pull Request，说明改动目的。
  3. 通过代码审查后合并。

#### 4.3 奖励机制

贡献者可能获得：

* **JU 代币奖励**：根据贡献大小发放。
* **社区认可**：在官方渠道中提及。
* **生态支持**：优先获得流量分配或技术协助。

### 5. 联系我们

如果社区和自助资源无法解决问题，请直接联系 JuChain 团队：

* **Twitter/X**：`@Juchain_zh`
* **官网**：`https://www.juchain.org`

### 下一步

有了社区和支持的保障，您可以更自信地在 JuChain 上开发！接下来：

* 返回 开发者指南 深入技术细节。
* 探索 教程与示例 构建完整 dApp。
* 在 Discord 中说一声“Hi”，加入我们的开发者大家庭！


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/she-qu-yu-zhi-chi/she-qu-yu-zhi-chi.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## sheng-tai/kua-lian-qiao

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
| ETH Mainnet             | 签名地址 (Signer Address) | `0xc739962C7805a46BEd5bDADB4Df033e9B9aC1ff2`                                                                                    | 用于验证 ETH -> JuChain 跨链交易     |
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
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_beneficiary","type":"address"}],"name":"LogBridgeTokenMint","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"_chainID","type":"uint256"},{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_ownerFrom","type":"address"},{"indexed":false,"internalType":"address","name":"_receiver","type":"address"}],"name":"LogBtcTokenBurn","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"LogLock","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"string","name":"_symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"LogNewBridgeToken","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"LogUnlock","type":"event"},
  {"stateMutability":"payable","type":"fallback"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"}],"name":"addToken2LockList","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"bridgeServiceFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"bridgeTokenCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bridgeTokenCreated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bridgeTokenWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"btcBridge","outputs":[{"internalType":"contract Bridge","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_chainID","type":"uint256"},{"internalType":"address","name":"_receiver","type":"address"},{"internalType":"address","name":"_bridgeTokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnBridgeTokens","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"uint8","name":"_percents","type":"uint8"}],"name":"configLockedTokenOfflineSave","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_offlineSave","type":"address"}],"name":"configOfflineSaveAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"configplatformCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"createNewBridgeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_bridgetoken","type":"address"},{"internalType":"uint256","name":"_toChainID","type":"uint256"}],"name":"enableBridgeToken2Withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"feeReceiver","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getLockedTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getToken2address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getToken2addressV2","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getTokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getofflineSaveCfg","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"hasBridgeTokenCreated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"hasSetPlatformCoin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"highThreshold","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[],"name":"lockNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lowThreshold","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_intendedRecipient","type":"address"},{"internalType":"address","name":"_bridgeTokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintBridgeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"offlineSave","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"offlineSaveCfgs","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"uint8","name":"_percents","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"oracle","outputs":[{"internalType":"contract Oracle","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"platformCoin","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"uint256","name":"_bridgeServiceFee","type":"uint256"}],"name":"setBridgeServiceFee","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_feeReceiver","type":"address"}],"name":"setFeeReceiver","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_tokenDeployer","type":"address"}],"name":"setTokenDeployer","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"token2WithdrawCfg","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"token2address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"tokenAddrAllow2name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"tokenAllow2Lock","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"tokenDeployer","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_recipient","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"stateMutability":"payable","type":"receive"}
]
```

**ETH/BSC BridgeBank ABI**

```json
[
  {"inputs":[{"internalType":"address","name":"_operatorAddress","type":"address"},{"internalType":"address","name":"_oracleAddress","type":"address"},{"internalType":"address","name":"_bridgeAddress","type":"address"},{"internalType":"address","name":"_tokenDeployer","type":"address"},{"internalType":"address payable","name":"_feeReceiver","type":"address"},{"internalType":"uint256","name":"_bridgeServiceFee","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_beneficiary","type":"address"}],"name":"LogBridgeTokenMint","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"address","name":"_ownerFrom","type":"address"},{"indexed":false,"internalType":"address","name":"_receiver","type":"address"}],"name":"LogBtcTokenBurn","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_from","type":"address"},{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"_nonce","type":"uint256"}],"name":"LogLock","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"string","name":"_symbol","type":"string"},{"indexed":false,"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"LogNewBridgeToken","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"_claimID","type":"bytes32"},{"indexed":false,"internalType":"address","name":"_tokenAddress","type":"address"},{"indexed":false,"internalType":"uint256","name":"_amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"index","type":"uint256"}],"name":"LogNotEnoughBalanceForBurn","type":"event"},
  {"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"_to","type":"address"},{"indexed":false,"internalType":"address","name":"_token","type":"address"},{"indexed":false,"internalType":"string","name":"_name","type":"string"},{"indexed":false,"internalType":"uint256","name":"_value","type":"uint256"}],"name":"LogUnlock","type":"event"},
  {"stateMutability":"payable","type":"fallback"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"}],"name":"addToken2LockList","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"bridge","outputs":[{"internalType":"contract Bridge","name":""}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"bridgeServiceFee","outputs":[{"internalType":"uint256","name":""}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"bridgeTokenCount","outputs":[{"internalType":"uint256","name":""}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bridgeTokenCreated","outputs":[{"internalType":"bool","name":""}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"bridgeTokenWhitelist","outputs":[{"internalType":"bool","name":""}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_Receiver","type":"address"},{"internalType":"address","name":"_btcTokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"burnBridgeTokens","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"uint8","name":"_percents","type":"uint8"}],"name":"configLockedTokenOfflineSave","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_offlineSave","type":"address"}],"name":"configOfflineSaveAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"configplatformCoin","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"},{"internalType":"uint8","name":"decimals","type":"uint8"}],"name":"createNewBridgeToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"feeReceiver","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getLockedTokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getProcClaimIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getSeqOnLackClaim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"getStuckClaims","outputs":[{"components":[{"internalType":"bytes32","name":"_claimID","type":"bytes32"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address payable","name":"_ethereumReceiver","type":"address"}],"internalType":"struct BridgeBank.WaitFounds[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getToken2address","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"getToken2addressV2","outputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"}],"name":"getTokenName","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"getofflineSaveCfg","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"string","name":"_name","type":"string"}],"name":"hasBridgeTokenCreated","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"hasSetPlatformCoin","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"highThreshold","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[{"internalType":"address","name":"_recipient","type":"address"},{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"lockForWaitClaims","outputs":[],"stateMutability":"payable","type":"function"},
  {"inputs":[],"name":"lockNonce","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lockedFunds","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},
  {"inputs":[],"name":"lowThreshold","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address payable","name":"_intendedRecipient","type":"address"},{"internalType":"address","name":"_bridgeTokenAddress","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"mintBridgeTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},
  {"inputs":[],"name":"offlineSave","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},
  {"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"offlineSaveCfgs","outputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"_threshold","type":"uint256"},{"internalType":"uint8","name":"_percents","type":"uint8"}],"stateMutability":"view","type":"function"},
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

**从 JuChain 到 BSC 的跨链转移**

```javascript
const { Web3 } = require('web3');

// 连接到JuChain测试网
const web3 = new Web3('https://testnet-rpc.juchain.org');

// BridgeBank ABI和合约地址
const bridgeBankABI = [/* JuChain BridgeBank ABI from above */]; // 使用完整的JuChain BridgeBank ABI
const bridgeBankAddress = '0x3516949D3c530E4FB65Fa2a02ef808e5587ebaBE';

// 创建合约实例
const bridgeBank = new web3.eth.Contract(bridgeBankABI, bridgeBankAddress);

// 账户设置
const privateKey = '你的私钥'; // !!请勿在生产代码中硬编码私钥
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

// ERC20代币ABI（用于检查余额和授权）
const erc20ABI = [
  {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
];

// 跨链参数
const bscChainID = 97; // BSC测试网Chapel Chain ID
const receiverAddress = '0x接收地址'; // BSC上的接收地址
const tokenAddress = '0x16E0499Cb600ef4F4FbEca756E90D658D9a74E4D'; // JuChain上的USDT地址
const amount = web3.utils.toWei('10', 'ether'); // 转移10个代币 (假设USDT是18位小数)

// 执行跨链转移
async function crossChainTransfer() {
  try {
    // 1. 检查账户余额 (用于支付Gas和可能的Service Fee)
    const balance = await web3.eth.getBalance(account.address);
    console.log('账户JU余额:', web3.utils.fromWei(balance, 'ether'), 'JU');

    // 2. 检查代币余额
    const tokenContract = new web3.eth.Contract(erc20ABI, tokenAddress);
    const tokenBalance = await tokenContract.methods.balanceOf(account.address).call();
    console.log('代币余额:', web3.utils.fromWei(tokenBalance, 'ether')); // 确保使用正确的小数位数
    if (BigInt(tokenBalance) < BigInt(amount)) {
      console.error('错误: 代币余额不足');
      return;
    }

    // 3. 授权代币使用权限 (仅在从 JuChain 转出桥接代币时需要)
    // 注意：burnBridgeTokens 通常不需要approve，因为它直接销毁用户拥有的代币。
    // approve 主要用于 lock 操作，将代币转移给合约。
    // 此处保留 Approve 逻辑以供 lock 参考，但在 burn 流程中可能不需要。
    // 如果你的 burnBridgeTokens 实现确实需要先转移代币，请取消注释此部分。
    /*
    const allowance = await tokenContract.methods.allowance(account.address, bridgeBankAddress).call();
    if (BigInt(allowance) < BigInt(amount)) {
      console.log('授权额度不足，正在授权...');
      // 授权一个足够大的数量
      const maxApproval = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; // 2^256 - 1
      const approveTx = await tokenContract.methods.approve(bridgeBankAddress, maxApproval).send({
        from: account.address,
        gas: 200000 // 估算或设置合适的Gas
      });
      console.log('授权成功, Tx Hash:', approveTx.transactionHash);
      // 等待授权交易确认
      await web3.eth.getTransactionReceipt(approveTx.transactionHash);
    }
    */

    // 4. 获取跨链服务费
    let fee;
    try {
      fee = await bridgeBank.methods.bridgeServiceFee().call();
      console.log('服务费:', web3.utils.fromWei(fee.toString(), 'ether'), 'JU'); // 确保fee是字符串
    } catch (error) {
      console.error('获取服务费失败，可能合约不支持或RPC问题，使用默认值:', error.message);
      fee = web3.utils.toWei('0.01', 'ether'); // 默认服务费0.01 JU
    }

    // 将BigInt或数字转换为字符串，以避免类型混合问题
    const feeString = fee.toString();
    const amountString = amount.toString();

    // 5. 估算Gas
    let estimatedGas;
    try {
      estimatedGas = await bridgeBank.methods.burnBridgeTokens(
        bscChainID,
        receiverAddress,
        tokenAddress,
        amountString
      ).estimateGas({ from: account.address, value: feeString });
      console.log('预估Gas:', estimatedGas.toString());
    } catch (error) {
      console.error('Gas估算失败，请检查参数或网络状态，使用默认值:', error.message);
      estimatedGas = 500000n; // 使用 BigInt 作为默认 Gas 限制
    }

    // 将BigInt转换为数字或字符串，用于发送交易
    const gasLimit = BigInt(estimatedGas) + (BigInt(estimatedGas) / 2n); // 增加50%的Gas限制

    // 6. 调用burnBridgeTokens函数
    console.log(`准备发送交易: burnBridgeTokens(${bscChainID}, ${receiverAddress}, ${tokenAddress}, ${amountString}) with value: ${feeString}`);
    const tx = await bridgeBank.methods.burnBridgeTokens(
      bscChainID,
      receiverAddress,
      tokenAddress,
      amountString
    ).send({
      from: account.address,
      value: feeString,
      gas: gasLimit.toString(), // send 需要字符串或数字
      // EIP-1559 费用参数 (如果网络支持)
      // maxPriorityFeePerGas: web3.utils.toWei('2', 'gwei'), // 小费
      // maxFeePerGas: web3.utils.toWei('50', 'gwei') // 总费用上限
      // 或者 Legacy Gas Price:
      // gasPrice: web3.utils.toWei('10', 'gwei')
    });

    console.log('跨链转移交易哈希:', tx.transactionHash);
    console.log('交易已发送至 JuChain，请等待 Relayer 和 Signer 处理并在 BSC 上完成...');

  } catch (error) {
    console.error('跨链转移失败:', error);
    if (error.receipt) {
      console.error("交易失败回执:", error.receipt);
    }
  }
}

crossChainTransfer();
```

**从 BSC 到 JuChain 的跨链转移**

```javascript
const { Web3 } = require('web3');

// 连接到BSC测试网 (使用公共或你自己的节点)
const bscRpcUrl = 'https://data-seed-prebsc-1-s1.binance.org:8545/'; // 示例公共节点
// const bscRpcUrl = 'https://rpc.ankr.com/bsc_testnet_chapel/YOUR_ANKR_KEY'; // Ankr 示例
const web3 = new Web3(bscRpcUrl);

// BridgeBank ABI和合约地址 (BSC上的)
const bridgeBankABI = [/* ETH/BSC BridgeBank ABI from above */]; // 使用完整的BSC BridgeBank ABI
const bridgeBankAddress = '0x30DBF30Eb71ddb49d526AFdb832C7Ba4D85953f6';

// 创建合约实例
const bridgeBank = new web3.eth.Contract(bridgeBankABI, bridgeBankAddress);

// 账户设置
const privateKey = '你的私钥'; // !!请勿在生产代码中硬编码私钥
const account = web3.eth.accounts.privateKeyToAccount(privateKey);
web3.eth.accounts.wallet.add(account);

// ERC20代币ABI (通用)
const erc20ABI = [
  {"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},
  {"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_value","type":"uint256"}],"name":"approve","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},
  {"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"}
];

// 跨链参数
const receiverAddress = '0x接收地址'; // JuChain上的接收地址
const tokenAddress = '0xcD1093897a5dB4a9aF153772B35AAA066ab969f3'; // BSC测试网上的USDT地址
const amount = web3.utils.toWei('10', 'ether'); // 转移10个代币 (假设USDT是18位小数)

// 执行跨链转移
async function crossChainTransfer() {
  try {
    // 1. 检查BSC账户余额 (用于支付Gas和可能的Service Fee)
    const balance = await web3.eth.getBalance(account.address);
    console.log('BSC账户余额:', web3.utils.fromWei(balance, 'ether'), 'tBNB');

    // 2. 检查代币余额
    const tokenContract = new web3.eth.Contract(erc20ABI, tokenAddress);
    const tokenBalance = await tokenContract.methods.balanceOf(account.address).call();
    console.log('BSC代币余额:', web3.utils.fromWei(tokenBalance, 'ether')); // 确保使用正确的小数位数
    if (BigInt(tokenBalance) < BigInt(amount)) {
      console.error('错误: 代币余额不足');
      return;
    }

    // 3. 授权代币使用权限 (lock操作需要授权)
    const allowance = await tokenContract.methods.allowance(account.address, bridgeBankAddress).call();
    console.log('当前授权额度:', web3.utils.fromWei(allowance, 'ether'));
    if (BigInt(allowance) < BigInt(amount)) {
      console.log('授权额度不足，正在进行授权...');

      // 授权要转移的数量，或者一个更大的数量，例如 100 个
      // const approvalAmount = amount; // 仅授权需要的数量
      const approvalAmount = web3.utils.toWei('100', 'ether'); // 授权 100 个
      // const maxApproval = '115792089237316195423570985008687907853269984665640564039457584007913129639935'; // 最大授权

      const approveGas = await tokenContract.methods.approve(bridgeBankAddress, approvalAmount).estimateGas({ from: account.address });
      const approveTx = await tokenContract.methods.approve(bridgeBankAddress, approvalAmount).send({
        from: account.address,
        gas: (BigInt(approveGas) + BigInt(approveGas) / 2n).toString(), // 增加 50% Gas 缓冲
        // gasPrice: web3.utils.toWei('10', 'gwei') // BSC 测试网 Gas Price
      });
      console.log('授权成功, Tx Hash:', approveTx.transactionHash);
      // 等待授权交易确认可能更稳妥
      await web3.eth.getTransactionReceipt(approveTx.transactionHash);
      console.log('授权已确认');
    } else {
      console.log('授权额度充足');
    }


    // 4. 获取跨链服务费
    let fee;
    try {
      fee = await bridgeBank.methods.bridgeServiceFee().call();
      console.log('服务费:', web3.utils.fromWei(fee.toString(), 'ether'), 'tBNB'); // 确保 fee 是字符串
    } catch (error) {
      console.error('获取服务费失败，使用默认值:', error.message);
      fee = web3.utils.toWei('0.001', 'ether'); // 示例默认服务费0.001 tBNB
    }

    const feeString = fee.toString();
    const amountString = amount.toString();


    // 5. 估算Gas
    let estimatedGas;
    try {
       estimatedGas = await bridgeBank.methods.lock(
        receiverAddress,
        tokenAddress,
        amountString
      ).estimateGas({ from: account.address, value: feeString });
      console.log('预估Gas:', estimatedGas.toString());
    } catch (error) {
      console.error('Gas估算失败，请检查参数、授权或网络状态，使用默认值:', error.message);
      estimatedGas = 500000n; // 使用 BigInt 作为默认 Gas 限制
    }

    const gasLimit = BigInt(estimatedGas) + (BigInt(estimatedGas) / 2n); // 增加50%的Gas限制


    // 6. 调用lock函数进行跨链
    console.log(`准备发送交易: lock(${receiverAddress}, ${tokenAddress}, ${amountString}) with value: ${feeString}`);
    const tx = await bridgeBank.methods.lock(
      receiverAddress,
      tokenAddress,
      amountString
    ).send({
      from: account.address,
      value: feeString,
      gas: gasLimit.toString(),
      // gasPrice: web3.utils.toWei('10', 'gwei') // BSC 测试网 Gas Price
    });

    console.log('跨链转移交易哈希:', tx.transactionHash);
    console.log('交易已发送至 BSC，请等待 Relayer 和 Signer 处理并在 JuChain 上完成铸币...');

  } catch (error) {
    console.error('跨链转移失败:', error);
     if (error.receipt) {
      console.error("交易失败回执:", error.receipt);
    }
  }
}

crossChainTransfer();
```

**注意事项**

1. **测试网限制**：
   * 这些合约和代币仅在测试网上可用，不适用于主网环境。
   * 测试网可能会定期重置，请不要在测试网上存储有价值的资产。
2. **服务费**：
   * 跨链操作需要支付服务费，可通过 `bridgeServiceFee` 函数查询。
   * 服务费以源链的原生代币（JU、tBNB 或 Holesky ETH）支付，并在发起 `lock` 或 `burnBridgeTokens` 交易时作为 `value` 发送。


## sheng-tai/lian-shang-sheng-tai

# 链上生态

### JuChain 链上生态资源表

JuChain 的链上生态为开发者提供了丰富的工具和资源，以支持测试网开发、资产管理和应用构建。以下是核心模块及其功能概述，包含对应的测试网链接。

| **模块** | **功能描述**            | **链接**                                                           |
| ------ | ------------------- | ---------------------------------------------------------------- |
| 公链水龙头  | 获取测试网 JU 代币，用于开发和测试 | [faucet-testnet.juchain.org](https://faucet-testnet.juchain.org) |
| 跨链桥    | 实现 JU 代币与其他区块链的跨链转移 | [bridge-testnet.juchain.org](https://bridge-testnet.juchain.org) |
| DEX    | 去中心化交易所，支持 JU 代币兑换  | [swap-testnet.juchain.org](https://swap-testnet.juchain.org)     |
| 区块浏览器  | 查询测试网交易、区块和合约详情     | [testnet.juscan.io](http://testnet.juscan.io)                    |
| 官方网站   | JuChain 主网信息和生态概览   | [juchain.org](https://juchain.org)                               |
| 测试网网站  | 测试网相关文档和资源入口        | [testnet.juchain.org](https://testnet.juchain.org)               |

***


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/sheng-tai/lian-shang-sheng-tai.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## sheng-tai/qu-zhong-xin-hua-jiao-yi-suo

# 去中心化交易所

JuChain 提供了一套基于 Uniswap V2 模型的去中心化交易所（DEX）功能，允许用户进行代币兑换（Swap）和提供流动性（Liquidity）。

### 主网信息

* **网络**：JuChain 主网
* **合约地址**：`0x49E5c7f25711abe668F404307b27f4bE4836B0e7`
* **部署地址**：`0x7389F1B4717F5152B6Cc107bce4A42a11dC0b76E`
* **更新价格地址**：`0xa6F32fe2920AcF559699825AFaC493aa4F49Ac1D`
* **合约权限地址**：`0x5021A15FaAFEFEC1daCB1c8b24FFE3F3E3f7277b`

### 测试网信息

**核心组件:**

* **路由器 (`JUV2Router02`)**: 用户交互的主要入口合约，用于执行 Swap、添加/移除流动性。与 Uniswap V2 Router 类似。
* **工厂 (`JUV2Factory`)**: 创建和管理交易对合约。
* **交易对 (`JUV2Pair`)**: 代表一个特定的代币交易对（例如 WJU-USDT），持有流动性资金池，并作为 ERC20 LP 代币。
* **WJU (Wrapped JU)**: 原生 JU 代币的 ERC20 封装版本，用于与 DEX 交互。
* **USDT**: 网络上的一个示例 ERC20 代币。

**1. 前置准备与网络设置**

* **主网**:
  * **RPC URL**: `https://rpc.juchain.org`
  * **链 ID (Chain ID)**: `202599`
  * **区块浏览器**: `https://juscan.io`
* **测试网**:
  * **RPC URL**: `https://testnet-rpc.juchain.org`
  * **链 ID (Chain ID)**: `202599`
  * **区块浏览器**: `https://testnet.juscan.io`
* **工具**:
  * Node.js 环境及 Web3.js 库 (`const { Web3 } = require('web3');`) 或类似库 (ethers.js)。
  * Solidity 开发环境 (可选，用于合约交互或理解)。
* **账户与凭证**:
  * 一个外部账户 (EOA) 地址 (`USER_ADDRESS`)。
  * 该账户的私钥 (`PRIVATE_KEY`)，**必须安全存储和管理**，切勿硬编码或公开。
  * 账户需持有原生 JU (用于支付 Gas) 和交互所需的代币 (如 WJU, USDT)。
* **基础设置**:
  * 初始化 Web3 实例: `const web3 = new Web3(RPC_URL);`
  * 创建合约实例: 使用相应的 ABI (见第 7 节) 和合约地址为 WJU, USDT, Router, Factory 创建 Web3 Contract 对象。Pair 合约实例通常在获取其地址后动态创建。

**2. 核心合约地址与详情**

**主网合约地址**

| 合约               | 地址                                                                   | 说明                                                        |
| ---------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| **WJU**          | `0x4d1B49B424afd7075d3c063adDf97D5575E1c7E2`                         | 封装版 JU。`deposit()` (payable) 封装, `withdraw()` 解封装。18 位小数。 |
| **USDT**         | `0xc8e19C19479a866142B42fB390F2ea1Ff082E0D2`                         | 标准 ERC20 代币。通常为 18 位小数 (请以链上 `decimals()` 确认)。            |
| **工厂 (Factory)** | `0xCcbcecDd7d8D115Df79fc85847F38F9A5965326c`                         | 部署并追踪 `JUV2Pair` 交易对合约。                                   |
| **路由器 (Router)** | `0x09f58Aa3C7A8101062855C66E43a83920EB23511`                         | **交互主入口**。内部将 WJU 地址视为其 `WETH` 地址 (`router.WETH()` 可验证)。  |
| **交易对初始化哈希**     | `0x2d5d6553271f0bbe36b13a3628f44898e95763f6f3692c2de666389cb179309b` | 用于确定性计算交易对地址 (配合 `create2`)。                              |

**测试网合约地址**

| 合约               | 地址                                                                   | 说明                                                        |
| ---------------- | -------------------------------------------------------------------- | --------------------------------------------------------- |
| **WJU**          | `0x2c67A8Ee92C5dD55b1D133631a32451e123Be1d3`                         | 封装版 JU。`deposit()` (payable) 封装, `withdraw()` 解封装。18 位小数。 |
| **USDT**         | `0xf173cD2DD28f94F6b7F6B0817E498fe842bC5D02`                         | 标准 ERC20 代币。通常为 18 位小数 (请以链上 `decimals()` 确认)。            |
| **工厂 (Factory)** | `0x66682281BdfeC17fCBcae0480C77edFb0c489339`                         | 部署并追踪 `JUV2Pair` 交易对合约。                                   |
| **路由器 (Router)** | `0x6A647E09193a130b0CccBF26A1CF442491bDeCc0`                         | **交互主入口**。内部将 WJU 地址视为其 `WETH` 地址 (`router.WETH()` 可验证)。  |
| **交易对初始化哈希**     | `0x2d5d6553271f0bbe36b13a3628f44898e95763f6f3692c2de666389cb179309b` | 用于确定性计算交易对地址 (配合 `create2`)。                              |

**关键配置:** 路由器合约 (`JUV2Router02`) 中的 `WETH` 地址**必须**指向 JuChain 上的 WJU 地址 (`0x2c67A8Ee92C5dD55b1D133631a32451e123Be1d3`)。这使得路由器中带有 `ETH` 后缀的函数能够正确处理 WJU。

**3. 与 WJU 交互 (封装/解封装)**

将原生 JU 转换为 ERC20 兼容的 WJU 是与 DEX 交互的前提。

* **封装 JU (Wrap)**: 调用 WJU 合约的 `deposit()` payable 函数。
  * **操作:** 构造一个发往 WJU 合约地址的交易，调用 `deposit()` (ABI 中提供)，并在交易中附带 `value` 字段，其值为您希望封装的原生 JU 数量 (单位: Wei)。
* **解封装 WJU (Unwrap)**: 调用 WJU 合约的 `withdraw(uint256 wad)` 函数。
  * **操作:** 调用 `withdraw` 函数，传入参数 `wad` 为您希望解封装换回原生 JU 的 WJU 数量 (单位: Wei)。此交易不附带 `value`。

**4. Swap (兑换) 功能 (使用路由器)**

通过路由器合约，利用已存在的流动性池进行代币兑换。

**常用 Swap 函数:**

* `swapExactETHForTokens`: 用 **精确数量** 的 WJU 兑换 **至少** 某个数量的 ERC20 代币。
* `swapExactTokensForETH`: 用 **精确数量** 的 ERC20 代币 兑换 **至少** 某个数量的 WJU。
* `swapExactTokensForTokens`: 用 **精确数量** 的输入 ERC20 代币，兑换 **至少** 某个数量的输出 ERC20 代币。

**核心参数:**

* `amountIn` / `amountOut`: 涉及的数量。
* `amountOutMin` / `amountInMax`: 滑点控制，保证收到的不少于/付出的不多于此值。
* `path`: 地址数组，定义兑换路径，如 `[WJU_ADDRESS, USDT_ADDRESS]` 或 `[USDT_ADDRESS, WJU_ADDRESS]`。
* `to`: 接收代币的地址。
* `deadline`: Unix 时间戳，交易在此时间之后失效。

**流程: 使用 WJU 兑换 USDT (调用 `swapExactETHForTokens`)**

1. **确定输入:** 决定要花费的精确 WJU 数量 (`wjuAmountIn`，单位 Wei)。
2. **计算最小输出 (滑点控制):**
   * 调用路由器的 `getAmountsOut(wjuAmountIn, [WJU_ADDRESS, USDT_ADDRESS])` 视图函数，获取预期的 USDT 输出量 `expectedUsdtAmount`。
   * 根据可接受的滑点百分比 (e.g., 1% or 0.01) 计算 `usdtAmountOutMin = expectedUsdtAmount * (1 - slippageTolerance)`。**注意：** 处理大数运算时需使用 BigInt。
3. **准备交易:**
   * 设置 `deadline` (例如，当前时间 + 10 分钟)。
   * 构造 `swapExactETHForTokens` 函数调用，参数为：`usdtAmountOutMin`, `path = [WJU_ADDRESS, USDT_ADDRESS]`, `to = USER_ADDRESS`, `deadline`。
4. **发送交易:**
   * 对构造好的交易进行签名 (使用 `PRIVATE_KEY`)。
   * 发送交易时，**必须附加 `value: wjuAmountIn`**，因为 WJU 是通过原生代币方式传递的。
   * 建议先使用 `estimateGas` 估算 Gas Limit，并可适当增加冗余 (e.g., \* 1.1)。

**流程: 使用 USDT 兑换 WJU (调用 `swapExactTokensForETH`)**

1. **确定输入:** 决定要花费的精确 USDT 数量 (`usdtAmountIn`，单位 Wei)。
2. **批准 Router:**
   * 调用 **USDT 合约** 的 `approve(ROUTER_ADDRESS, usdtAmountIn)` 函数。
   * **必须等待**此批准交易成功确认后才能进行下一步。
   * *优化:* 可先调用 `usdtContract.methods.allowance(USER_ADDRESS, ROUTER_ADDRESS)` 检查现有额度，若足够则跳过批准。
3. **计算最小输出 (滑点控制):**
   * 调用路由器的 `getAmountsOut(usdtAmountIn, [USDT_ADDRESS, WJU_ADDRESS])` 获取预期的 WJU 输出量 `expectedWjuAmount`。
   * 计算 `wjuAmountOutMin = expectedWjuAmount * (1 - slippageTolerance)`。
4. **准备交易:**
   * 设置 `deadline`。
   * 构造 `swapExactTokensForETH` 函数调用，参数为：`usdtAmountIn`, `wjuAmountOutMin`, `path = [USDT_ADDRESS, WJU_ADDRESS]`, `to = USER_ADDRESS`, `deadline`。
5. **发送交易:**
   * 签名并发送交易。
   * 此交易**不附加 `value`**。
   * 同样建议估算 Gas。

**Swap 注意事项:**

* **滑点:** `amountOutMin`/`amountInMax` 是防止价格不利变动的重要保护措施。
* **Gas:** 所有写操作都需要 Gas (原生 JU)。
* **Deadline:** 防止交易卡在交易池中过久而导致执行时价格与预期偏差过大。
* **路径 (`path`):** 确保路径正确，对于复杂兑换可能需要经过 WJU 作为中间路由。

**5. 流动性管理 (使用路由器)**

向交易对提供流动性以赚取交易手续费，并获得代表份额的 LP 代币。

**常用流动性函数:**

* `addLiquidityETH`: 添加 WJU 和一种 ERC20 代币的流动性。
* `removeLiquidityETH`: 移除 WJU 和一种 ERC20 代币的流动性。
* `addLiquidity`: 添加两种 ERC20 代币的流动性。
* `removeLiquidity`: 移除两种 ERC20 代币的流动性。

**流程: 添加 WJU-USDT 流动性 (调用 `addLiquidityETH`)**

1. **确定期望数量:** 决定期望提供的 WJU 数量 (`wjuAmountDesired`) 和 USDT 数量 (`usdtAmountDesired`)。注意：实际添加比例将由当前池子决定，您提供的数量只是上限和期望比例。
2. **计算最小接受数量 (滑点控制):** 根据可接受的滑点计算 `wjuAmountMin` 和 `usdtAmountMin`。
3. **检查余额:** 确保账户中有足够的 WJU (通过 `value` 提供) 和 USDT。
4. **批准 Router (针对 USDT):**
   * 调用 **USDT 合约** 的 `approve(ROUTER_ADDRESS, usdtAmountDesired)` 函数。
   * 等待批准交易确认。
   * *优化:* 可先检查 `allowance`，若足够则跳过。
5. **准备交易:**
   * 设置 `deadline`。
   * 构造 `addLiquidityETH` 函数调用，参数为：`token = USDT_ADDRESS`, `amountTokenDesired = usdtAmountDesired`, `amountTokenMin = usdtAmountMin`, `amountETHMin = wjuAmountMin`, `to = USER_ADDRESS`, `deadline`。
6. **发送交易:**
   * 签名并发送交易。
   * **必须附加 `value: wjuAmountDesired`** 来提供 WJU。
   * 建议估算 Gas。交易成功后，`USER_ADDRESS` 会收到 WJU-USDT 的 LP 代币。

**流程: 移除 WJU-USDT 流动性 (调用 `removeLiquidityETH`)**

1. **确定移除数量:** 决定要移除的 LP 代币数量 (`liquidityAmount`，单位 Wei)。LP 代币通常也是 18 位小数。
2. **计算最小取回数量 (滑点控制):** 根据当前池子比例和可接受滑点，估算最少能取回的 WJU 数量 (`wjuAmountMin`) 和 USDT 数量 (`usdtAmountMin`)。可以通过查询 Pair 合约的 `getReserves` 和 LP 代币的 `totalSupply` 来辅助计算。
3. **获取 Pair 地址:** 调用 `factoryContract.methods.getPair(WJU_ADDRESS, USDT_ADDRESS)` 获取 WJU-USDT 的 Pair 合约地址 (`pairAddress`)。
4. **批准 Router (针对 LP 代币):**
   * 创建 Pair 合约实例: `const pairContract = new web3.eth.Contract(ABIs.JUV2PAIR_ABI, pairAddress);`
   * 调用 **Pair 合约** 的 `approve(ROUTER_ADDRESS, liquidityAmount)` 函数。
   * 等待批准交易确认。
5. **准备交易:**
   * 设置 `deadline`。
   * 构造 `removeLiquidityETH` 函数调用，参数为：`token = USDT_ADDRESS`, `liquidity = liquidityAmount`, `amountTokenMin = usdtAmountMin`, `amountETHMin = wjuAmountMin`, `to = USER_ADDRESS`, `deadline`。
6. **发送交易:**
   * 签名并发送交易。
   * 此交易**不附加 `value`**。
   * 建议估算 Gas。交易成功后，`USER_ADDRESS` 会收到 WJU 和 USDT。

**流动性管理注意事项:**

* **无常损失:** 提供流动性的固有风险，当代币相对价格变动时可能发生。
* **LP 代币:** LP 代币本身也是 ERC20，可以转移或用于其他 DeFi 协议 (如果支持)。
* **首次添加:** 如果是第一个提供者，将设定初始汇率。

**6. 使用工厂 (Factory)**

工厂合约主要用于创建和查询交易对。

* **查询交易对地址:**
  * 调用 `getPair(address tokenA, address tokenB)`。
  * 如果返回非零地址，则交易对已存在。
  * 如果返回 `0x000...000`，则交易对不存在。
* **创建交易对:**
  * 如果通过 `getPair` 确认交易对不存在，可以调用 `createPair(address tokenA, address tokenB)`。
  * `tokenA` 和 `tokenB` 地址无序。
  * 工厂会使用 `create2` 部署新的 Pair 合约，并发出 `PairCreated` 事件。
  * 通常，`addLiquidity*` 函数在交易对不存在时会自动调用 `createPair`，但手动调用可以确保其存在。
* **获取所有交易对信息:** `allPairsLength()` 和 `allPairs(uint index)` 可用，但遍历可能成本较高。
* **确定性计算交易对地址:** 使用 `pairFor` 逻辑 (参见下方 Solidity 示例)，结合工厂地址、排序后的 Token 地址和 `initCodeHash`，可以在链下预先计算出交易对地址。

**示例: 计算交易对地址 (Solidity 辅助库)**

```solidity
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

library PairUtil {
    // 计算给定工厂和代币对的交易对地址
    function pairFor(address factory, address tokenA, address tokenB) internal pure returns (address pair) {
        (address token0, address token1) = tokenA < tokenB ? (tokenA, tokenB) : (tokenB, tokenA);
        bytes32 salt = keccak256(abi.encodePacked(token0, token1));
        // JuChain DEX Pair 合约初始化代码哈希
        bytes32 initCodeHash = 0x2d5d6553271f0bbe36b13a3628f44898e95763f6f3692c2de666389cb179309b;
        pair = address(uint160(uint(keccak256(abi.encodePacked(
                hex'ff', factory, salt, initCodeHash
            )))));
    }
}

contract MyDEXInteractor {
    address constant FACTORY = 0x66682281BdfeC17fCBcae0480C77edFb0c489339;
    address constant WJU = 0x2c67A8Ee92C5dD55b1D133631a32451e123Be1d3;
    address constant USDT = 0xf173cD2DD28f94F6b7F6B0817E498fe842bC5D02;

    // 获取 WJU-USDT 交易对的预期地址
    function getWjuUsdtPairAddress() external pure returns (address) {
        return PairUtil.pairFor(FACTORY, WJU, USDT);
    }
}
```

**7. 合约 ABI**

**强烈建议:** 始终从 JuChain 区块浏览器 (`https://testnet.juscan.io`) 验证并获取指定合约地址的最新、最完整的官方 ABI。

```json
{
  "WJU_ABI": [
    {"constant": false, "inputs": [{"name": "guy", "type": "address"}, {"name": "wad", "type": "uint256"}], "name": "approve", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [], "name": "deposit", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"},
    {"constant": false, "inputs": [{"name": "dst", "type": "address"}, {"name": "wad", "type": "uint256"}], "name": "transfer", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [{"name": "src", "type": "address"}, {"name": "dst", "type": "address"}, {"name": "wad", "type": "uint256"}], "name": "transferFrom", "outputs": [{"name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [{"name": "wad", "type": "uint256"}], "name": "withdraw", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"payable": true, "stateMutability": "payable", "type": "fallback"},
    {"anonymous": false, "inputs": [{"indexed": true, "name": "src", "type": "address"}, {"indexed": true, "name": "guy", "type": "address"}, {"indexed": false, "name": "wad", "type": "uint256"}], "name": "Approval", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "name": "src", "type": "address"}, {"indexed": true, "name": "dst", "type": "address"}, {"indexed": false, "name": "wad", "type": "uint256"}], "name": "Transfer", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "name": "dst", "type": "address"}, {"indexed": false, "name": "wad", "type": "uint256"}], "name": "Deposit", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "name": "src", "type": "address"}, {"indexed": false, "name": "wad", "type": "uint256"}], "name": "Withdrawal", "type": "event"},
    {"constant": true, "inputs": [{"name": "", "type": "address"}, {"name": "", "type": "address"}], "name": "allowance", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [{"name": "", "type": "address"}], "name": "balanceOf", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"name": "", "type": "uint8"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "name", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"name": "", "type": "string"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "totalSupply", "outputs": [{"name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"}
  ],
  "USDT_ABI": [
    {"inputs": [], "stateMutability": "nonpayable", "type": "constructor"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"},
    {"inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "account", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
    {"inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}], "stateMutability": "view", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "subtractedValue", "type": "uint256"}], "name": "decreaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "addedValue", "type": "uint256"}], "name": "increaseAllowance", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
    {"inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "stateMutability": "view", "type": "function"},
    {"inputs": [], "name": "totalSupply", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "stateMutability": "view", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transfer", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "from", "type": "address"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "amount", "type": "uint256"}], "name": "transferFrom", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "stateMutability": "nonpayable", "type": "function"}
  ],
  "FACTORY_ABI": [
    {"inputs": [{"internalType": "address", "name": "_feeToSetter", "type": "address"}], "payable": false, "stateMutability": "nonpayable", "type": "constructor"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "token0", "type": "address"}, {"indexed": true, "internalType": "address", "name": "token1", "type": "address"}, {"indexed": false, "internalType": "address", "name": "pair", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "", "type": "uint256"}], "name": "PairCreated", "type": "event"},
    {"constant": true, "inputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "name": "allPairs", "outputs": [{"internalType": "address", "name": "pair", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "allPairsLength", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {"internalType": "address", "name": "tokenB", "type": "address"}], "name": "createPair", "outputs": [{"internalType": "address", "name": "pair", "type": "address"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "feeTo", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "feeToSetter", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [{"internalType": "address", "name": "", "type": "address"}, {"internalType": "address", "name": "", "type": "address"}], "name": "getPair", "outputs": [{"internalType": "address", "name": "pair", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "_feeTo", "type": "address"}], "name": "setFeeTo", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "_feeToSetter", "type": "address"}], "name": "setFeeToSetter", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"}
  ],
  "ROUTER_ABI": [
    {"inputs": [{"internalType": "address", "name": "_factory", "type": "address"}, {"internalType": "address", "name": "_WETH", "type": "address"}], "stateMutability": "nonpayable", "type": "constructor"},
    {"stateMutability": "payable", "type": "receive"},
    {"inputs": [], "name": "WETH", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "pure", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {"internalType": "address", "name": "tokenB", "type": "address"}, {"internalType": "uint256", "name": "amountADesired", "type": "uint256"}, {"internalType": "uint256", "name": "amountBDesired", "type": "uint256"}, {"internalType": "uint256", "name": "amountAMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "addLiquidity", "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {"internalType": "uint256", "name": "amountB", "type": "uint256"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "token", "type": "address"}, {"internalType": "uint256", "name": "amountTokenDesired", "type": "uint256"}, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountETHMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "addLiquidityETH", "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}], "stateMutability": "payable", "type": "function"},
    {"inputs": [], "name": "factory", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "stateMutability": "pure", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {"internalType": "uint256", "name": "reserveIn", "type": "uint256"}, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}], "name": "getAmountIn", "outputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}], "stateMutability": "pure", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "reserveIn", "type": "uint256"}, {"internalType": "uint256", "name": "reserveOut", "type": "uint256"}], "name": "getAmountOut", "outputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}], "stateMutability": "pure", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}], "name": "getAmountsIn", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "view", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}], "name": "getAmountsOut", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "view", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {"internalType": "uint256", "name": "reserveA", "type": "uint256"}, {"internalType": "uint256", "name": "reserveB", "type": "uint256"}], "name": "quote", "outputs": [{"internalType": "uint256", "name": "amountB", "type": "uint256"}], "stateMutability": "pure", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {"internalType": "address", "name": "tokenB", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountAMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "removeLiquidity", "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {"internalType": "uint256", "name": "amountB", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "token", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountETHMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "removeLiquidityETH", "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "token", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountETHMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "removeLiquidityETHSupportingFeeOnTransferTokens", "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "token", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountETHMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {"internalType": "uint8", "name": "v", "type": "uint8"}, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {"internalType": "bytes32", "name": "s", "type": "bytes32"}], "name": "removeLiquidityETHWithPermit", "outputs": [{"internalType": "uint256", "name": "amountToken", "type": "uint256"}, {"internalType": "uint256", "name": "amountETH", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "token", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountTokenMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountETHMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {"internalType": "uint8", "name": "v", "type": "uint8"}, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {"internalType": "bytes32", "name": "s", "type": "bytes32"}], "name": "removeLiquidityETHWithPermitSupportingFeeOnTransferTokens", "outputs": [{"internalType": "uint256", "name": "amountETH", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "address", "name": "tokenA", "type": "address"}, {"internalType": "address", "name": "tokenB", "type": "address"}, {"internalType": "uint256", "name": "liquidity", "type": "uint256"}, {"internalType": "uint256", "name": "amountAMin", "type": "uint256"}, {"internalType": "uint256", "name": "amountBMin", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {"internalType": "bool", "name": "approveMax", "type": "bool"}, {"internalType": "uint8", "name": "v", "type": "uint8"}, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {"internalType": "bytes32", "name": "s", "type": "bytes32"}], "name": "removeLiquidityWithPermit", "outputs": [{"internalType": "uint256", "name": "amountA", "type": "uint256"}, {"internalType": "uint256", "name": "amountB", "type": "uint256"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactETHForTokens", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "payable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactETHForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "payable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactTokensForETH", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactTokensForETHSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactTokensForTokens", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountIn", "type": "uint256"}, {"internalType": "uint256", "name": "amountOutMin", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapExactTokensForTokensSupportingFeeOnTransferTokens", "outputs": [], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {"internalType": "uint256", "name": "amountInMax", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapTokensForExactETH", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {"internalType": "uint256", "name": "amountInMax", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapTokensForExactTokens", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "nonpayable", "type": "function"},
    {"inputs": [{"internalType": "uint256", "name": "amountOut", "type": "uint256"}, {"internalType": "address[]", "name": "path", "type": "address[]"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}], "name": "swapETHForExactTokens", "outputs": [{"internalType": "uint256[]", "name": "amounts", "type": "uint256[]"}], "stateMutability": "payable", "type": "function"}
  ],
  "JUV2PAIR_ABI": [
    {"inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "owner", "type": "address"}, {"indexed": true, "internalType": "address", "name": "spender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Approval", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}], "name": "Burn", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount0", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amount1", "type": "uint256"}], "name": "Mint", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "sender", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "amount0In", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amount1In", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amount0Out", "type": "uint256"}, {"indexed": false, "internalType": "uint256", "name": "amount1Out", "type": "uint256"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}], "name": "Swap", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": false, "internalType": "uint112", "name": "reserve0", "type": "uint112"}, {"indexed": false, "internalType": "uint112", "name": "reserve1", "type": "uint112"}], "name": "Sync", "type": "event"},
    {"anonymous": false, "inputs": [{"indexed": true, "internalType": "address", "name": "from", "type": "address"}, {"indexed": true, "internalType": "address", "name": "to", "type": "address"}, {"indexed": false, "internalType": "uint256", "name": "value", "type": "uint256"}], "name": "Transfer", "type": "event"},
    {"constant": true, "inputs": [], "name": "DOMAIN_SEPARATOR", "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "MINIMUM_LIQUIDITY", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "pure", "type": "function"},
    {"constant": true, "inputs": [], "name": "PERMIT_TYPEHASH", "outputs": [{"internalType": "bytes32", "name": "", "type": "bytes32"}], "payable": false, "stateMutability": "pure", "type": "function"},
    {"constant": true, "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}], "name": "allowance", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "value", "type": "uint256"}], "name": "approve", "outputs": [{"internalType": "bool", "name": "", "type": "bool"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [{"internalType": "address", "name": "owner", "type": "address"}], "name": "balanceOf", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "to", "type": "address"}], "name": "burn", "outputs": [{"internalType": "uint256", "name": "amount0", "type": "uint256"}, {"internalType": "uint256", "name": "amount1", "type": "uint256"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "decimals", "outputs": [{"internalType": "uint8", "name": "", "type": "uint8"}], "payable": false, "stateMutability": "pure", "type": "function"},
    {"constant": true, "inputs": [], "name": "factory", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "getReserves", "outputs": [{"internalType": "uint112", "name": "_reserve0", "type": "uint112"}, {"internalType": "uint112", "name": "_reserve1", "type": "uint112"}, {"internalType": "uint32", "name": "_blockTimestampLast", "type": "uint32"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "_token0", "type": "address"}, {"internalType": "address", "name": "_token1", "type": "address"}], "name": "initialize", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "kLast", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "to", "type": "address"}], "name": "mint", "outputs": [{"internalType": "uint256", "name": "liquidity", "type": "uint256"}], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "name", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "payable": false, "stateMutability": "pure", "type": "function"},
    {"constant": true, "inputs": [{"internalType": "address", "name": "owner", "type": "address"}], "name": "nonces", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "owner", "type": "address"}, {"internalType": "address", "name": "spender", "type": "address"}, {"internalType": "uint256", "name": "value", "type": "uint256"}, {"internalType": "uint256", "name": "deadline", "type": "uint256"}, {"internalType": "uint8", "name": "v", "type": "uint8"}, {"internalType": "bytes32", "name": "r", "type": "bytes32"}, {"internalType": "bytes32", "name": "s", "type": "bytes32"}], "name": "permit", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "price0CumulativeLast", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": true, "inputs": [], "name": "price1CumulativeLast", "outputs": [{"internalType": "uint256", "name": "", "type": "uint256"}], "payable": false, "stateMutability": "view", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "address", "name": "to", "type": "address"}], "name": "skim", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": false, "inputs": [{"internalType": "uint256", "name": "amount0Out", "type": "uint256"}, {"internalType": "uint256", "name": "amount1Out", "type": "uint256"}, {"internalType": "address", "name": "to", "type": "address"}, {"internalType": "bytes", "name": "data", "type": "bytes"}], "name": "swap", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "symbol", "outputs": [{"internalType": "string", "name": "", "type": "string"}], "payable": false, "stateMutability": "pure", "type": "function"},
    {"constant": false, "inputs": [], "name": "sync", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"},
    {"constant": true, "inputs": [], "name": "token0", "outputs": [{"internalType": "address", "name": "", "type": "address"}], "payable": false, "stateMutability": "view", "type": "function"},
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


## wei-lai-yuan-jing

# 未来愿景

JuChain将于2025年中推出主网，JPoSA共识从创世区块完全激活，从第一天起提供亚秒级确认和高吞吐量。

## 近期路线图

启动后立即，路线图专注于在2026年前达到生产就绪的三大支柱：

### 质押启用 (2025年第三季度)

* 代币持有者将能够委托JU以获取奖励
* 验证者集合将从初始21个核心节点扩展到至少100个地理分布的运营商
* 部署用户友好的质押界面以鼓励广泛参与

### 验证者扩展 (2025年第三至第四季度)

* 为节点运营商发布增强的入职工具
* 性能仪表板将提供验证者运营的透明度
* 激励计划将吸引专业运营商和社区运行节点
* 强调地理和组织多样性以加强去中心化

### 治理门户 (2025年第四季度公开测试)

* 链上门户将允许JU持有者提交改进提案
* 结构化讨论论坛将促进社区辩论
* 透明的投票机制将巩固社区对协议演进的控制
* 委托选项将在生态系统内实现液体民主

## 中期技术演进

在这些基础就位后，JuChain将追求几项技术增强：

### 分片实施

* JuChain将引入分片，将总吞吐量推至超过10,000 TPS
* 理论最大值将遵循公式：总TPS = 每分片TPS × 分片数量
* 跨分片通信协议将为复杂交易维持原子性
* 数据可用性解决方案将确保分片架构的完整性

### 治理完善

* 一旦治理系统稳定，社区将探索二次投票
* 投票权将随质押的平方根增长（V = √S），促进公平而非金权政治
* 委托机制将被增强以支持技术决策中的专业知识
* 时间锁定提案将实现计划的协议升级，具有适当准备

## 长期增长预测

在这一发展轨迹下，网络效应模型预测JuChain将：

* 到2026年超过1亿活跃用户
* 支持数千个活跃的去中心化应用
* 每日处理数百万交易
* 成为多链生态系统的中心枢纽

这些雄心勃勃的目标由JuChain的以下方面支持：

* 以流量为中心的设计
* 强健的激励结构
* 无缝互操作性功能
* 对用户体验的承诺

通过执行这一愿景，JuChain旨在重新定义公共区块链的可能性，使去中心化应用对全球主流用户可访问且有用。


---

# Agent Instructions: Querying This Documentation

If you need additional information that is not directly available in this page, you can query the documentation dynamically by asking a question.

Perform an HTTP GET request on the current page URL with the `ask` query parameter:

```
GET https://juchain.gitbook.io/juchain-docs/zh/wei-lai-yuan-jing.md?ask=<question>
```

The question should be specific, self-contained, and written in natural language.
The response will contain a direct answer to the question and relevant excerpts and sources from the documentation.

Use this mechanism when the answer is not explicitly present in the current page, you need clarification or additional context, or you want to retrieve related documentation sections.


## zhi-neng-he-yue

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