# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init --advertise-addr 10.100.104.20
Swarm initialized: current node (lukd9sbrim4bcnh3f7mrgx7fk) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-43u43dan8b1f5802d27l81rle6kfrdoqrxo1pej4s2jz6t6xhu-1hdix0ypho8hihsldapeqs6l0 10.100.104.20:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.


