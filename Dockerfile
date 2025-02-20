FROM node:21
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . /app
EXPOSE 3000
RUN npm run setup-db
CMD ["node", "index.js"]