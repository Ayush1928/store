FROM node:18.12.1

WORKDIR /Backend

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["node", "src/index.js"]  
