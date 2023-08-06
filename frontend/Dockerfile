# Use Node.js image
FROM node:18.7.0-alpine3.16

# Create app directory
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Expose port 3001
EXPOSE 3001

# vite build
CMD ["/bin/sh", "-c", "yarn && yarn dev"]
