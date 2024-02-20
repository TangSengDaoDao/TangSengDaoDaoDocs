# 开发环境搭建

克隆代码

```shell
git clone https://github.com/TangSengDaoDao/TangSengDaoDaoServer.git
```

启动基础环境镜像

`需要安装docker compose`

```shell    

docker-compose -f testenv/docker-compose.yaml up -d

```

运行代码

```shell

go run main.go

```