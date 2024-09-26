import { proxy } from '../../server/proxy';

const apiProxy = (req, res) => {
  return new Promise((resolve, reject) => {
    req.url = req.url.replace(/^\/api/, '');
    const username = process.env.BASIC_AUTH_USERNAME;
    const password = process.env.BASIC_AUTH_PASSWORD;
    const basicAuth = Buffer.from(`${username}:${password}`).toString('base64');
    req.headers['Authorization'] = `Basic ${basicAuth}`;
    req.headers.cookie = '';
    req.headers['auth-type'] = '';
    proxy.once('error', reject);
    proxy.web(req, res);
  });
};

export default apiProxy;

export const config = {
  api: {
    bodyParser: false,
  },
};
