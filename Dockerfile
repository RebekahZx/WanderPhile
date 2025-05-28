# Use official Node.js image
FROM node:18

# Set working directory
WORKDIR /major_project

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Expose port  for the app
EXPOSE 8080

# Run the application
CMD ["npm", "start"]
