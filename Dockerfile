# FROM node:14.15.0-alpine3.12 as builder

# WORKDIR /app

# COPY . .

# RUN yarn install \
#   --prefer-offline \
#   --frozen-lockfile \
#   --non-interactive \
#   --staging=false

# RUN yarn build

# RUN rm -rf node_modules && \
#   NODE_ENV=staging yarn install \
#   --prefer-offline \
#   --pure-lockfile \
#   --non-interactive \
#   --staging=true

# FROM node:14.15.0-alpine3.12

# WORKDIR /app

# COPY --from=builder /app  .

# ENV HOST 0.0.0.0
# EXPOSE 80

# CMD [ "yarn", "start" ]

FROM node:14.15.0-alpine3.12

WORKDIR /app

COPY package.json .
COPY yarn.lock .

RUN yarn install
RUN yarn build

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

CMD [ "yarn", "start" ]