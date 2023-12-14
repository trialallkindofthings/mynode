// 导入所需的模块
const express = require('express');

// 创建 Express 应用
const app = express();
const port = 3000; // 选择要使用的端口号，可以根据需要更改

// 创建一个简单的路由，处理根路径的 GET 请求
app.get('/', (req, res) => {
  res.send('欢迎访问 Node.js Web 服务器！');
});

// 启动服务器，监听所选端口
app.listen(port, () => {
  console.log(`服务器正在运行，访问 http://localhost:${port}`);
});
