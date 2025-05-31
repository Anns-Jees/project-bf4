# Use official Node.js image as base
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies (production only)
RUN npm install --production

# Copy rest of the app files
COPY . .

# Expose the port your app runs on
EXPOSE 3000

# Start your app
CMD ["node", "index.js"]
