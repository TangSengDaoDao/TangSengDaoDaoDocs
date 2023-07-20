FROM node:18.0.0 as builder
WORKDIR /app
RUN curl -o- -L https://yarnpkg.com/install.sh | bash
COPY package.json .
COPY yarn.lock .
# https://registry.npmjs.org/  https://registry.npm.taobao.org
# RUN yarn config set registry https://registry.npm.taobao.org -g
# RUN yarn config set disturl https://npm.taobao.org/dist
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:latest
COPY --from=builder /app/docker-entrypoint.sh /docker-entrypoint2.sh 
COPY --from=builder /app/nginx.conf.template /
COPY --from=builder /app/.vitepress/dist /usr/share/nginx/html
ENTRYPOINT ["sh", "/docker-entrypoint2.sh"]
CMD ["nginx","-g","daemon off;"]