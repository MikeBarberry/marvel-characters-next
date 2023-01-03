const { server } = require('./lambdaServer');
const serverlessExpress = require('@vendia/serverless-express');

// AWS API Gateway Handler
exports.handler = async (event, context) => {
  const expressServer = serverlessExpress({ app: server });
  return expressServer(event, context);
};
