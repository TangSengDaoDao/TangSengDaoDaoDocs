
# 配置

### 配置服务器地址


`TSApplication.kt` 文件的`initApi`方法 修改如下

``` kotlin
WKApiConfig.initBaseURL("https://xx.x.xx.x:8090") //改为你自己服务的IP或域名
```
### 配置音视频服务器地址
在`TSApplication.kt`模块中的`initAll()`方法中注册音视频模块需要传递rtc服务器信息。如下所示
```kotlin
private fun initAll() {
    ...
    // 注册音视频模块
    WKUIRTCApplication.init(getList()) 
}

private fun getList(): ArrayList<IceServer> {
        val iceServer = IceServer.builder(
            // rtc服务器地址
            "turn:xx.xx.xx.x:xxxx?transport=udp"
            // 用户名
        ).setUsername("xxx").setPassword(
            "xxx" //密码
        ).createIceServer()
        val iceServers: ArrayList<IceServer> = ArrayList()
        iceServers.add(iceServer)
        return iceServers
    }
```
