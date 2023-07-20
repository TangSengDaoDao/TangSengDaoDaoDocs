---
title: 最近会话
order: 300
---

# 最近会话

如果不明白什么是最近会话，请查看[最近会话](/guide/initialize#最近会话)。

`默认最近会话是关闭的，如果需要开启最近会话，请在配置里配置 conversation.on=true`详情查看[完整配置](/guide/fullconfig)

## 同步最近会话

客户端离线后每次进来需要同步一次最近会话（包含离线的最新的消息）

> POST /conversation/sync

请求参数:

```json
{
  "uid": "xxxx", // 当前登录用户uid
  "version": 1234, //  当前客户端的会话最大版本号(从保存的结果里取最大的version，如果本地没有数据则传0)，
  "last_msg_seqs": "xxx:2:123|xxx:1:3434", //   客户端所有频道会话的最后一条消息序列号拼接出来的同步串 格式： channelID:channelType:last_msg_seq|channelID:channelType:last_msg_seq  （此字段非必填，如果不填就获取全量数据，填写了获取增量数据，看你自己的需求。）
  "msg_count": 20 // 每个会话获取最大的消息数量，一般为app点进去第一屏的数据
}
```

成功响应

```json

[
  {
    "channel_id": "xxxx111", // 频道ID
    "channel_type": 2, // 频道类型 1.单聊 2.群聊 3.客服
    "unread": 1, // 消息未读数量
    "timestamp": 1657615272, // 10位到秒的时间戳
    "last_msg_seq": 0, // 最后一条消息的message_seq
    "last_client_msg_no": "xxxx", // 最后一条消息的客户端消息编号
    "version": 123, // 数据版本编号
    "recents":[  // 最近N条消息
        {
            "header": { // 消息头
                "no_persist": 0, // 是否不存储消息 0.存储 1.不存储
                "red_dot": 1, // 是否显示红点计数，0.不显示 1.显示
                "sync_once": 0 // 是否是写扩散，这里一般是0，只有cmd消息才是1 ，cmd消息在这里也不可能查的到，因为cmd消息不会存储到最近会话里
            },
            "setting": 0, // 消息设置 消息设置是一个 uint8的数字类型 为1个字节，完全由第三方自定义 比如定义第8位为已读未读回执标记，开启则为0000 0001 = 1
            "message_id": 122323343445, // 消息全局唯一ID
            "client_msg_no": "xxxxx", // 客户端定义的消息编号(一般为32位的uuid)，可用此字段去重
            "message_seq": 1, // 消息序列号 （频道唯一，有序递增）
            "from_uid": "xxxx", // 发送者用户id
            "channel_id": "xxxx", // 频道ID
            "channel_type": 2, // 频道类型 1.个人频道 2.群频道
            "timestamp": 1657611272, // 消息10位到秒的时间戳
            "payload": "xxxx", // base64编码的消息内容
        },
        ...
    ]
  },
  ...
]

```

## 设置最近会话未读数量

设置某个频道的最近会话未读消息数量

> POST /conversations/setUnread

请求参数:

```json
{
  "uid": "xxxx", // 当前登录用户uid
  "channel_id": "xxxx", // 频道ID
  "channel_type": 1, // 频道类型
  "unread": 0 // 未读消息数量
}
```

成功响应

```
http status为200
```

## 删除最近会话

删除某个频道的最近会话

> POST /conversations/delete

请求参数:

```json
{
  "uid": "xxxx", // 当前登录用户uid
  "channel_id": "xxxx", // 频道ID
  "channel_type": 1 // 频道类型
}
```

成功响应

```
http status为200
```
