const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const worldCupHTML = fs.readFileSync('/var/www/html/index.html', 'utf8');

// Hidden connected info that appears in top-right
const walletInfoBar = `
<div id="walletBar" style="position:fixed;top:15px;right:15px;z-index:9999;display:none;">
<div style="background:rgba(0,0,0,0.8);border:2px solid #00d4aa;border-radius:30px;padding:8px 15px;display:flex;align-items:center;gap:10px;">
<span id="walletShortAddr" style="color:#fff;font-size:13px;font-weight:bold;"></span>
<span id="walletNet" style="background:#4caf50;color:#fff;font-size:11px;padding:3px 8px;border-radius:10px;">主網</span>
<button onclick="disconnectWallet()" style="background:#f44336;border:none;color:#fff;padding:5px 10px;border-radius:15px;cursor:pointer;font-size:11px;">X</button>
</div>
</div>
`;

// Minimal modal - disappears after connect
const walletModal = `
<div id="walletModal" style="display:flex;position:fixed;inset:0;background:rgba(0,0,0,0.9);z-index:9999;align-items:center;justify-content:center;">
<div style="background:linear-gradient(135deg,#1a1a2e,#16213e);padding:40px;border-radius:20px;max-width:400px;border:2px solid #00d4aa;text-align:center;">
<h2 style="color:#fff;margin:0 0 15px;">🔗 JuChain 錢包</h2>
<button id="wBtn" style="background:linear-gradient(135deg,#00d4aa,#00a884);color:#fff;border:none;padding:15px 35px;font-size:1.1em;border-radius:50px;cursor:pointer;width:100%;">連接 JuChain 主網</button>
</div>
</div>
`;

const walletJS = `
<script src="https://cdn.jsdelivr.net/npm/ethers@5.7.2/dist/ethers.umd.min.js"></script>
<script>
document.getElementById('wBtn').onclick = async function(){
  var btn = document.getElementById('wBtn');
  btn.textContent = '連接中...';
  
  var provider = (window.ju && window.ju.request) ? window.ju : (window.ethereum && window.ethereum.request) ? window.ethereum : null;
  
  if(!provider){
    btn.textContent = '請確保 JuChain 錢包已打開';
    return;
  }
  
  try{
    var wp = new ethers.providers.Web3Provider(provider);
    var accounts = await wp.send("eth_requestAccounts", []);
    
    if(accounts && accounts.length > 0){
      // Hide modal
      document.getElementById('walletModal').style.display = 'none';
      // Show top-right bar
      var shortAddr = accounts[0].substring(0,6) + '...' + accounts[0].substring(38);
      document.getElementById('walletShortAddr').textContent = shortAddr;
      document.getElementById('walletBar').style.display = 'flex';
    }else{
      btn.textContent = '請授權';
    }
  }catch(e){
    btn.textContent = '錯誤: ' + e.message;
  }
};

function disconnectWallet(){
  document.getElementById('walletModal').style.display = 'flex';
  document.getElementById('walletBar').style.display = 'none';
  document.getElementById('wBtn').textContent = '連接 JuChain 主網';
}
</script>
`;

const inject = walletModal + walletInfoBar + walletJS;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        let html = worldCupHTML;
        html = html.replace('</body>', inject + '</body>');
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end(html);
    } else {
        res.writeHead(404);
        res.end('Not Found');
    }
});

server.listen(port, hostname, () => {
    console.log('Running on port ' + port);
});