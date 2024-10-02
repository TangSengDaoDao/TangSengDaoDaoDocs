# 项目配置

## 环境配置

默认提供二套环境配置，分别为：

::: tip 提示

- 开发环境配置：`dev.ts`
- 生产环境配置：`prod.ts`
:::

::: code-group

```ts [src/config/modules/dev.ts]
export default {
  APP_ENV: 'dev', // 环境
  APP_URL: 'https://api.botgate.cn/v1/' // API接口
};
```

```ts [src/config/modules/prod.ts]
export default {
  APP_ENV: 'prod', // 环境
  APP_URL: '/api/v1/' // API接口
};
```

:::

其中 `APP_ENV` `APP_URL` 为必要配置，即不管是在开发、测试，还是生产环境都需要使用到。

## 应用配置（框架配置）

开发者请在 `config/index.ts` 文件中更新自己的应用配置。

``` ts [src/config/index.ts]
// 首页地址（默认）
export const HOME_URL = '/home';

// 登录页地址（默认）
export const LOGIN_URL = '/login';

// 默认主题颜色
export const DEFAULT_PRIMARY = '#E4633B';

// 路由白名单地址（必须是本地存在的路由 staticRouter.ts 中）
export const ROUTER_WHITE_LIST: string[] = ['/login'];

// 自定义应用根据运行环境获取配置
const modules: any = {};
const moduleFiles = import.meta.glob('./modules/*.ts', { import: 'default', eager: true });

Object.keys(moduleFiles).forEach(name => {
  const key = name.replace('./modules/', '').replace('.ts', '').trim();
  modules[key] = moduleFiles[name];
});

const TSDD_CONFIG = window.TSDD_CONFIG ? window.TSDD_CONFIG : {};
// 默认应用配置
export const BU_DOU_CONFIG = {
  APP_TITLE: '唐僧叨叨后台管理',
  APP_TITLE_SHORT: '唐',
  ...modules[process.env.APP_ENV as any],
  ...TSDD_CONFIG
};

```
