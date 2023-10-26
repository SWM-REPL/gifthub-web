FROM node:18
WORKDIR /app
COPY package.json yarn.lock ./*.yml ./*.yaml ./*.config.js ./*.json ./
COPY ./.yarn/releases ./.yarn/releases
RUN yarn
COPY ./src ./src
COPY ./public ./public
CMD ["yarn", "run", "dev"]