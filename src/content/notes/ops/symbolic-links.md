# What are symlinks and how are they used?

Symlinks are a type of pointers or links between files. Imagine we have a case where we have a file at /users/sample/x.txt and we want to e.g. use it as one of the extension files in our program at /users/sample/myapp/extensions (this would be a folder containing similar txt files). You would then create a symlink, or a new file in /users/sample/myapp/extensions that contains the path to the wanted file:

"/users/sample/x.txt"

This looks like the following:
/users/sample/myapp/extensions/x.txt --> /users/sample/x.txt

Where the first file is called the symlink. To get rid of the symlink, you would remove the symlink file (`rm /users/sample/myapp/extensions/x.txt`). If you would instead remove the file that the symlink points to, it would leave a broken symlink in your system - not good!

Why would one do this? Programs that take symlinks into account can follow the link and read the file the link points at as a replacement to the original file. In our example, the program `myapp` could then treat x.txt as if it were an installed extension file in the app directory. This is how e.g. jupyter notebook extensions work.
