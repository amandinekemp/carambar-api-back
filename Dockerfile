# Using the Node.js image
FROM node:23

# Define working directory
WORKDIR /app

# Copy all source code
COPY . .

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Expose the port on which the server is running
EXPOSE 3000

# Command to start the application
CMD ["node", "src/server.js"]
