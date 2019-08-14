# build stage
FROM node:11-alpine as build
WORKDIR /app
COPY package.json ./
RUN yarn install
COPY . .
RUN yarn build

# production stage
FROM node:11-alpine as production
WORKDIR /app
COPY --from=build /app/dist ./
CMD ["node", "index.js"]