
### 模块功能详情

### 基础版（开源免费）

基础版本主要包含可以发送 **文本消息**，**图片消息**，**语音消息**，**名片消息**，**联系人**，**用户资料**，**个人资料**，**通用设置**等等

具体功能列表如下：

<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>

  <!--  会话  -->

   <tr >
      <td rowspan="39">会话</td>
       <td rowspan="3">文本消息</td>
       <td >显示普通文本</td>
       
  </tr>
  <tr>
     <td >识别文本中链接并显示主页标题及介绍，识别手机号点击提示拨号或保存到系统电话薄</td>
  </tr>
  <tr>
     <td >显示系统emoji、自定义emoji图片</td>
  
  </tr>
  <tr>
     <td rowspan="5">图片消息</td>
     <td >发送时可选择相册图片（最多选择9张同时发送），拍摄照片</td>
  </tr>
  <tr>
     <td >支持选择照片原图发送</td>
   
  </tr>
  <tr>
     <td >聊天中显示图片发送进度</td>
    
  </tr>
  <tr>
     <td >查看图片大图，双击放大、缩小等</td>
     
  </tr>
  <tr>
     <td >长按图片可发转到其他会话，保存到相册</td>
  
  </tr>
  
   <tr>
     <td rowspan="4">语音消息</td>
      <td >长按录制语音松手发送到聊天</td>

  </tr>
   <tr>
     <td >最长录制60秒消息</td>

  </tr>
   <tr>
     <td >播放语音消息支持声贝动画</td>
 
  </tr>
  <tr>
     <td >点击未下载语音，显示下载进度。下载完成后播放该语音</td>
  </tr>
   <tr>
     <td rowspan="2">名片消息</td>
     <td >选择联系人发送到会话</td>
  </tr>
  <tr>
     <td >查看名片联系人</td>
  </tr>
  <tr>
     <td rowspan="3">正在输入消息</td>
     <td >单聊对方输入时会提醒到会话中</td>
  </tr>
  <tr>
     <td >群聊某人正在输入会提醒到会话，多人同时输入会更新最后输入用户</td>
  </tr>
   <tr>
     <td >用户输入8秒未发送或取消发送，取消正在输入提醒</td>
  </tr>
  <tr>
     <td rowspan="5">群系统消息</td>
     <td >创建群聊系统消息</td>
  </tr>
   <tr>
     <td >添加或移除群成员系统消息</td>
  </tr>
  <tr>
     <td >注销用户无法添加到群聊系统消息</td>
  </tr>
   <tr>
     <td >更改群名称消息</td>
  </tr>
  <tr>
     <td >修改群公告消息</td>
  </tr>
  <tr>
     <td rowspan="2">单聊系统消息</td>
     <td >通过好友验证打招呼系统消息</td>
  </tr>
  <tr>
     <td >非好友发送消息时提醒消息</td>
  </tr>
   <tr>
     <td rowspan="1">消息撤回</td>
     <td >撤回消息。自己发送的消息在3分钟内可撤回，群主或管理员可永久撤回成员消息</td>
  </tr>
   <tr>
     <td rowspan="2">消息转发</td>
     <td >转发消息。可将长按消息转发到其他会话</td>
  </tr>
  <tr>
     <td >多选消息可合并转发/逐条转发（最多100条）到其他会话</td>
  </tr>
   <tr>
     <td rowspan="1">消息复制</td>
     <td >可复制长按文本消息</td>
  </tr>
  <tr>
     <td rowspan="1">消息收藏</td>
     <td >可收藏图片/文本消息</td>
  </tr>
   <tr>
     <td rowspan="3">查看历史消息</td>
     <td >下拉可查看历史消息</td>
  </tr>
  <tr>
     <td >浏览历史消息时可点击回到底部</td>
  </tr>
  <tr>
     <td >浏览消息时退出会话，下次进入当前会话停留在上次预览位置</td>
  </tr>
  <tr>
     <td rowspan="5">常用事件</td>
     <td >群聊中长按用户头像@某用户或聊天中输入@选择提醒用户</td>
  </tr>
  <tr>
     <td >点击发送失败消息，提示重发该消息</td>
  </tr>
  <tr>
     <td >不是好友消息点击申请按钮，申请加好友</td>
  </tr>
  <tr>
     <td >点击贴图表情消息，显示贴图详情</td>
  </tr>
  <tr>
     <td >点击消息头像查看用户资料</td>
  </tr>
  <tr>
     <td rowspan="2">在线状态</td>
     <td >群聊中，标题显示成员总数及在线人数</td>
  </tr>
   <tr>
     <td >单聊中显示对方在线状态</td>
  </tr>

  <!--  会话列表  -->
   <tr>
     <td rowspan="27">会话列表</td>
     <td rowspan="6">基础信息</td>
     <td >显示会话头像，会话时间</td>
  </tr>
  <tr>
     <td >显示会话名称。优先显示备注名称</td>
  </tr>
   <tr>
     <td >消息时间。同一天分系统12小时制/24小时制显示，同周显示星期，同月显示月份，不同年显示年份</td>
  </tr>
   <tr>
     <td >群聊非登录用户显示发送者名称和最后一条内容</td>
  </tr>
   <tr>
     <td >按会话时间排序</td>
  </tr>
   <tr>
     <td >显示一行最后一条消息内容，超过一行末尾用"..."显示</td>
  </tr>
  <tr>
     <td rowspan="1">在线状态</td>
     <td >单聊用户在线状态显示。一小时内在线显示时常</td>
  </tr>
   <tr>
     <td rowspan="3">消息红点</td>
     <td >消息红点。超过100条显示99+</td>
  </tr>
  <tr>
     <td >消息tab显示总共未读消息数量超过100条显示99+</td>
  </tr>
  <tr>
     <td >免打扰消息红点灰色提醒</td>
  </tr>
  <tr>
     <td rowspan="2">会话设置</td>
     <td >置顶会话效果</td>
  </tr>
  <tr>
     <td >消息免打扰</td>
  </tr>
  <tr>
     <td rowspan="2">消息强提醒</td>
     <td >@消息提醒</td>
  </tr>
  <tr>
     <td >消息草稿提醒</td>
  </tr>
  <tr>
     <td rowspan="3">消息状态</td>
     <td >消息发送状态</td>
  </tr>
   <tr>
     <td >消息已读状态</td>
  </tr>
  <tr>
     <td >会话中有人正在输入显示</td>
  </tr>
  <tr>
     <td rowspan="1">用户标识</td>
     <td >官方账号标识</td>
  </tr>

  <tr>
     <td rowspan="1">其他设备连接状态</td>
     <td >web/pc登录显示状态</td>
  </tr>
  <tr>
     <td rowspan="2">网络状态</td>
     <td >无网络，未连接显示</td>
  </tr>
  <tr>
     <td >连接中、同步消息中状态显示</td>
  </tr>
  <tr>
     <td rowspan="4">常用事件</td>
     <td >全局搜索。搜索联系人、群聊、聊天记录</td>
  </tr>
  <tr>
     <td >长按会话可关闭/打开通知、开启/取消置顶、删除聊天</td>
  </tr>
   <tr>
     <td >点击加号可弹出创建群聊、添加好友、扫一扫选项</td>
  </tr>
   <tr>
     <td >创建群时默认生成头像和名称</td>
  </tr>
  <tr>
     <td rowspan="2">添加群/联系人</td>
     <td >扫一扫可扫描个人/群二维码</td>
  </tr>
   <tr>
     <td >添加好友可通过手机通讯录匹配</td>
  </tr>
  
  <!--  会话设置  -->

  <tr>
    <td rowspan="26">会话设置</td>
    <td rowspan="17">群聊设置</td>
    <td >标题显示总成员数量</td>
  </tr>
   <tr>
     <td >默认显示前20位群成员</td>
  </tr>
  <tr>
     <td >可查看所有群成员</td>
  </tr>
   <tr>
     <td >群主显示删除群成员按钮</td>
  </tr>
   <tr>
     <td >群主可修改群名称</td>
  </tr>
  <tr>
     <td >群公告。普通用户可查看群公告，群主可编辑群公告</td>
  </tr>
  <tr>
     <td >成员可对该群设置备注</td>
  </tr>
  <tr>
     <td >成员可设置在群内昵称</td>
  </tr>
   <tr>
     <td >是否显示群内昵称</td>
  </tr>
  <tr>
     <td >消息免打扰</td>
  </tr>
  <tr>
     <td >会话置顶</td>
  </tr>
  <tr>
     <td >保存到通讯录</td>
  </tr>
  <tr>
     <td >清空远程和本地聊天记录</td>
  </tr>
   <tr>
     <td >成员可投诉本群</td>
  </tr>
  <tr>
     <td >查找消息记录。可查找群成员、按日期，图片，视频，文件、红包、转账等查找</td>
  </tr>
  <tr>
     <td >点击查找消息内容可跳转到会话并提醒对应消息</td>
  </tr>
 
  <tr>
     <td >删除退出群聊。群主退出会指定第二位进群成员为群主</td>
  </tr>
   <tr>
     <td rowspan="9">单聊设置</td>
     <td >显示用户信息，可通过加号创建群聊，默认添加该用户</td>
  </tr>
  <tr>
     <td >点击用户头像可查看用户资料</td>
  </tr>
  <tr>
     <td >查找消息记录。可按日期，图片，视频，文件、红包、转账等分类查找</td>
  </tr>
  <tr>
     <td >会话置顶</td>
  </tr>
  <tr>
     <td >消息免打扰</td>
  </tr>
   <tr>
     <td >投诉用户</td>
  </tr>
  <tr>
     <td >截屏通知。开启后用户截屏后会在聊天中显示截屏系统通知</td>
  </tr>
  <tr>
     <td >撤回通知。开启后撤回消息时聊天中会显示撤回消息通知</td>
  </tr>
  <tr>
     <td >清空远程和本地聊天记录</td>
  </tr>
  
   <!-- 通讯录 -->
  <tr>
    <td rowspan="28">通讯录</td>
    <td rowspan="8">新朋友</td>
    <td >新的加好友消息显示消息红点</td>
  </tr>

   <tr>
     <td >新朋友列表，申请记录</td>
  </tr>
   <tr>
     <td >通过/拒绝好友申请</td>
  </tr>
   <tr>
     <td >通过好友申请可设置好友备注</td>
  </tr>
   <tr>
     <td >添加好友入口</td>
  </tr>
  <tr>
     <td >可通过扫一扫、手机通讯录添加</td>
  </tr>
  <tr>
     <td >匹配手机通讯录添加好友、邀请用户</td>
  </tr>
  <tr>
     <td >通过手机号搜索用户添加</td>
  </tr>


  <tr>
    <td rowspan="2">保存的群聊</td>
    <td >会话设置保存的群聊列表。点击可进入会话</td>
  </tr>
  <tr>
     <td >新建群聊入口</td>
  </tr>


  <tr>
    <td rowspan="6">联系人</td>
    <td >通过拼音排序联系人</td>
  </tr>
  <tr>
     <td >显示总共联系人数量</td>
  </tr>
  <tr>
     <td >显示联系人在线状态、离线一小时内显示离线时长</td>
  </tr>
  <tr>
     <td >标识联系人官方或机器人分类</td>
  </tr>
  <tr>
     <td >点击联系人查看资料</td>
  </tr>
  <tr>
     <td >长按联系人可快速进入发消息/设置备注</td>
  </tr>


  <tr>
    <td rowspan="12">个人名片</td>
    <td >显示用户头像</td>
  </tr>
  <tr>
     <td >如果设置了备注显示备注和昵称。未设置备注则显示昵称</td>
  </tr>
  <tr>
     <td >用户平台短号</td>
  </tr>
  <tr>
     <td >从群内进入显示群内昵称</td>
  </tr>
  <tr>
     <td >从群内进入显示入群方式及入群时间</td>
  </tr>
  <tr>
     <td >用户性别</td>
  </tr>
  <tr>
     <td >设置备注入口</td>
  </tr>
  <tr>
     <td >好友关系显示解除好友关系</td>
  </tr>
  <tr>
     <td >非好友显示申请加好友</td>
  </tr>
   <tr>
     <td >好友关系显示发送消息</td>
  </tr>
  <tr>
     <td >拉入/拉出黑名单</td>
  </tr>
  <tr>
     <td >显示好友来源</td>
  </tr>
 

   <!-- 设置 -->
  <tr>
    <td rowspan="22">设置</td>
    <td rowspan="8">登录用户信息</td>
    <td >显示用户头像</td>
  </tr>
  <tr>
     <td >修改头像</td>
  </tr>
  <tr>
     <td >用户头像保存在本地</td>
  </tr>
  <tr>
     <td >修改昵称信息</td>
  </tr>
  <tr>
     <td >修改平台短号。只允许修改一次</td>
  </tr>
   <tr>
     <td >用户二维码展示</td>
  </tr>
   <tr>
     <td >可将二维码保存在本地</td>
  </tr>
  <tr>
     <td >用户性别，可编辑性别信息</td>
  </tr>

   <tr>
    <td rowspan="4">新消息通知</td>
    <td >开启/关闭新消息通知</td>
  </tr>
  <tr>
     <td >开启/关闭通知消息详情</td>
  </tr>
  <tr>
     <td >开启/关闭声音</td>
  </tr>
  <tr>
     <td >开启/关闭震动</td>
  </tr>


   <tr>
    <td rowspan="7">通用</td>
    <td >深色模式。默认跟随系统，可选择普通/深色模式</td>
  </tr>
  <tr>
     <td >多语言。默认跟随系统，可选择英文/简体中文</td>
  </tr>
  <tr>
     <td >字体大小。默认标准，可改变整个app字体大小</td>
  </tr>
  <tr>
     <td >聊天背景。选择图片更改聊天中背景</td>
  </tr>
  <tr>
     <td >清空缓存。计算app缓存并可点击清除</td>
  </tr>
  <tr>
     <td >关于。用户协议和隐私政策，点击打开网页。检查新版本提示</td>
  </tr>
  <tr>
     <td >退出登录。点击退出登录断开连接，退出到登录页面</td>
  </tr>
  
