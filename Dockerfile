FROM node:23-alpine AS builder

WORKDIR /app

COPY package.json package.json

RUN npm install

COPY . .

RUN npm run build

FROM nginx:1.25-alpine AS runner

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf