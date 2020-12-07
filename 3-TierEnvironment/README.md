# Challenge #1

A 3-tier environment is a common setup. Use a tool of your choosing/familiarity create these resources. Please remember we will not be judged on the outcome but more focusing on the approach, style and reproducibility.

# Code Overview

The code has been written with the help of ARM templates to create a 3-tier application setup where we have developed a web resource group whilst provisioning set of virtual machines both for web and DB servers, virtual networks with subnet/image references.
We have defined separate parameters for the different resources as well.
We've created load balancers resource and configured them with the VMs and NSGs and also have defined scale ups.
Individual tiers are going to have invidual subnets so that traffic can be diverted accordingly.
We have a loadbalancer which is internet facing to secure those so as the web servers won't communicate directly with the DB servers.
Both deployment and parameter templates have been separately attached as ThreetierApp.json and ThreetierApp.parameters.json.
Through parameters template we are basically retriveing the azure vault attributes.
