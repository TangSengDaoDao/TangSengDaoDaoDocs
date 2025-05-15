
# Docker Compose方式部署(推荐)


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
    image: registry.cn-shanghai.aliyuncs.com/wukongim/wukongim:v2
    restart: always
    ports:
      # - "5001:5001" # http api端口（业务端调用，仅限内网开放）
      - "5100:5100"  # tcp长连接端口（外网开放）
      - "5200:5200" # websocket端口（外网开放）
      - "5300:5300" # 监控端口
    volumes:
      - ./wukongim:/root/wukongim
    env_file:
      - .env
    environment:
      - WK_EXTERNAL_IP=${EXTERNAL_IP}
  tangsengdaodaoserver:  # 唐僧叨叨的业务服务
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaoserver:v1.5
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
    env_file:
      - .env
    environment:
      - TS_DB_MYSQLADDR=root:${MYSQL_ROOT_PASSWORD}@tcp(mysql)/${MYSQL_DATABASE}?charset=utf8mb4&parseTime=true&loc=Local
      - TS_EXTERNAL_IP=${EXTERNAL_IP}
      - TS_FILESERVICE=${TS_FILESERVICE}
      - TS_MINIO_ACCESSKEYID=${MINIO_ROOT_USER}
      - TS_MINIO_SECRETACCESSKEY=${MINIO_ROOT_PASSWORD}
  tangsengdaodaoweb:  # 唐僧叨叨的web服务
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaoweb:latest
    restart: always
    environment:
      - API_URL=http://tangsengdaodaoserver:8090/
    ports:
      - "82:80"
    depends_on:
      tangsengdaodaoserver:
        condition: service_healthy      
  tangsengdaodaomanager:  # 唐僧叨叨的后台管理系统
    image: registry.cn-shanghai.aliyuncs.com/wukongim/tangsengdaodaomanager:latest
    restart: always
    environment:
      - API_URL=http://tangsengdaodaoserver:8090/
    ports:
      - "83:80"
    depends_on:
      tangsengdaodaoserver:
        condition: service_healthy      
  minio: # minio文件管理服务
    image: registry.cn-shanghai.aliyuncs.com/wukongim/minio:RELEASE.2023-07-18T17-49-40Z # minio/minio:RELEASE.2023-07-18T17-49-40Z
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
    image: registry.cn-shanghai.aliyuncs.com/wukongim/mysql:8.0.33 # mysql:8.0.33
    command: --default-authentication-plugin=mysql_native_password
    healthcheck:
      test: ["CMD", "mysqladmin" ,"ping", "-h", "localhost"]
    volumes:
      - ./mysqldata:/var/lib/mysql
    environment:
      - TZ=Asia/Shanghai
      - MYSQL_ROOT_PASSWORD=${MYSQL_ROOT_PASSWORD}
      - MYSQL_DATABASE=${MYSQL_DATABASE}
  redis:  # redis
    image: registry.cn-shanghai.aliyuncs.com/wukongim/redis:7.2.3 # redis:7.2.3
    restart: always
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 1s
      timeout: 3s
      retries: 30
  adminer:  # mysql web管理工具 调试用，为了安全生产不要打开
    image: registry.cn-shanghai.aliyuncs.com/wukongim/adminer:latest # adminer:latest
    ports:
      - 8306:8080            

```

## 配置参数

- 创建 `.env`文件
```shell

vi .env

```

- 复制如下内容到 `.env`文件中 (`以下参数除了EXTERNAL_IP是必须修改的，其他参数都可使用默认值`)


```shell

# ######### 基础配置 #########

# 服务器的对外IP地址
EXTERNAL_IP=xxx.xxx.xxx.xxx


 # mysql root用户的密码
MYSQL_ROOT_PASSWORD=Aa1234567
# mysql默认数据库名字
MYSQL_DATABASE=im

# ######### Minio文件服务配置 #########

# minio文件服务的用户名
MINIO_ROOT_USER=minio
#  minio文件服务的密码
MINIO_ROOT_PASSWORD=Aa1234567

######### WuKongIM相关的配置 #########

#  模式 debug or release
WK_MODE=release  
 # 开启最近会话服务端维护
WK_CONVERSATION_ON=true  
# 业务服务的grpc地址
WK_WEBHOOK_GRPCADDR=tangsengdaodaoserver:6979 
# 业务服务的数据源地址
WK_DATASOURCE_ADDR=http://tangsengdaodaoserver:8090/v1/datasource 
# 开启频道信息同步
WK_DATASOURCE_CHANNELINFOON=true 
 # 开启token认证
WK_TOKENAUTHON=true  
# 是否关闭个人白名单功能，默认是开启的，如果关闭发送消息将不做好友关系的判断
WK_WHITELISTOFFOFPERSON=false 
#  JWT的密钥
WK_JWT_SECRET=wk_secret_123
# 默认安装搜索插件
WK_PLUGIN_INSTALL=https://gitee.com/WuKongDev/plugins/releases/download/latest/wk.plugin.search-${os}-${arch}.wkp


######### TangSengDaoDao的配置 #########

#  模式 debug or release
TS_MODE=release  
# wukongim的内网访问地址
TS_WUKONGIM_APIURL=http://wukongim:5001
# redis连接地址
TS_DB_REDISADDR=redis:6379
# 验证码，如果此值不为空，则使用此值作为验证码，为空则使用短信提供商发送的验证码
TS_SMSCODE=123456
# 使用文件服务的类型
TS_FILESERVICE=minio
# 默认头像获取地址
TS_AVATAR_DEFAULTBASEURL=https://api.dicebear.com/8.x/avataaars/png?seed={avatar}&size=180 # 备用https://robohash.org/{avatar}
# 唐僧叨叨后台管理系统的管理员密码,用户名为 superAdmin，可随机填写(至少8位)
TS_ADMINPWD=admin1234567
# 唐僧叨叨的文件服务地址
TS_MINIO_UPLOADURL=http://minio:9000


```

#### .env文件内，建议修改的参数

- EXTERNAL_IP：服务器的对外IP地址

- MYSQL_ROOT_PASSWORD: mysql数据库的root用户密码，可随机填写

- MINIO_ROOT_PASSWORD： minio 文件服务的密码，可随机填写(至少8位)

- WK_JWT_SECRET：JWT的密钥，随机填写即可，为了安全建议修改

- TS_ADMINPWD： 唐僧叨叨后台管理系统的管理员密码,用户名为 superAdmin，可随机填写(至少8位)


`TS_SMSCODE为手机注册默认的短信验证码`

## 更多配置

更多配置请参考 [配置说明](./fullconfig)

所有配置都支持转换成环境变量，然后配置在`.env`文件中  

转换过程查看 [配置转换](./fullconfig.html#配置转环境变量)


## 启动

```shell

docker-compose up -d （新版本是 docker compose up -d）

```


## 端口说明

[端口说明](./port)
