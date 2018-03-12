FROM node:latest

MAINTAINER Node.js 웹페이지

RUN npm install -g pm2 node-gyp

ENV NODE_ENV development
#ENV NODE_ENV production

# 앱 디렉토리 생성
WORKDIR /usr/src/app

# 앱 의존성 설치
#COPY package*.json /usr/src/app/

#RUN npm install

# 앱 소스 추가
#COPY . /usr/src/app


EXPOSE 3000
CMD [ "pm2-docker", "pm2.json" ]
