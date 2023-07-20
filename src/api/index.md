---
title: 基础
order: -1
nav:
  title: API文档
  order: 1
---

# 基础

`注意：所有API是给你们自己的业务系统调用的，不要暴露到外网，防止出现安全问题。（将5001端口外网的访问屏蔽掉）`

API 规则：

所有 API http 状态码 200 为一定执行成功了（`所以有些不需要返回json的接口只需要判断http状态为200即认为成功`），其他为失败，400 为参数错误，500 为服务器错误
如果是 400, 会返回错误信息，格式如下：

```json
{
  "msg": "错误信息", // 错误的提示
  "status": 400 // 业务错误的状态码
}
```

所以文档只列出成功的响应参数。

## 长连接地址获取

获取客户端连接**悟空 IM**的地址

> GET /route?uid=xxxx // uid 为用户 ID

成功响应

```json
{
  "tcp_addr": "xx.xx.xx.xxx:xx", // tcp连接地址
  "ws_addr": "xx.xx.xx.xxx:xx" // websocket连接地址
}
```

## 批量获取连接地址

获取一批用户的连接地址

> POST /route/batch

请求参数:

```json

[uid123,uid32323,....] // 用户uid集合

```

成功响应

```json

[
    {
        "tcp_addr": "IP:PORT", // tcp连接地址
        "ws_addr": "IP:PORT", // websocket连接地址
        "uids":[], // 用户uid集合

    },
    {
        "tcp_addr": "IP:PORT", // tcp连接地址
        "ws_addr": "IP:PORT", // websocket连接地址
        "uids":[], // 用户uid集合

    },
    ...
]


```
