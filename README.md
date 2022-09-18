# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


Swarm initialized: current node (ufrry4t1qu5o0pj9g77h4px39) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-0xiw17242i1r4vmqg3qhdzlr3k4grzfd69r9qi2zuauhtxpjhc-92vnh505bdsl9k3xjcq3psj6k 10.100.104.20:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.
