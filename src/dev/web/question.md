# 常见问题

--------------


`序号4001`：直接源码运行后，没有出现二维码，接口提示 `404 Not Found`

```

检查api的基地址是否正确。

修改 apps/web/src/index.tsx 文件下

WKApp.apiClient.config.apiURL = "http://xxx.xx.xx.xx/v1/"  //  服务端地址 注意最后的斜杠不能少

```