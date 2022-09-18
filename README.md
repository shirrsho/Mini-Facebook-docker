# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init --advertise-addr 172.17.0.1
Swarm initialized: current node (io6mtzo9wekqmjyijydzguc83) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-458h2rgcyrt5xpycsxho7gpl8g386ckopkajoipp2ou184w4to-cq0ojduv2s4z04nwxb12x16je 172.17.0.1:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.


