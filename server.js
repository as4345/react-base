// 用于服务器部署
const express = require('express');
const path = require('path');
const compression = require('compression')
const app = express();
// 开启gzip
app.use(compression());
const port = 8001

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);
console.log('启动服务器成功~listen:' + port)