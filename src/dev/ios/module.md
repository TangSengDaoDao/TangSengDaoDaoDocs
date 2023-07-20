
# 模块开发

## 宗旨

整个项目采用模块化开发，宗旨就是只需要一句配置决定模块的安装和卸载。

```objc

pod 'WuKongLogin', :path => './Modules/WuKongLogin'  ##  登录模块

```

在Podfile里加上面的配置，然后 `pod install` 就有登录了，如果重写登录模块，只需要新建模块，然后按模块规则实现登录的逻辑，把上述配置换成你新实现的模块，然后pod install即可，无需再更改其他任何代码

## 创建模块

```objc

cd Modules

pod lib create 模块名
```

`删除新建模块下的.git文件夹，要不然提交后会把整个项目的git结构搞乱`

在`Podfile`下引入新的模块，然后 `pod install`

```objc

pod '模块名', :path => './Modules/模块名'  

```

在Xcode下将看到Pods下的 Development Pods目录内有新建的模块，然后就可以在新建的模块下开发了

## 模块规则

模块有入口文件和对外提供的方法（Method）组合而成。


<img src="./module.png" />

1. 模块A向`WuKongBase`注册M1方法。
2. 模块B向`WuKongBase`获取并调用M1方法。


以下都以登录模块（`WuKongLogin`）为例

### 模块配置

WuKongLogin/Pod/WuKongLogin.podspec 为例

```objc
...
s.source_files = 'WuKongLogin/Classes/**/*'  // source_files为 模块的源码目录一般是 模块名/Classes/**/*
  
s.resource_bundles = {
    'WuKongLogin_images' => ['WuKongLogin/Assets/Images.xcassets']   // WuKongLogin换成自己的模块名（记得在跟Classes同级目录内创建 Assets和在Assets下创建Images.xcassets目录）
}
s.resources = ['WuKongLogin/Assets/Lang']    // 多语言资源 WuKongLogin换成自己的模块名

s.dependency 'WuKongBase'         // 引入依赖模块 WuKongBase

...
```

修改后记得 `pod install`

### 模块入口


在`WuKongLogin`下的 `Classes` 创建如下目录和文件

```
├── Src       // 源码目录
├── WKLoginModule.h   // 模块入口文件，建议命名规则：WK+模块名+Module.h
└── WKLoginModule.m  
```

`pod install`



WKLoginModule.h

```objc
@interface WKLoginModule : WKBaseModule

@end
```


WKLoginModule.m

```objc

@WKModule(WKLoginModule)  // 模块注册宏，WKLoginModule为模块名，必须和文件名一致（这个非常重要，需要这个注解模块才会被注册到应用内）
@implementation WKLoginModule

// ----- 必需实现的 -----

// 模块全局唯一ID 一般建议 WuKong + 模块名
-(NSString*) moduleId {
    return @"WuKongLogin";
}

// 模块启动时调用
- (void)moduleInit:(WKModuleContext*)context{
    NSLog(@"【WuKongLogin】模块初始化！");
}

// ----- 非必需实现的方法 -----
// 模块启动中 AppDelegate didFinishLaunching时期调用 晚于moduleInit
-(BOOL) moduleDidFinishLaunching:(WKModuleContext*_Nonnull) context {
    return true
}
// 数据库已装载完毕，在这里可以用于创建自己的业务层面的表
-(void) moduleDidDatabaseLoad:(WKModuleContext*_Nonnull) context {
}
// 模块的类型 默认为 WKModuleTypeDefault，还有WKModuleTypeResource类型，这个类型应用场景不多后续有需要再细说
- (WKModuleType)moduleType {
    return WKModuleTypeDefault;
}
// 模块执行的顺序，越大模块执行越靠前
- (NSInteger)moduleSort {
    return 0;
}
@end
```

### 模块方法

```objc

...

// 模块启动时调用
- (void)moduleInit:(WKModuleContext*)context{
    // 注册登录展示逻辑(setMethod为内置的方法，WKPOINT_LOGIN_SHOW为WuKongBase定义好了的注册ID)
    [self setMethod:WKPOINT_LOGIN_SHOW handler:^id _Nullable(id  _Nonnull param) {
        WKLoginVC *loginVC = [WKLoginVC new]; // WKLoginVC 为当前模块自己开发的登录页面
        [[WKNavigationManager shared] resetRootViewController:loginVC]; // WKNavigationManager 为全局导航栏管理器
        return nil;
    }];
}

...

```

### 模块总结

整个过程分为三步

1. 在podspec配置好模块相关参数
2. 编写模块入口文件
3. 提供自己模块方法