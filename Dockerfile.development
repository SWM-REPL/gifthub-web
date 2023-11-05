FROM node:21-alpine
WORKDIR /app

RUN apk add --no-cache libc6-compat git
COPY package.json yarn.lock ./
RUN \
    corepack enable && \
    yarn set version stable && \
    yarn

COPY . .
CMD ["yarn", "run", "dev"]