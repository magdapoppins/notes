# Genral notes about Python programming

## Pip 
Install package in editable (development) mode: `pip install -e .`
This allows the package to be used directly from the directory by linking the package to it's original location, so that any changes you make locally reflect into your environment.

You can sync a venv with a requirements file by `pip-sync requirements.txt` to e.g. remove any packages that exist in the venv but not in the requirements file.

## .in files


## What kind of language is Python?
- interpreted, i.e. translated to bytecode during runtime (and hence a bit slower than languages that are compiled to machine code)
- paralellism in one python process does not exist: in the case of multithreading, the GIL or global interpreter lock locks the values of each thread while the other ones have their turns
- the need for the GIL arises from that a single python process shares the same space in memory - if the GIL wouldn't lock the values of a thread, the other threads could go in and modify them and that would lead to a whole lot of funky outcomes
- paralellism in python is achieved through the use of subprocesses, which are literally new processes. One process can have multiple threads that it alternates between.

## Multithreading and paralellism
When is multithreading useful?

## Async and await - running parallel requests
If you need to eg. make 100 fetches in a loop, what way would you do it and why?

## Generators

## Decorators

