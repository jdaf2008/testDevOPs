FROM node:8.6-alpine
MAINTAINER Juan Arias

COPY . .
RUN npm install

EXPOSE 3030
CMD ["npm", "start"]

