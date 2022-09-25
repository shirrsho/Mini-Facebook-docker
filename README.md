# Mini-Facebook-docker

Open protocols and ports between the hosts
The following ports must be available. On some systems, these ports are open by default.

TCP port 2377 for cluster management communications

TCP and UDP port 7946 for communication among nodes

UDP port 4789 for overlay network traffic

to open port2377/tcp: firewall-cmd --add-port 2377/tcp


sudo docker swarm init
Swarm initialized: current node (u2v5259iq1vii0629rjm7fyxj) is now a manager.

To add a worker to this swarm, run the following command:

    docker swarm join --token SWMTKN-1-3yy68r0wa343b9dc7rs70hjgwfblpbi0q7xwtwt5rs3fhsr6bu-833jw39xltsrqww21dwo27gpb 10.100.100.176:2377

To add a manager to this swarm, run 'docker swarm join-token manager' and follow the instructions.



