# Docker

Notes from the [DevOps with Docker](https://devopswithdocker.com/) course by the University of Helsinki.

## Part 0

- Why docker => docker combines the application and its dependencies in a imaga that can then be run on any machine that can run docker
- Docker images are files that are built from instructions in "dockerfiles"
- Docker images cannot be changed, but they can be layered
- Docker containers contain what is needed to run an application - they can be started, stopped and interacted with
- The host machine or other docker containers can interact with a container via TCP
- Containers are instances of images

```
# Command cheat sheet

# Run container in detached mode
docker container run -d nginx

# See all containers or images
docker container/image ls

# Stop running container and remove it
docker container stop my-container
docker container rm <id>

# Prune stopped containers or images (dangling or all using a)
docker container/image prune (-a)

# Prune all stopped/unused things, incl. images and build cache objects
docker system prune

# Execute commands inside container
docker container exec <id>
```

- You can use `docker search <name>` to search for images from dockerhub
- You can see for example whether the images are official (reviewed by dockerhub) and if they are automatically built from a repository
- DockerHub isn't the only docker registry - for example Quay can also be used
- Only images from DockerHub are displayed using `docker search` and using images from e.g. Quay requires specifying their host name when pulling

```
docker image pull quay.io/nordstrom/hello-world
```

- Docker images may be tagged using `:<tag>` after their name
- We can tag images locally for our own convenience - this is also a way of renaming images

- If running with the `-i` (interactive, connect STDIN) and `-t` (allocate a pseudo-TTY) flags, you can interact with the container, as seen in this example

```sh
# Start a container in detached mode
docker container run -d -it --name karviainen ubuntu:16.04 sh -c 'echo "Input website:"; read website; echo "Searching.."; sleep 1; curl http://$website;'
# Add curl so we can run the command
docker exec karviainen apt-get update
docker exec karviainen apt-get install -y curl wget
# Attach to that container, it will now receive STDIN
docker container attach karviainen
helsinki.fi
Searching..
<!DOCTYPE HTML PUBLIC "-//IETF//DTD HTML 2.0//EN">
...
```
