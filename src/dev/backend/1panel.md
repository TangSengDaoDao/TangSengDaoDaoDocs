# 1Panel 部署

## 安装 1Panel

在线安装
::: code-group

```shell [RedHat/CentOS]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```

```shell [Ubuntu]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sudo bash quick_start.sh
```

```shell [Debian]
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && bash quick_start.sh
```

```shell [openEuler / 其他]
## 第一步：安装 docker
bash <(curl -sSL https://linuxmirrors.cn/docker.sh)
## 第二步：安装 1Panel
curl -sSL https://resource.fit2cloud.com/1panel/package/quick_start.sh -o quick_start.sh && sh quick_start.sh
```
:::

关于 1Panel 的安装部署与基础功能介绍，请参考 [1Panel 官方文档](https://1panel.cn/)。在完成了 1Panel 的安装部署后，根据提示网址打开浏览器进入 1Panel，如下界面。

![安装1Panel](./1panel.png)

## 安装基础软件

在安装 唐僧叨叨 之前，我们需要先在 1Panel 上安装好所需的软件，包括 MySQL 、Redis 和 Minio。安装部署如下：

1. **安装 MySQL 数据库**

在应用商店中选择 MySQL 点击安装

![安装MySQL数据库](./1panel1.png)

2. **安装 Redis**

在应用商店中选择 Redis 点击安装

![安装Redis](./1panel2.png)

3. **安装 Minio**

在应用商店中选择 Minio 点击安装

![安装Minio](./1panel3.png)

## 1Panel本地安装 TangSengDaoDao 应用

1. 克隆 [https://github.com/TangSengDaoDao/appstore](https://github.com/TangSengDaoDao/appstore)

``` shell
git clone https://github.com/TangSengDaoDao/appstore.git
```

2. 打开 `1panel` 目录

``` shell
cd 1panel
```
3. 将 `tangsengdaodao` 目录，压缩 `tangsengdaodao.zip`

``` shell
zip tangsengdaodao.zip tangsengdaodao
```
4. 将 `tangsengdaodao.zip` 上传到 `/opt/1panel/resource/apps/local` 目录

![上传tangsengdaodao.zip](./1panel13.png)

5. 在 `/opt/1panel/resource/apps/local` 目录，解压 `tangsengdaodao.zip`

![解压tangsengdaodao.zip](./1panel14.png)

6. 更新本地应用

![更新本地应用](./1panel15.png)

## 安装 TangSengDaoDao

安装好 MySQL 、Redis 和 Minio 后，进入应用商店应用列表，找到 TangSengDaoDao 应用进行安装

![安装TangSengDaoDao](./1panel4.png)

## 访问 TangSengDaoDao

::: tip 提醒
- 查看可以[开放端口](./port)
:::

### 1.访问悟空 IM 监控

::: tip 提醒

- 在浏览器访问地址：http:// IP + : +悟空 IM 监控端口 + /web
- 悟空 IM 监控端口：默认端口 5300
  :::

![访问悟空IM监控](./1panel5.png)

### 2.访问唐僧叨叨管理后台

::: tip 提醒

- 在浏览器访问地址：http:// IP + : + 唐僧叨叨管理后台端口
- 唐僧叨叨管理后台端口：默认端口 83
  :::

1. 登录界面

![访问唐僧叨叨管理后台](./1panel6.png)

2. 查看超级管理员帐号并进行登录

![超级管理员帐号提示](./1panel7.png)

3. 登录成功

![唐僧叨叨管理后台登录成功](./1panel8.png)

### 3.访问唐僧叨叨 WEB 端口

::: tip 提醒

- 在浏览器访问地址：http:// IP + : + 唐僧叨叨 WEB 端口
- 唐僧叨叨 WEB 端口：默认端口 83
  :::

1. 在后台管理创建账号

![在后台管理创建账号](./1panel12.png)

2. 登录界面

![登录界面](./1panel10.png)

3. 登录成功

![登录成功](./1panel11.png)
