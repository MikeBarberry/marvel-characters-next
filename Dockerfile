FROM public.ecr.aws/lambda/nodejs:18
COPY ./ ${LAMBDA_TASK_ROOT}/
RUN npm ci --omit=dev 
RUN npm run build
CMD ["lambda.handler"]