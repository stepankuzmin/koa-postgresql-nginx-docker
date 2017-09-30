FROM node:alpine
LABEL maintainer="Stepan Kuzmin <to.stepan.kuzmin@gmail.com>"

ENV NODE_ENV=production
ENV NPM_CONFIG_COLOR=false
ENV NPM_CONFIG_LOGLEVEL=warn

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN yarn
COPY . /usr/src/app

RUN yarn global add pm2

EXPOSE 4000
ENTRYPOINT ["pm2-docker", "start", "--auto-exit", "--env", "production", "index.js", "--"]
# ENTRYPOINT ["pm2-docker", "start", "-i", "2", "--auto-exit", "--env", "production", "index.js", "--"]