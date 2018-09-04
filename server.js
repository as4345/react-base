// 用于服务器部署
const express = require('express');
const https = require('https')
const http = require('http')
const path = require('path');
const compression = require('compression')
const fs = require('fs')
const app = express();
// 开启gzip
app.use(compression());
const port = 8001
const httpsOption = {
  pfx: fs.readFileSync('./https/xxxxxxx.pfx'),
  passphrase: 'xxxxxxxx'
}
const safePort = 8002

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
http.createServer(app).listen(port);
https.createServer(httpsOption, app).listen(safePort)
console.log('启动服务器成功~listen:' + port)
console.log('启动https服务器成功~listen:' + safePort)