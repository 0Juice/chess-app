# --- Stage 1: Build ---
FROM node:24 AS builder

WORKDIR /app

# Copy only package files first for better cache use
COPY package*.json ./

# Install all deps (including Tailwind in dev)
RUN npm ci

RUN npx next telemetry disable

# Copy source code
COPY . .

# Build the app
RUN npm run build

# --- Stage 2: Runtime ---
FROM node:24-alpine AS runner

WORKDIR /app

# Copy only production deps
COPY package*.json ./
RUN npm ci --omit=dev

# Copy built app from builder
COPY --from=builder /app/.next .next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
