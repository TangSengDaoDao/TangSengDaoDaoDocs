
# 配置

项目所有配置项查看 `WKApp.shared.config` 对象属性

## 配置服务器地址


`AppDelegate.m` 文件里 修改如下

```objc

#define SERVER_IP @"xx.x.xx.x:8090"  // SERVER_IP 改为你自己服务的IP或域名
#define HTTPS_ON false           // https开关， 是否开启了https模式

```