# Helpful `kubectl` commands

- You can create new kubernetes objects using `kubectl apply -f myfile.yml`
- If you want the yaml to live directly inside the (bash) script file, you can use heredoc:

```sh
cat << EOF | kubectl apply -f -
api: v0
...
EOF
```

- Add a shebang in the beginning of a sh file to signify which shell it should be run with (e.g. `#!/bin/bash/`)

```sh
# See all pods and their states
kubectl get pods --all-namespaces
# See details of a pod in a specified namespace (defaults to only default)
kubectl describe -n mynamespace pod/mypod
kubectl describe -n mynamespace configmap/myconfigmap
# For each project you create locally with e.g. kind or k3s, you can store
# it's kubeconfig in a specific place
```
