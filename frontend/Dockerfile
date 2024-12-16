# Use node image for base image
FROM node:20 as base

# Set working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json to leverage Docker cache
COPY package.json package-lock.json ./

# Install all dependencies (including devDependencies like Vite)
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port your app will run on (default for Vite is 3000)
EXPOSE 3000

# Run the app using the dev script
CMD ["npm", "run", "dev"]