</table>


### 旗舰模块


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="19">会话</td>
      <td rowspan="3">消息已读未读</td>
      <td >消息显示已读未读标记</td>
  </tr>
  <tr>
      <td >已读未读成员列表</td>
  </tr>
  <tr>
      <td>已读未读开关</td>
  </tr>
  <tr>
      <td rowspan="2">截屏消息</td>
      <td>拦截手机截屏动作</td>
  </tr>
   <tr>
      <td>监听到截屏会发送截屏消息</td>
  </tr>
  <tr>
      <td rowspan="2">消息编辑</td>
      <td>编辑消息</td>
  </tr>
  <tr>
      <td>消息编辑状态显示</td>
  </tr>
    <tr>
      <td rowspan="3">消息点赞</td>
      <td>长按消息显示点赞图标</td>
  </tr>
  <tr>
      <td>点赞后消息显示点赞内容</td>
  </tr>
  <tr>
      <td>查看点赞列表</td>
  </tr>
  <tr>
      <td rowspan="1">在线状态</td>
      <td>显示用户在线状态</td>
  </tr>
  <tr>
      <td rowspan="4">图片编辑</td>
      <td>图片涂鸦</td>
  </tr>
  <tr>
      <td>图片裁剪</td>
  </tr>
  <tr>
      <td>图片加文字</td>
  </tr>
  <tr>
      <td>图片加滤镜</td>
  </tr>
  <tr>
      <td rowspan="4">查看历史消息</td>
      <td>按日期分类查询历史消息</td>
  </tr>
  <tr>
      <td>按成员查询历史消息</td>
  </tr>
   <tr>
      <td>查询图片消息</td>
  </tr>
   <tr>
      <td>按关键字查询文本消息</td>
  </tr>
  <tr >
      <td rowspan="2">会话设置</td>
      <td rowspan="2"></td>
      <td >截屏通知。开启后用户截屏后会在聊天中显示截屏系统通知</td>
  </tr>
  <tr>
      <td>撤回通知。开启后撤回消息时聊天中会显示撤回消息通知</td>
  </tr>
  
