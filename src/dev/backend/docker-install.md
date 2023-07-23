
# Docker 安装

# Ubuntu

## 卸载系统原有的docker

```shell

for pkg in docker.io docker-doc docker-compose podman-docker containerd runc; do sudo apt-get remove $pkg; done

```

## 安装docker的repository

```shell    

sudo apt-get update
sudo apt-get install ca-certificates curl gnupg

```

## 安装官方GPG key

```shell

sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

```


## 设置repository

```shell

echo \
  "deb [arch="$(dpkg --print-architecture)" signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  "$(. /etc/os-release && echo "$VERSION_CODENAME")" stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

```

## 更新包

```shell

sudo apt-get update

```

## 安装最新docker版本

```shell

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

```

## 其他系统 

[查看Docker官方教程](https://docs.docker.com/engine/install/)