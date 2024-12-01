# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application files
COPY . .

# Expose the application port
EXPOSE 5001

# Command to start the server
CMD ["node", "index.js"]
