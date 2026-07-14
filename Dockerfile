# syntax=docker/dockerfile:1

# ── Stage 1: build the static site ───────────────────────────────
FROM node:20-alpine AS build
WORKDIR /app

# Install dependencies first (cached unless lockfile changes)
COPY package.json package-lock.json ./
RUN npm ci

# Build
COPY . .
RUN npm run build

# ── Stage 2: serve with nginx ────────────────────────────────────
FROM nginx:1.27-alpine AS runtime

# SPA-aware nginx config (history fallback, gzip, asset caching)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Static build output
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

# Basic container healthcheck
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget -qO- http://localhost/ >/dev/null 2>&1 || exit 1

CMD ["nginx", "-g", "daemon off;"]
