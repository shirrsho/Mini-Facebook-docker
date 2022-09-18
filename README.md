# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init 
Swarm initialized: current node (4bsa949vq0bco1yh95vg9a5t3) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-61p5rk2c5ke5po0tel60o8sib42ky76rytci98qq6yquj00w1y-6lyfp07eqzj9c1o6v93wpe45m 10.100.104.20:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
