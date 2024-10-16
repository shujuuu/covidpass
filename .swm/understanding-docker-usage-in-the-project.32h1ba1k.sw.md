---
title: Understanding Docker Usage in the Project
---
This document provides a detailed explanation of how Docker is used in the covidpass repository, focusing on the Dockerfile and docker-compose.yml configuration files.

<SwmSnippet path="/Dockerfile" line="1">

---

# Dockerfile Configuration

The Dockerfile is divided into three stages: dependencies, builder, and runner. In the dependencies stage, necessary packages are installed. In the builder stage, the source code is copied and built. In the runner stage, a production image is created, and the application is run.

```
# Install dependencies only when needed
FROM node:14-alpine AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN yarn install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:14-alpine AS builder
WORKDIR /app
COPY . .
COPY --from=deps /app/node_modules ./node_modules
RUN npm run build

# Production image, copy all the files and run next
FROM node:14-alpine AS runner
WORKDIR /app

ENV NODE_ENV production

```

---

</SwmSnippet>

<SwmSnippet path="/docker-compose.yml" line="1">

---

# docker-compose.yml Configuration

The docker-compose.yml file defines services, networks, and volumes. The services include traefik, covidpass-api, and covidpass. Each service has its own configuration, such as image, environment, ports, labels, and dependencies.

```yaml
version: "3.3"

services:

  traefik:
    image: "traefik:v2.4"
    command:
      #- "--log.level=DEBUG"
      - "--api.insecure=false"
      - "--providers.docker=true"
      - "--providers.docker.exposedbydefault=false"
      - "--entrypoints.web.address=:80"
      - "--entrypoints.websecure.address=:443"
      - "--certificatesresolvers.myresolver.acme.tlschallenge=true"
      - "--certificatesresolvers.myresolver.acme.httpchallenge.entrypoint=web"
      #- "--certificatesresolvers.myresolver.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"
      - "--certificatesresolvers.myresolver.acme.email=marvin.sextro@gmail.com"
      - "--certificatesresolvers.myresolver.acme.storage=/letsencrypt/acme.json"
      - "--entrypoints.web.http.redirections.entryPoint.to=websecure"
      - "--entrypoints.web.http.redirections.entryPoint.scheme=https"
      - "--entrypoints.web.http.redirections.entrypoint.permanent=true"
```

---

</SwmSnippet>

&nbsp;

*This is an auto-generated document by Swimm AI 🌊 and has not yet been verified by a human*

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBY292aWRwYXNzJTNBJTNBc2h1anV1dQ==" repo-name="covidpass"><sup>Powered by [Swimm](/)</sup></SwmMeta>
