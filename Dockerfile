FROM node

WORKDIR /app
COPY ["package*.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install 
COPY . .
EXPOSE 3000
RUN chown -R node /app
USER node
CMD ["node", "start"]

