# Virtualization
Virtualition allows applications to run agnostic to the underlying systems by creating a virtual layer of hardware, operating system (OS) or storage. 

## Containers
The most common approach to virtualization in modern software development is OS-level virtualization, which is most commonly done by containers. In this approach, software is shipped along with its container environment and ran on top of the kernel of the physical hardwares OS.

Contra to VMs, containers share their host machines kernel and (usually) its binaries and libraries too. Staring a container takes seconds and only MBs of memory whereas VMs take minutes and take up GBs. 

## Serverless

## Virtual Machines
Virtual machines solve a different set of problems than containers - a virtual machine consists of a virtual machine hypervisor, OS and application, whereas a container sits directly on the host OS with no need for the hypervisor. What, then, is a hypervisor? 

The job of a hypervisor, or virtual machne monitor, is to create and run VMs. It sits between the virtual machine and virtual machine. Within each VM runs a unique OS. 

## Bare metal
