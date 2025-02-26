# Use the official Node.js image from the Docker Hub
FROM node:18

# Set the working directory
WORKDIR /app/my-app

# Copy the package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the frontend code
COPY .. .

# Expose the port Vite serves on
EXPOSE 5173

# Start the Vite dev server
CMD ["npm", "run", "dev"]
