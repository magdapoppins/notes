## Speedy EC2 sample deploy for smol hobby projects

- Note: this type of deploy requires manual updating (pulling new versions of the image). One could automate that for example by having a daemon asking if there are new images in a queue.

1. Setup automatic rebuilding and storage of images in an ECR
2. Create an EC2 that has a role that can access that registry (ports 80 and 443 open to the world, 22 open for yer own ip)
3. Connect to the instance, pull the docker image and start it with proper port mappings.
4. For HTTPS:
   - Install caddy (https://caddyserver.com/docs/install)
   - Create a caddyfile that forwards https requests to the host port you have your image mapped to
   - Modify your caddys systemd unit file to use that file
   - Systemctl enable caddy
