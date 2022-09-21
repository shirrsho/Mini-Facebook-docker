# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications

TCP and UDP port 7946 for communication among nodes

UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init

Swarm initialized: current node (zucpyunltk8upz1pxgtkpbadk) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-361al6w8vd7tb2h9lyqfowfb3rwb9jkcflrb7410pdvnd6w7yw-cu99hqhfopu4u6f7ruzvjik4v 10.100.104.39:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

