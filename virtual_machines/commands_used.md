# Linux, SSH, and Nginx Commands

This file contains all the commands that were used in the session, please view this file on Github to view the well formatted version.

## Linux Commands

### Change to a folder/directory

```
cd <path to folder>
```

### Create a folder/directory

```
mkdir <folder name>
```

### Delete a folder/directory

```
rmdir <folder name>
```

### Create a file

```
touch <file name>
```

### Delete a file

```
rm <path to file>
```

### Go to Home

```
cd ~
```

### Open file in editor

Please do learn how to use vim from Youtube or any other reliable source before running this command. Very important that you first learn vim before you start using it.

```
vim <file_name>
```

### Symbolic Link

```
sudo ln -s <source_file_name> <target_file_name>
```

## SSH Commands

You'll most probably be running all these commands on your local machine instead of running them on the host machine

### Connect to Virtual Machine

```
ssh -i <private_ssh_key_path> <username>@<ipaddress_of_virtual_machine>
```

### Send file to Virtual Machine

```
scp -i <private_ssh_key_path> <file_name> <username>@<ipaddress>:~/
```

## Nginx Commands

### Installation

```
sudo apt install nginx
```

### Test Nginx

```
sudo nginx -t
```

### Restart Nginx

```
sudo systemctl restart nginx
```

IF STUCK ANYWHERE, FEEL FREE TO REACH OUT TO ME ANYTIME :)
