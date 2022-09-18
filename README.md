# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications
TCP and UDP port 7946 for communication among nodes
UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm initSwarm initialized: current node (re5b4eboj7j8eu3wsaem7279r) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-1q8pna8ts6p2p2774e11lyuecap0203g3aepa0cfzwsvv4w2fq-5hodp2k1ul7oj791hf71fe2eq 10.100.104.20:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.


