FROM public.ecr.aws/lambda/nodejs:18
COPY ./ ${LAMBDA_TASK_ROOT}/
RUN npm install 
RUN npn run build 
CMD ["app.handler"]