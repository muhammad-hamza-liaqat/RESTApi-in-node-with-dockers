# Docker Commands

# Log in to Docker Hub
   ```bash
docker login
   ```

# Build the Docker image
docker-compose build

# Tag the image (if needed)
docker tag local-image-name yourusername/your-image-name:tag

# Push the image to Docker Hub
docker push yourusername/your-image-name:tag

# Pull an image from Docker Hub
docker pull yourusername/your-image-name:tag

# Example: Pull a specific image
docker pull muhammadhamza4099558/node-on-dockers:latest

# List all images on your local machine
docker images

# Run the image in a container
docker run -d -p 9000:9000 yourusername/your-image-name:tag

# Example: Run a specific image
docker run -d -p 9000:9000 muhammadhamza4099558/node-on-dockers:latest

# View all running containers
docker ps

# View logs of a running container
docker logs [container_id]

# Stop a running container
docker stop [container_id]

# Remove a stopped container
docker rm [container_id]
