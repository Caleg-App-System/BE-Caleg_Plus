FROM node:19.9.0-alpine3.17
RUN apk add --no-cache \
        sudo \
        curl \
        build-base \
        g++ \
        libpng \
        libpng-dev \
        jpeg-dev \
        pango-dev \
        cairo-dev \
        giflib-dev \
        ;
RUN mkdir -p app/node_modules \
    && chown -R node:node /app \
    && cd /app/node_modules \
    && npm i canvas
WORKDIR /app

COPY package*.json ./
RUN chown -R node:node /app
USER node

RUN npm install
WORKDIR /app
COPY . .
EXPOSE 3001

CMD ["./node_modules/.bin/nodemon", "app.js"]