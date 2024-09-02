# Easy way to push, pull and use an image

```bash
docker login
```


```bash
docker build -t docker-hub-username/meaningful-image-name:tag .
```

```bash
docker images
```

```bash
docker push docker-hub-username/meaningful-image-name:tag
```

```bash
docker pull muhammadhamza4099558/node-with-dockers:v1
```

```bash
docker ps
```

```bash
docker run -d -p 9000:9000 muhammadhamza4099558/node-with-dockers:v1
```
```bash
docker logs [container id]
```






# Docker Commands Cheat Sheet

This guide provides a list of commonly used Docker commands, including login, building, tagging, pushing, pulling, and managing Docker images and containers.

## Docker Login

Log in to Docker Hub:

```bash
docker login
```

## Building and Managing Docker Images

### Build the Docker Image

Use `docker-compose` to build a Docker image:

```bash
docker-compose build
```

### Tag the Image

Tag a local image with a new name (if needed):

```bash
docker tag local-image-name yourusername/your-image-name:tag
```

## Pushing and Pulling Docker Images

### Push the Image to Docker Hub

Push your image to Docker Hub:

```bash
docker push yourusername/your-image-name:tag
```

### Pull an Image from Docker Hub

Pull an image from Docker Hub:

```bash
docker pull yourusername/your-image-name:tag
```

#### Example: Pull a Specific Image

```bash
docker pull muhammadhamza4099558/node-on-dockers:latest
```

## Managing Docker Images

### List All Images on Your Local Machine

List all Docker images available locally:

```bash
docker images
```

## Running Docker Containers

### Run the Image in a Container

Run a Docker image in a new container, mapping a port:

```bash
docker run -d -p 9000:9000 yourusername/your-image-name:tag
```

#### Example: Run a Specific Image

```bash
docker run -d -p 9000:9000 muhammadhamza4099558/node-on-dockers:latest
```

## Viewing and Managing Containers

### View All Running Containers

List all running containers:

```bash
docker ps
```

### View Logs of a Running Container

View logs from a running container using its ID:

```bash
docker logs [container_id]
```

### Stop a Running Container

Stop a container using its ID:

```bash
docker stop [container_id]
```

### Remove a Stopped Container

Remove a stopped container using its ID:

```bash
docker rm [container_id]
```

