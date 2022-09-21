# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications

TCP and UDP port 7946 for communication among nodes

UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init

Swarm initialized: current node (azhpabbp22mubi80v1dv7mkl2) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-01s88aszqyyzh9zr1gexmb7jfjwto6ps3z2yzy4w5ajz71fprg-59s1athyeiibxb4lknb1z37ml 10.100.104.39:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.

