
# 一键部署（推荐）

------------------

## 部署

***环境要求***

- Linux系统（最低配置2核8G）(推荐Ubuntu 22或以上)（旧版本请使用其他方式安装）

- [Docker](./docker-install)


***运行脚本***


- 脚本安装
```shell
curl -sSL https://gitee.com/TangSengDaoDao/TangSengDaoDaoCli/raw/main/install.sh | sudo bash
```

- 安装唐僧叨叨服务端
```shell
sudo tsdd install --ip xx.xx.xx.xx
```

`xx.xx.xx.xx`为服务器IP地址（外网地址）

- 启动唐僧叨叨服务端
```shell
sudo tsdd start
```

- 检查唐僧叨叨服务状态

```shell
sudo tsdd doctor
```

更多命令查看：https://github.com/TangSengDaoDao/TangSengDaoDaoCli

API地址： http://xx.xx.xx.xx:8090/v1


## 说明

一键安装程序其实就是采用的docker compose的部署方式，只是所有的关联配置程序都自动配置好了。

所有的相关配置和数据都在 `~/tsdd/` 这个目录下

## 需要开放的端口

| 端口 | 说明 |
| --- | --- |
| 8090 | API端口 |
| 82 | Web端口 |
| 5100 | TCP长连接端口 |
| 5200 | websocket端口 |
| 9000 | minio文件服务端口 |
