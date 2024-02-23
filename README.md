# Docker Task

### Task

For a sample static web page: Write a Dockerfile, build a Docker image, push it to the Docker Hub, and provide instructions on how to run the image.  

## Usage

- Ensure you have docker properly configured on your computer by cheking its version if not kindly refer to the [Docker documentation](https://docs.docker.com/desktop/)  

```cmd
docker --version
```

- pull the docker image from docker hub by running this command  

```cmd
docker pull githubarj/docker-task:1.0
```

- verify you have correctly pulled it by cheking installed images through the command

```cmd
docker images
```

- Run the image to create a container, replace cont-name with name of container you woud prefer and port number with your preferred port number

```cmd
docker run -d --name cont-name -p 5173:80 githubarj/docker-task:1.0
```

- Open your browser and go `localhost:5173`  and you should see something similar to the screenshot below:  

![pricing card](/src/assets/fecsd.png)