</table>

### 音视频模块


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="7">音视频</td>
      <td rowspan="7"></td>
      <td >音视频拨打入口</td>
  </tr>
  <tr>
      <td >音视频消息UI</td>
  </tr>
  <tr>
      <td>拨打音视频UI</td>
  </tr>
  <tr>
      <td>接听音视频UI</td>
  </tr>
   <tr>
      <td>接通后的音视频UI</td>
  </tr>
   <tr>
      <td>会议模式音视频</td>
  </tr>
</table>


### 表情商店


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="14">表情商店</td>
      <td rowspan="6">消息面板</td>
      <td >聊天tab中显示表情入口</td>
  </tr>
  <tr>
       <td >显示搜索入口、emoji分类和收藏分类默认选项</td>
  </tr>
  <tr>
       <td >如果用户添加了一组表情则显示在分类后面</td>
  </tr>
  <tr>
       <td >点击emoji分类可查看所有emoji表情</td>
  </tr>
  <tr>
      <td >点击收藏分类可查看用户收藏的表情</td>
  </tr>
  <tr>
   <td >收藏分类下第一个显示制作表情入口</td>
  </tr>
   <tr >
      <td rowspan="3">制作表情</td>
      <td >显示自定义表情列表</td>
  </tr>
  <tr>
    <td >制作一个表情。从相册选择图片点击保存制作</td>
  </tr>
  <tr>
    <td >整理自定义表情。排序/删除选中的自定义表情</td>
  </tr>
   <tr >
      <td rowspan="5">平台表情</td>
      <td >点击搜索分类进入表情商店列表</td>
  </tr>
  <tr>
    <td >可在表情商店列表添加一组表情</td>
  </tr>
  <tr>
    <td >点击某项可查看表情详情，详情中可点击“添加”按钮添加一组表情</td>
  </tr>
  <tr>
    <td >我的表情页面可移除添加的一组表情</td>
  </tr>
  <tr>
    <td >表情管理。可排序添加的一组表情</td>
  </tr>
  
 
