
# 配置

## 配置服务器地址


`TSApplication.kt` 文件的`initApi`方法 修改如下

``` kotlin
WKApiConfig.initBaseURL("https://xx.x.xx.x:8090") //改为你自己服务的IP或域名
```