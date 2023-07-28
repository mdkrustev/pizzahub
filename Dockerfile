# Use the official Node.js image as the base image (latest version)
FROM node:latest

# Set the working directory in the container
WORKDIR /src

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port that the Node.js application will run on
EXPOSE 3000

# Command to start the Node.js application
CMD ["npm", "start"]
