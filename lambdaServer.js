const path = require('path');

console.log(process.env.NODE_ENV);

const NextServer = require('next/dist/server/next-server').default;
const { config } = require('./.next/required-server-files.json');
const express = require('express');

// One and only next.js server
const server = new NextServer({
  dev: false,
  dir: __dirname,
  conf: {
    ...config,
  },
  destDir: './.next',
});

// One and only next.js handler
const handler = server.getRequestHandler();

// Here is an example of how to use a custom server while still wrapping the functionality of Next.js
const createServer = () => {
  const server = express();
  const router = express.Router();
  server.set('trust proxy', true);

  router.use(express.urlencoded({ extended: true }));
  router.use(express.text());
  router.use(express.json());
  router.use('/_next', express.static(path.join(__dirname, '/.next')));

  // Express paths match in order of definition so next.js should always be last.
  router.get('/example', async (req, res) => {
    res.send('Success');
  });

  router.all('/*', async (req, res) => {
    // next.js handler
    await handler(req, res);
  });
  server.use('/', router);
  return server;
};

const serverInstance = createServer();
exports.server = serverInstance;

if (!process.env.LAMBDA) {
  const port = 3001;
  serverInstance.listen(port, (err) => {
    if (err) throw err;
    // eslint-disable-next-line
    console.log(`> Ready on http://localhost:${port}`);
  });
}
