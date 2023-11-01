FROM node:alpine AS base
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci --only=production

FROM base AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000

ENV PORT 3000

ENV HOSTNAME "0.0.0.0"

CMD ["npm", "start"]