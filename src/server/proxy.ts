import httpProxy from 'http-proxy';

export const proxy = httpProxy.createProxyServer({
  target: process.env.API_URL,
  autoRewrite: false,
  changeOrigin: true,
});
