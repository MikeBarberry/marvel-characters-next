FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY ./ ./
ENV NODE_ENV=production
RUN npm ci --omit=dev 
RUN npm run build
CMD ["lambda.handler"]