C 的跨链转移**

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
      ).estimateGas({ from: account.addre