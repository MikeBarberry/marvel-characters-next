# This config won't work locally because I prefix static assests with main to accomodate the stage name in production. Running next build automatically sets the NODE_ENV to production
FROM public.ecr.aws/lambda/nodejs:18
WORKDIR ${LAMBDA_TASK_ROOT}
COPY ./ ./
ENV NODE_ENV=production
RUN npm ci --omit=dev 
RUN npm run build
COPY public/ .next/static/media/
COPY public/ .next/standalone/static/media/
RUN ls -a 
RUN ls .next
RUN ls .next/static
RUN ls -R .next/static/media/
RUN ls .next/standalone/static/media
RUN ls .next/standalone

CMD ["lambda.handler"]