
# 一键部署（推荐）

------------------

***环境要求***

- Linux系统（最低配置2核8G）

- Docker


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




