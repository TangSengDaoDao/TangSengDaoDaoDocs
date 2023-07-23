
# Docker Compose方式部署

------------------

***环境要求***

- Linux系统（最低配置2核8G）

- Docker

- Docker Compose


1. 创建安装目录
  
```shell

sudo mkdir -p ~/tsdd

cd ~/tsdd

```

2. 下载docker-compose.yml文件

```shell

curl -sSL https://gitee.com/TangSengDaoDao/TangSengDaoDaoServer/raw/main/docker/tsdd/docker-compose.yaml -o docker-compose.yaml

```

3. 基础设施参数配置

- 创建 `.env`文件

- 复制如下内容到 `.env`文件中


```shell

# minio
MINIO_ROOT_USER: minio   # minio的用户名
MINIO_ROOT_PASSWORD: "" # minio的密码，随机字符串即可
MINIO_SERVER_URL: ""  # MINIO_SERVER_URL
MINIO_BROWSER_REDIRECT_URL: "" # MINIO_BROWSER_REDIRECT_URL

# mysql
MYSQL_ROOT_PASSWORD: ""  # 数据库的密码 随机字符串即可
MYSQL_DATABASE: im # 数据名称 建议用默认的im

## web
API_URL: "" # API地址 例如：http://xxx.xxx.x.xx:8090/  xxx.xxx.x.xx 为服务器IP地址

```

4. 悟空IM参数配置

- 创建配置目录

```shell

sudo mkdir -p ~/tsdd/configs

```

- 下载`悟空IM`配置文件并保存到 `configs/wk.yaml` 文件中

```shell

curl -sSL https://gitee.com/TangSengDaoDao/TangSengDaoDaoServer/raw/main/docker/tsdd/configs/wk.yaml -o configs/wk.yaml

```

- 修改 `configs/wk.yaml` 文件中的 `external.ip`配置

```yaml
...
external:
  ip: "#EXTERNAL_IP#" # #EXTERNAL_IP# 改为服务器的IP地址

...

```

5. 唐僧叨叨参数配置

- 下载`唐僧叨叨`配置文件并保存到`configs/tsdd.yaml`

```shell

curl -sSL https://gitee.com/TangSengDaoDao/TangSengDaoDaoServer/raw/main/docker/tsdd/configs/tsdd.yaml -o configs/tsdd.yaml

```

- 修改 `configs/tsdd.yaml` 文件中的对应的配置

```yaml
...

db:   # #MYSQL_ROOT_PASSWORD# 部分修改为上面配置的数据库密码
  mysqlAddr: "root:#MYSQL_ROOT_PASSWORD#@tcp(mysql)/im?charset=utf8mb4&parseTime=true&loc=Local" 
external:
  ip: "#EXTERNAL_IP#"   # #EXTERNAL_IP# 改为服务器的IP地址
fileService: "minio" # 文件服务类型，默认为minio
minio:
  accessKeyID: "minio"
  secretAccessKey: "#MINIO_ROOT_PASSWORD#"  # #MINIO_ROOT_PASSWORD# 修改为上面配置的minio密码
smsCode: "123456"  # 测试短信验证码， 如果不为空，则短信验证码为该值 （如果需要配置真实的短信请查看完整配置里的短信配置）
...  
```


## 需要开放的端口

| 端口 | 说明 |
| --- | --- |
| 8090 | API端口 |
| 82 | Web端口 |
| 5100 | TCP长连接端口 |
| 5200 | websocket端口 |
| 9000 | minio文件服务端口 |