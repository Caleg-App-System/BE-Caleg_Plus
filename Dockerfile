FROM node:19.9.0-alpine3.17
RUN apk add --no-cache libc6-compat
RUN mkdir -p app/node_modules && chown -R node:node /app
WORKDIR /app

COPY package*.json ./
RUN chown -R node:node /app
USER node

RUN npm install
WORKDIR /app
# COPY --chown=node:node . .
COPY . .
# RUN npm run build
# USER root
# RUN chown -R node:node /app/node_modules/.cache
EXPOSE 3001

CMD ["./node_modules/.bin/nodemon", "app.js"]
# CMD ["npm", "start"]