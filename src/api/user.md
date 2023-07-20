---
title: 用户
order: 1
---

# 用户

## 注册或登录

将用户信息注册到悟空 IM，如果存在则更新

> POST /user/token

请求参数:

```json
{
  "uid": "xxxx", // 通信的用户唯一ID，可以随机uuid （建议自己服务端的用户唯一uid） （WuKongIMSDK需要）
  "token": "xxxxx", // 校验的token，随机uuid（建议使用自己服务端的用户的token）（WuKongIMSDK需要）
  "device_flag": 0, // 设备标识  0.app 1.web （相同用户相同设备标记的主设备登录会互相踢，从设备将共存）
  "device_level": 1 // 设备等级 0.为从设备 1.为主设备
}
```

成功响应

```
http status为200
```

## 用户在线状态

查询一批用户的在线状态。

> POST /user/onlinestatus

请求参数:

```json
 [uid123,uid345,uid456...] // 需要查询在线状态的用户uid列表

```

成功响应

```json
[uid123,uid456...] // 返回在线的用户uid集合
```

## 添加系统账号

系统账号将有发送消息的全部权限，不受黑名单限制，无需在订阅列表里，比如“系统通知”，“客服”等这种类似账号可以设置系统账号

> POST /user/systemuids_add

请求参数:

```json
{
    "uids": [uid123,uid345,uid456...] // 需要加入系统账号的用户uid集合列表
}

```

成功响应

```
http status 200
```

## 移除系统账号

将系统账号移除

> POST /user/systemuids_remove

请求参数:

```json
{
    "uids": [uid123,uid345,uid456...] // 系统账号的用户uid集合列表
}
```

成功响应

```
http status 200
```

## 踢出用户的设备登录

将用户的设备踢出登录，（可以实现类似微信的 app 可以踢出 pc 登录）

> POST /user/device_quit

请求参数:

```json
{
  "uid": "xxxx", // 需要踢出的用户uid
  "device_flag": 1 // 需要踢出的设备标记 -1: 当前用户下所有设备 0： 当前用户下的app 1： 当前用户下的web 2： 当前用户下的pc
}
```

成功响应

```
http status 200
```
