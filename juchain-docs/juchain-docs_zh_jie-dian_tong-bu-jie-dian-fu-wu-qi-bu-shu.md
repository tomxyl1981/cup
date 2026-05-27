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