</table>


### 群管理模块


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="10">会话设置</td>
      <td rowspan="10">群管理</td>
      <td >设置群成员黑名单</td>
  </tr>
  <tr>
       <td >群主可添加群管理员</td>
  </tr>
  <tr>
       <td >群管理员列表</td>
  </tr>
  <tr>
       <td >群头像设置</td>
  </tr>
  <tr>
      <td >开启/关闭全员禁言</td>
  </tr>
  <tr>
   <td >开启/关闭邀请确认</td>
  </tr>
  <tr>
       <td >点击成员头像查看资料。单独设置禁言及禁言时长</td>
  </tr>
  <tr>
       <td >禁止群内互加好友开关</td>
  </tr>
  <tr>
      <td >是否允许新成员查看历史消息</td>
  </tr>
   <tr>
      <td >撤回群成员消息</td>
  </tr>
 
</table>


### 安全与隐私模块


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="6">安全与隐私</td>
      <td rowspan="6"></td>
      <td >开启/关闭允许手机号搜索</td>
  </tr>
  <tr>
       <td >开启关闭平台短号搜索</td>
  </tr>
  <tr>
       <td >登录密码修改，通过手机短信验证码修改登录密码</td>
  </tr>
  <tr>
       <td >设备锁。开启关闭设备锁，开启后换设备登录需验证手机号码，显示登录过设备列表	</td>
  </tr>
  <tr>
       <td >注销账号。通过短信验证码注销账号，注销后所有信息全部销毁，如果想再使用请重新注册！</td>
  </tr>
  <tr>
      <td >黑名单。用户设置黑名单用户列表，可拉出黑名单用户</td>
  </tr>
 
