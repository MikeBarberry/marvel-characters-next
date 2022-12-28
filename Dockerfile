# This config won't work locally because I prefix static assests with main to accomodate the stage name in production. Running next build automatically sets the NODE_ENV to production
FROM public.ecr.aws/lambda/nodejs:18
COPY ./ ${LAMBDA_TASK_ROOT}/
ENV NODE_ENV=production
RUN npm ci --omit=dev 
RUN npm run build
CMD ["lambda.handler"]