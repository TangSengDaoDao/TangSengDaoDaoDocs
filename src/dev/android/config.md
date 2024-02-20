
# 配置

### 配置服务器地址


`TSApplication.kt` 文件的`initApi`方法 修改如下

``` kotlin
WKApiConfig.initBaseURL("https://xx.x.xx.x:8090") //改为你自己服务的IP或域名
```
### 配置音视频服务器地址
在`wkrtc`模块中的`WKRTCApplication`文件的`getList`方法配置服务器地址。修改如下
```kotlin
private fun getList(): ArrayList<IceServer> {
        val iceServer = IceServer.builder(
            "turn:xx.xx.xx.x:xxxx?transport=udp"
        ).setUsername("xxx").setPassword(
            "xxx"
        ).createIceServer()
        val iceServers: ArrayList<IceServer> = ArrayList()
        iceServers.add(iceServer)
        return iceServers
    }
```
