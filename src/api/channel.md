---
title: 频道
order: 200
---

# 频道

频道是**悟空 IM**里最重要的一个概念，如果还不知道什么是频道请查看[什么是频道？](/guide/initialize#频道)

## 创建或更新频道

创建一个频道，如果系统中存在则更新（`个人与个人聊天不需要创建频道，系统将自动创建`）

> POST /channel

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID，如果是群聊频道，建议使用群聊ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道（个人与个人聊天不需要创建频道，系统将自动创建）
   "large": 0,   // 是否是超大群，0.否 1.是 （一般建议500成员以上设置为超大群，注意：超大群不会维护最近会话数据。）
   "ban": 0, // 是否封禁此频道，0.否 1.是 （被封后 任何人都不能发消息，包括创建者）
   "subscribers": [uid1,uid2,...], // 订阅者集合
}
```

成功响应

```
http status为200
```

## 删除频道

删除一个频道（注意：如果配置了[datasource](/guide/datasource)记得不要返回删除了频道的数据，要不然重启又会恢复回来）

> /channel/delete

请求参数:

```json
{
  "channel_id": "xxxx", // 频道的唯一ID
  "channel_type": 2 // 频道的类型 1.个人频道 2.群聊频道
}
```

成功响应

```
http status为200
```

## 添加订阅者

向一个已存在的频道内添加订阅者

> POST /channel/subscriber_add

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "reset": 0,        // // 是否重置订阅者 （0.不重置 1.重置），选择重置，则删除旧的订阅者，选择不重置则保留旧的订阅者
   "subscribers": [uid1,uid2,...], // 订阅者集合
   "temp_subscriber": 0 // 是否为临时频道 0.否 1.是 临时频道的订阅者将在下次重启后自动删除
}
```

成功响应

```
http status为200
```

## 移除订阅者

向一个已存在的频道内移除订阅者

> POST /channel/subscriber_remove

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "subscribers": [uid1,uid2,...], // 订阅者集合
}
```

成功响应

```
http status为200
```

## 添加黑名单

将某个用户添加到频道黑名单内，在频道黑名单内的用户将不能在此频道发送消息，可以通过此接口实现，群拉黑群成员的功能

> POST /channel/blacklist_add

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 要拉黑的用户uid集合
}
```

成功响应

```
http status为200
```

## 移除黑名单

> POST /channel/blacklist_remove

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 用户uid集合
}
```

成功响应

```
http status为200
```

## 设置黑名单

设置黑名单（覆盖原来的黑名单数据）

> POST /channel/blacklist_set

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 用户uid集合
}
```

成功响应

```
http status为200
```

## 添加白名单

如果设置了白名单，则只允许白名单内的订阅者发送消息。可以通过白名单机制实现“群禁言功能”。

> POST /channel/whitelist_add

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 用户uid集合
}
```

成功响应

```
http status为200
```

## 移除白名单

将用户从频道白名单内移除

> /channel/whitelist_remove

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 用户uid集合
}
```

成功响应

```
http status为200
```

## 设置白名单

设置白名单（覆盖原来的白名单数据）

> POST /channel/whitelist_set

请求参数:

```json
{
   "channel_id": "xxxx", // 频道的唯一ID
   "channel_type": 2, // 频道的类型 1.个人频道 2.群聊频道
   "uids": [uid1,uid2,...], // 用户uid集合
}
```

成功响应

```
http status为200
```
