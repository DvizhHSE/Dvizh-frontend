FROM node:23-alpine

RUN mkdir /frontend

WORKDIR /frontend

COPY package.json package.json

RUN npm install

COPY . .

CMD ["npm", "run", "dev", "--", "--host"]
