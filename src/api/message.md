---
title: 消息
order: 200
---

# 消息

## 发送消息

服务端调用发送消息接口可以主要用来发送系统类的消息，比如群成员进群通知，消息撤回通知等等

> POST /message/send

请求参数:

```json
{
  "header": {
    // 消息头
    "no_persist": 0, // 是否不存储消息 0.存储 1.不存储
    "red_dot": 1, // 是否显示红点计数，0.不显示 1.显示
    "sync_once": 0 // 是否是写扩散，这里一般是0，只有cmd消息才是1
  },
  "from_uid": "xxxx", // 发送者uid
  "stream_no": "", // 流式消息编号，如果是流式消息，需要指定，否则为空
  "channel_id": "xxxx", // 接收频道ID 如果channel_type=1 channel_id为个人uid 如果channel_type=2 channel_id为群id
  "channel_type": 2, // 接收频道类型  1.个人频道 2.群聊频道
  "payload": "xxxxx", // 消息内容，base64编码
  "subscribers": ["uid123", "uid234", "..."] // 订阅者 如果此字段有值，表示消息只发给指定的订阅者,没有值则发给频道内所有订阅者
}
```

[payload 内容参考](/guide/proto#普通消息)

成功响应

```
http status为200
```

## 批量发送消息

批量发送消息，可以用于后端发送全局通知之类的消息，需要通知到全部用户的消息，可以每次指定一批（通过 subscribers 指定）接收用户，分批推送。

> POST /message/sendbatch

请求参数:

```json
{
  "header": { // 消息头
      "no_persist": 0, // 是否不存储消息 0.存储 1.不存储
      "red_dot": 1, // 是否显示红点计数，0.不显示 1.显示
      "sync_once": 0, // 是否是写扩散，这里一般是0，只有cmd消息才是1
  },
  "from_uid": "xxxx", // 发送者uid
  "payload": "xxxxx", // 消息内容，base64编码
  "subscribers": [uid123,uid234,...] // 接收者的uid，分批指定，每次建议 1000-10000之间，视系统情况而定
}
```

成功响应

```json
{
  "fail_uids": [uid123,uid234,...], // 返回发送失败的用户列表
  "reason": ["发送失败","不存在用户",...], // 发送失败用户列表对应的失败原因列表，与fail_uids一一对应
}

```

## 获取某频道消息

获取某个频道的消息列表

> POST /channel/messagesync

请求参数:

```json
{
  "login_uid": "xxxx", // 当前登录用户uid
  "channel_id": "xxxx", //  频道ID
  "channel_type": 2, // 频道类型
  "start_message_seq": 0, // 开始消息列号（结果包含start_message_seq的消息）
  "end_message_seq": 0, // 结束消息列号（结果不包含end_message_seq的消息）
  "limit": 100, // 消息数量限制
  "pull_mode": 1 // 拉取模式 0:向下拉取 1:向上拉取
}
```

```

以start_message_seq为基准 pull_mode控制拉取方向，end_message_seq和limit控制结束位置

pull_mode为1 表示向上拉，逻辑如下：

消息以start_message_seq为起点，加载大于或等于start_message_seq的消息，加载到超过end_message_seq（结果不包含end_message_seq）或超过limit为止，如果end_message_seq为0则以limit为准
例如：
start_message_seq=100 end_message_seq=200 limit=10 以limit为准，则返回的messageSeq为100-110的消息.
start_message_seq=100 end_message_seq=105 limit=10 以end_message_seq为准，则返回的messageSeq为100-104的消息
start_message_seq=100 end_message_seq=0 limit=10 以limit为准，则返回的messageSeq为100-110的消息


pull_mode为0 表示向下拉，逻辑如下：

消息以start_message_seq为起点，加载小于或等于start_message_seq的消息，加载到超过end_message_seq（结果不包含end_message_seq）或超过limit为止，如果end_message_seq为0则以limit为准

例如：
start_message_seq=100 end_message_seq=50 limit=10 以limit为准，则返回的messageSeq为100-91的消息.
start_message_seq=100 end_message_seq=95 limit=10 以end_message_seq为准，则返回的messageSeq为100-96的消息
start_message_seq=100 end_message_seq=0 limit=10 以limit为准，则返回的messageSeq为100-91的消息


如果start_message_seq和end_message_seq都为0，则不管pull_mode为那种都加载最新的limit条消息。

```

成功响应

```json
{
  "start_message_seq": 0, // 查询的start_message_seq
  "end_message_seq": 0, // 查询的end_message_seq
  "more": 0, // 是否有更多  0.无 1.有
  "messages": [
    {
      "header": {
        // 消息头
        "no_persist": 0, // 是否不存储消息 0.存储 1.不存储
        "red_dot": 1, // 是否显示红点计数，0.不显示 1.显示
        "sync_once": 0 // 是否是写扩散，这里一般是0，只有cmd消息才是1
      },
      "setting": 0, // 消息设置 消息设置是一个 uint8的数字类型 为1个字节，完全由第三方自定义 比如定义第8位为已读未读回执标记，开启则为0000 0001 = 1
      "message_id": 122323343445, // 消息全局唯一ID
      "client_msg_no": "xxxxx", // 客户端消息编号，可用此字段去重
      "message_seq": 1, // 消息序列号 （用户唯一，有序递增）
      "from_uid": "xxxx", // 发送者用户id
      "channel_id": "xxxx", // 频道ID
      "channel_type": 2, // 频道类型 1.个人频道 2.群频道
      "timestamp": 1223434512, // 消息10位到秒的时间戳
      "payload": "xxxx" // base64编码的消息内容
    }
  ]
}
```

## 同步离线命令消息

如果消息 header.sync_once 设置为 1 则离线命令消息就会走此接口，否则走读扩散模式（<label style="color:red">建议只有 CMD 消息才走写扩散</label>）

> POST /message/sync

请求参数:

```json
{
  "uid": "xxxx", // 当前登录用户uid
  "limit": 100 //  消息数量限制
}
```

成功响应

```json

[
    {
        "header": { // 消息头
            "no_persist": 0, // 是否不存储消息 0.存储 1.不存储
            "red_dot": 0, // 是否显示红点计数，0.不显示 1.显示
            "sync_once": 1 // 是否是写扩散，这里一般是0，只有cmd消息才是1
        },
        "setting": 0, // 消息设置 消息设置是一个 uint8的数字类型 为1个字节，完全由第三方自定义 比如定义第8位为已读未读回执标记，开启则为0000 0001 = 1
        "message_id": 122323343445, // 消息全局唯一ID
        "client_msg_no": "xxxxx", // 客户端消息编号，可用此字段去重
        "message_seq": 1, // 消息序列号 （用户唯一，有序递增）
        "from_uid": "xxxx", // 发送者用户id
        "channel_id": "xxxx", // 频道ID
        "channel_type": 2, // 频道类型 1.个人频道 2.群频道
        "timestamp": 1223434512, // 消息10位到秒的时间戳
        "payload": "xxxx", // base64编码的消息内容
    },
    ...
]

```

## 回执离线命令消息

当客户端获取完离线命令消息后，需要调用此接口做回执，告诉服务端离线消息已获取完毕，这样下次就不会再返回

> POST /message/syncack

请求参数:

```json
{
  "uid": "xxxx", // 当前登录用户uid
  "last_message_seq": 0 //  客户端本地最后一条命令消息的messageSeq，如果本地没有命令消息则为0
}
```

成功响应

```
http status为200
```
