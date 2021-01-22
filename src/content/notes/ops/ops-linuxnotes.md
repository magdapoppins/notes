## Command memos
`journalctl` logs (uses less as a pager, space = next page, G = go to end, / = search)
`ps aux | grep <myservice>` look for process
`docker pull >stdout.txt 2>stderr.txt` output the stderr and stdout in txt files

## Systemd and systemctl
- systemd unit files are used to configure commands that are automatically started when the machine is (re)started
- unit files live under /etc/systemd/system/ and are named *.service
Here is an example:
```
[Unit]
Description=asdjasdlashd
After=services-that-need-to-start-before
Requires=services-that-need-to-be-active-before

[Service]
Restart=always
WorkingDirectory=/your-dir
ExecStart=the command you want to run

[Install]
WantedBy=multi-user.target
```
