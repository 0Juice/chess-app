FROM node:24-alpine3.21

COPY package*.json ./

RUN npm ci

RUN npx next telemetry disable

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]