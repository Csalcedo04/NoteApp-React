FROM node
WORKDIR /app
ADD . /app
RUN npm install
EXPOSE 5173
CMD ["npm", "run", "dev", "--", "--host"]
