# Small, useful snippets

Are there any processes named "x"? `ps aux | grep x`  
What process are listening on what ports? `sudo lsof -i -P | grep LISTEN`  
Create a file of given size `truncate -s 5M myfile.txt`
Copy a file over ssh `scp user@something-hello.region.compute.amazonaws.com:tiedosto.txt .`