</table>



### 小视频模块

<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="7">会话</td>
      <td rowspan="7">小视频消息</td>
      <td >小视频消息UI</td>
  </tr>
  <tr>
      <td >录制小视频（15秒），选择相册视频发送</td>
  </tr>
  <tr>
      <td>播放视频消息</td>
  </tr>
  <tr>
      <td>消息中显示视频大小</td>
  </tr>
  <tr>
      <td>保存小视频到本地</td>
  </tr>
  <tr>
      <td>点击未下载视频，显示下载进度，下载完成后播放该视频</td>
  </tr>
   <tr>
      <td>小视频可转发给朋友</td>
  </tr>
</table>

### 位置模块


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="6">会话</td>
      <td rowspan="6">消息</td>
      <td >面板增加位置消息入口</td>
  </tr>
  <tr>
       <td >位置消息UI</td>
  </tr>
  <tr>
       <td >选择发送当前位置到会话</td>
  </tr>
  <tr>
       <td >搜索位置信息发送</td>
  </tr>
  <tr>
       <td >查看对方发送的位置信息</td>
  </tr>
  <tr>
      <td >显示位置截图图片</td>
  </tr>
 
</table>

### 文件模块

<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="9">会话</td>
      <td rowspan="9">消息</td>
      <td >面板增加文件入口</td>
  </tr>
  <tr>
       <td >文件消息UI（文件格式，文件大小，文件名称）</td>
  </tr>
  <tr>
       <td >文件上传/下载</td>
  </tr>
  <tr>
       <td >文件预览</td>
  </tr>
  <tr>
      <td >文件转发</td>
  </tr>
 
