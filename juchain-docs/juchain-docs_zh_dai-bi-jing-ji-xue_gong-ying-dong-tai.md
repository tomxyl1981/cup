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