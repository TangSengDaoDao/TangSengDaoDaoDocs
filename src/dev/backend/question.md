# 常见问题

----------------


`序号1000`： 执行 `tsdd install` 报错 "version `GLIBC_2.28' not found"

```
这个是因为系统版本过低导致的。

一键安装脚本建议的系统版本
Ubuntu 22.0 或以上

推荐：

Ubuntu Lunar 23.04
Ubuntu Kinetic 22.10
Ubuntu Jammy 22.04 (LTS)
Ubuntu Focal 20.04 (LTS)
```

`序号1001`: minio上传文件报错 The request signature we calculated does not match the signature you provided.

```

nginx配置错误导致，proxy_set_header的一些设置需要按照官方的来

参考官方文档配置nginx的方式 https://min.io/docs/minio/linux/integrations/setup-nginx-proxy-with-minio.html?ref=docs-redirect

```
