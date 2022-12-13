FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8888
ENTRYPOINT ["/bin/sh"]
#CMD ["npm", "start"]
