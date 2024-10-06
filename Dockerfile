# Stage 1: Build the frontend (Next.js app)
FROM node:18.17.0 AS builder

# Set working directory inside the container
WORKDIR /app/frontend

# Copy the package.json and lock file
COPY ./frontend/package.json ./frontend/package-lock.json ./

# Install the dependencies for Next.js
RUN npm install

# Copy the rest of the frontend files to the working directory
COPY ./frontend .

# Build the Next.js app
RUN npm run build

# Stage 2: Set up the Python backend and serve the frontend
FROM python:3.9-slim

# Install Node.js and npm (needed to serve Next.js app)
RUN apt-get update && \
    apt-get install -y curl && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    apt-get install -y supervisor && \
    apt-get clean

# Set the working directory for the backend
WORKDIR /app

# Copy all backend files
COPY . .

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install -r requirements.txt

# Copy the build files from the frontend stage
COPY --from=builder /app/frontend/.next ./.next
COPY --from=builder /app/frontend/public ./public

# Expose ports for both Flask (default 5000) and Next.js (default 3000)
EXPOSE 5000
EXPOSE 3000

# Set environment variables for production mode
ENV NODE_ENV=production

# Copy the supervisor configuration file
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Start supervisor to manage both the Flask app and the Next.js app
CMD ["supervisord", "-n"]
