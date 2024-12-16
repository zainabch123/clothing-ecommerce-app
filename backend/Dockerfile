# Use a Node.js 20 base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy Prisma schema
COPY prisma ./prisma

# Generate Prisma client
RUN npx prisma generate

# Copy the source code
COPY . .

# Expose port 5000 for the backend server
EXPOSE 4000

# Start the Node.js app
CMD ["npm", "start"]
