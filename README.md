## Usage
- run the docker-compose command to start the mongodb containers
  ```bash
  docker-compose up -d
  ```
- execute `rs-initiate.sh` to initiate the replica set
  ```bash
  docker exec -it mongo1 /rs-initiate.sh
  ```
