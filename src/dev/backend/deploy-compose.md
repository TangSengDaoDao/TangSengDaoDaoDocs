
# Docker Compose方式部署


## 环境要求

- Linux系统（建议配置2核8G）

- Docker

- Docker Compose


## 创建安装目录
  
```shell

sudo mkdir -p ~/tsdd

cd ~/tsdd

```

## 复制以下内容到 新建的`docker-compose.yaml` 文件中

```shell
vi docker-compose.yaml
```

```yaml

version: '3.1'
services:
  wukongim:  # 唐僧叨叨通讯服务（悟空IM）
    image: registry.cn-shanghai.aliyuncs.com/wukongim/wukongim:v1.2
    restart: always
    ports:
      # - "5001:5001" # http api端口（业务端调用，仅限内网开放） 
      - "5100:5100"  # tcp长连接端口（外网开放）
      - "5200:5200" # websocket端口（外网开放）
      - "5300:5300" # 监控端口
    volumes:
      - ./wukongim:/root/wukongim
    environment:
      - WK_MODE=${WK_MODE}
      - WK_EXTERNAL_IP=${EXTERNAL_IP}
      - WK_CONVERSATION_ON=true
      - WK_WEBHOOK_GRPCADDR=tangsengdaodaoserver:6979
      - WK_DATASOURCE_ADDR=http://tangsengdaodaoserver:8090/v1/datasource
      - WK_DATASOURCE_CHANNELINFOON=true
      - WK_TOKENAUTHON=true  
  tangsengdaodaoserver:  # 唐僧叨叨的业务服务
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaoserver:latest
    restart: always
    command: "api"
    healthcheck:
      test: "wget -q -Y off -O /dev/null http://localhost:8090/v1/ping > /dev/null 2>&1"
      interval: 10s
      timeout: 10s
      retries: 3
    depends_on:
       - redis
       - mysql
       - wukongim
    ports:
      - "8090:8090"
    volumes:
      - ./tsdd:/home/tsdddata
      - ./tsdd/configs:/home/configs  # 如果需要使用yaml配置，在当前目录下创建tsdd/configs目录，并新建tsdd.yaml配置文件（注意：配置生效优先级environment高于配置文件，如果你配置了environment将覆盖tsdd.yaml的配置项）
    environment:
      - TS_MODE=${TS_MODE}
      - TS_WUKONGIM_APIURL=http://wukongim:5001
      - TS_DB_MYSQLADDR=root:${MYSQL_ROOT_PASSWORD}@tcp(mysql)/${MYSQL_DATABASE}?charset=utf8mb4&parseTime=true&loc=Local
      - TS_DB_REDISADDR=redis:6379
      - TS_EXTERNAL_IP=${EXTERNAL_IP}
      - TS_SMSCODE=${TS_SMSCODE}
      - TS_FILESERVICE=${TS_FILESERVICE}
      - TS_MINIO_ACCESSKEYID=${MINIO_ROOT_USER}
      - TS_MINIO_SECRETACCESSKEY=${MINIO_ROOT_PASSWORD}
      - TS_AVATAR_DEFAULTBASEURL=https://api.multiavatar.com/{avatar}.png
      - TS_ADMINPWD=${TS_ADMINPWD}
  tangsengdaodaoweb:  # 唐僧叨叨的web服务
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaoweb:latest
    restart: always
    environment:
      - API_URL=http://${EXTERNAL_IP}:8090/
    ports:
      - "82:80" 
  tangsengdaodaomanager:  # 唐僧叨叨的后台管理系统
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaomanager:latest
    restart: always
    environment:
      - API_URL=http://${EXTERNAL_IP}:8090/
    ports:
      - "83:80"    
  minio: # minio文件管理服务
    image: minio/minio:RELEASE.2023-07-18T17-49-40Z # use a remote image
    expose:
      - "9000"
      - "9001"
    command: "server /data --console-address ':9001'"
    ports:
      - "9000:9000"
      - "9001:9001"
    environment:
      - MINIO_ROOT_USER=${MINIO_ROOT_USER}
      - MINIO_ROOT_PASSWORD=${MINIO_ROOT_PASSWORD}
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:9000/minio/health/live"]
      interval: 30s
      timeout: 20s
      retries: 3
    volumes:
      - ./miniodata:/data    
  mysql:  # mysql数据库
    image: mysql:8.0.33
    command: --default-authentication-plugin=mysql_native_password
    healthcheck:
      test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"]
    environment:
      - TZ=Asia/Shanghai
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=${MYSQL_DATABASE}
    volumes:
      - ./mysqldata:/var/lib/mysql                    
  redis:  # redis
    image: redis:7.2.3
    restart: always
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 1s
      timeout: 3s
      retries: 30
  adminer:  # mysql web管理工具 调试用，为了安全生产不要打开
   image: adminer:latest
   ports:
     - 8306:8080     


```

## 配置参数

- 创建 `.env`文件
```shell

vi .env

```

- 复制如下内容到 `.env`文件中


```shell

# Common config

# The IP address of the server.
EXTERNAL_IP=

# MYSQL Config

 # The password of the root user of the mysql database
MYSQL_ROOT_PASSWORD=
# The name of the mysql database
MYSQL_DATABASE=im

# Minio Config

# The access key ID of the minio file service
MINIO_ROOT_USER=minio
# The secret access key of the minio file service
MINIO_ROOT_PASSWORD=

# WuKongIM Config

# debug or release
WK_MODE=debug

# TangSengDaoDao Config

# File service type, default is minio
TS_FILESERVICE=minio
# debug or release
TS_MODE=debug
# The SMS code for testing, if it is not empty, the SMS code will be this value (If you need to configure real SMS, please refer to the SMS configuration in the complete configuration)
TS_SMSCODE=123456

# superAdmin password
TS_ADMINPWD=


```

#### .env文件内，必须修改的参数

- EXTERNAL_IP：服务器的对外IP地址

- MYSQL_ROOT_PASSWORD: mysql数据库的root用户密码，可随机填写

- MINIO_ROOT_PASSWORD： minio 文件服务的密码，可随机填写(至少8位)

- TS_ADMINPWD： 唐僧叨叨后台管理系统的管理员密码,用户名为 superAdmin，可随机填写(至少8位)


`TS_SMSCODE为手机注册默认的短信验证码`

## 启动

```shell

docker-compose up -d （新版本是 docker compose up -d）

```


## 端口说明

[端口说明](./port)