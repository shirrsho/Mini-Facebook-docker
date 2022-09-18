# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init --advertise-addr 10.100.104.20
Swarm initialized: current node (nxzupdokiqgoxp4bfirmdz5jq) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-1mar12g6hvvglultieu34how1o49x90ykxghrglrnrnoaxc534-2435nuikytu6s3qdtn7mjfh5f 10.100.104.20:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