</table>


### 朋友圈模块

<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="27">朋友圈</td>
      <td rowspan="9">发布朋友圈</td>
      <td >选择图片/视频/文本任意一种发布</td>
  </tr>
  <tr>
       <td >可选择位置、搜索位置</td>
  </tr>
  <tr>
       <td >提醒某人查看</td>
  </tr>
  <tr>
      <td >朋友圈权限。公开（所有人可看）、私有（仅自己可见）、部分可见（选中朋友可见）、不给谁看（选中朋友不可见）</td>
  </tr>
   <tr>
      <td >选择朋友可从通讯录选择或标签中选择</td>
  </tr>
   <tr>
      <td >发布图片时最多选择9张图片并可拖动排序</td>
  </tr>
   <tr>
      <td >发布视频时只能发布一个视频</td>
  </tr>
   <tr>
      <td >文本支持emoji输入</td>
  </tr>
   <tr>
      <td >上传图片/视频时显示进度和上传结果</td>
  </tr>
   <tr>
     <td rowspan="18">朋友圈列表</td>
   </tr>
    <tr>
      <td >当前登录用户列表可点击设置相册封面（从相册或拍摄图片）</td>
  </tr>
  <tr>
      <td >显示登录用户名称和头像</td>
  </tr>
  <tr>
      <td >显示发布者名称优先显示用户备注</td>
  </tr>
  <tr>
      <td >显示发布者头像</td>
  </tr>
  <tr>
      <td >发布时间</td>
  </tr>
  <tr>
      <td >显示自己好友的评论及点赞</td>
  </tr>
  <tr>
      <td >设置了发布地址则显示地址信息</td>
  </tr>
  <tr>
      <td >登录用户发布时显示删除按钮</td>
  </tr>
  <tr>
      <td >提醒用户如果包含属于登录用户好友则显示提醒用户</td>
  </tr>
  <tr>
      <td >长按文本可复制内容或收藏内容</td>
  </tr>
  <tr>
      <td >点击图片可查看大图，并可转发到其他会话或保存到本地</td>
  </tr>
  <tr>
      <td >长按图片可发转到其他会话，收藏</td>
  </tr>
  <tr>
      <td >点击视频可播放视频</td>
  </tr>
   <tr>
      <td >点击更多弹出点赞/评论选项</td>
  </tr>
   <tr>
      <td >点击发布者头像可查看该用户朋友圈</td>
  </tr>
   <tr>
      <td >朋友圈新消息入口显示</td>
  </tr>
   <tr>
      <td >点击朋友圈新消息进入消息列表</td>
  </tr>
 
</table>

### 收藏模块

<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="2">会话</td>
      <td rowspan="2">消息菜单</td>
      <td >文本消息收藏</td>
  </tr>
  <tr>
      <td >图片消息收藏</td>
  </tr>
  <tr >
      <td rowspan="5">设置</td>
      <td rowspan="5">我的收藏</td>
      <td >收藏列表（图片，文本，收藏时间，作者，昵称）</td>
  </tr>
  <tr>
      <td >删除收藏</td>
  </tr>
  <tr>
      <td >发送给朋友</td>
  </tr>
  <tr>
      <td >文本内容可复制</td>
  </tr>
  <tr>
      <td >图片内容可缩放</td>
  </tr>
</table>



### 客服模块

（开发中）


<table>
  <tr>
    <th>一级</th>
    <th>二级</th>
    <th>三级</th>
  </tr>
   <tr >
      <td rowspan="9">客服</td>
      <td rowspan="9"></td>
      <td >通讯录内-专属客服入口</td>
  </tr>
  <tr>
       <td >客服身份标记</td>
  </tr>
  <tr>
       <td >访客身份标记</td>
  </tr>
  <tr>
       <td >访客发送消息自动匹配客服</td>
  </tr>
  <tr>
      <td >客服欢迎词</td>
  </tr>
  <tr>
      <td >访客资料详情</td>
  </tr>
 
</table>
