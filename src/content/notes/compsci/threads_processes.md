# Threads, processes and paralellism in Python

## Threads or processes? 
- Both are independent sequences of execution

### Threads
- One process can contain multiple threads
- Threads that share a process run in shared memory space
- A thread is an entity within a process that can be scheduled for execution

### Processes
- A process provides all the resources needed to execute a program
- It has a virtual address space, a security context, a unique process id...
- Each process starts with a primary thread, which then can create more threads

(See https://stackoverflow.com/a/19518207)

## Enter Python
- In python, thread safety (or making sure memory doesn't warp in weird ways when multithreading) is achieved by the GIL or global interpreter lock
- The GIL only allows one thread to execute python bytecode at a given time
- https://tenthousandmeters.com/blog/python-behind-the-scenes-13-the-gil-and-its-effects-on-python-multithreading/