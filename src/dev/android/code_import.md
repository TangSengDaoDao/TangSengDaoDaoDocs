
### 源码引入

如果你购买了唐僧叨叨的收费模块，可以通过以下步骤将该模块引入到项目中。下面以`wkgroupmanage`（群管理模块）举例

#### 第一步

将`wkgroupmanage`源码文件夹放在项目的根目录，并在项目的`settings.gradle`文件的最后面添加该模块
```groovy
include ':wkgroupmanage'
```

如下图所示

![](./code_import_1.png)
#### 第二步

在项目的`app`模块的`build.gradle`文件中添加该模块，并执行`Sync Now`
```groovy
implementation project(path: ':wkgroupmanage')
```
如下图所示

![](./code_import_2.png)

#### 第三步

在项目的`app`模块的`Application`中引入该模块
```kotlin
// 引入群管理模块
WKGroupManageApplication.getInstance().init()
```
完成以上步骤通过源码添加模块就完成了
