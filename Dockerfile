# Use official Node.js LTS version
FROM node:20-alpine

# Create app directory
WORKDIR /WanderPhile

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . .

# Expose the port your app runs on
EXPOSE 8080

# Define the command to run your app
CMD [ "npm", "start" ]
