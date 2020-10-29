FROM node:latest

WORKDIR /app

COPY . .

RUN cd /app \
	npm install \
	npm run build

EXPOSE 3000

CMD [ "npm", "start" ]
