# Use Node.js base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json .
RUN npm install

# Copy application files
COPY ./src ./src

# Expose the application port
EXPOSE 3000

# Command to start the React development server
CMD ["npm", "start"]

