const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/compensation', createProxyMiddleware({
  target: `http://127.0.0.1:${process.env.COMPENSATION}`,
  changeOrigin: true
}));

app.use('/playground', createProxyMiddleware({
  target: `http://127.0.0.1:${process.env.PLAYGROUND}`,
  changeOrigin: true
}));

app.get('/', (req, res) => {
    res.send('Welcome to the reverse proxy server!');
});

app.listen(3000, () => {
  console.log('Reverse proxy running on port 3000');
});