# build front-end
FROM node:20-alpine AS frontend

ARG GIT_COMMIT_HASH=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
ARG RELEASE_VERSION=v0.0.0

ENV VITE_GIT_COMMIT_HASH $GIT_COMMIT_HASH
ENV VITE_RELEASE_VERSION $RELEASE_VERSION

RUN npm install pnpm -g

WORKDIR /app

COPY ./package.json /app

COPY ./pnpm-lock.yaml /app

RUN pnpm install

COPY . /app

RUN pnpm run build

# build backend
FROM node:20-alpine as backend

RUN npm install pnpm -g

WORKDIR /app

COPY /api/package.json /app

COPY /api/pnpm-lock.yaml /app

RUN pnpm install

COPY /api /app

RUN pnpm build

# api
FROM node:20-alpine

RUN npm install pnpm -g

WORKDIR /app

COPY /api/package.json /app

COPY /api/pnpm-lock.yaml /app

RUN pnpm install --production && rm -rf /root/.npm /root/.pnpm-store /usr/local/share/.cache /tmp/*

COPY /api /app

COPY --from=frontend /app/dist /app/public

COPY --from=backend /app/build /app/build

EXPOSE 3002

CMD ["sh", "-c", "node --import tsx/esm ./build/index.js"]
