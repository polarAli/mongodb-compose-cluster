## Usage
- Generate key for mongo keyFile auth between nodes
  ```bash
  openssl rand -base64 756 > configs/mongodb-keyfile
  chmod 400 configs/mongodb-keyfile
  ```
- run the docker-compose command to start the mongodb containers
  ```bash
  docker-compose up -d
  ```
- execute `rs-initiate.sh` to initiate the replica set
  ```bash
  docker exec -it mongo1 /scripts/rs-init.sh
  ```
- The WebUI should be available at `8081` port