# 项目编译

唐僧叨叨 PC 端支持 Web 端、Mac 端、Windows 端、Linux 端，是一款高颜值 IM 即时通讯聊天软件，让企业轻松拥有自己的即时通讯软件。由[悟空 IM](https://githubim.com/)提供动力。

## 获取源码

::: tip 提示
本地开发建议`node v18.17.1`、 `yarn 1.22.17`
:::

1. 获取源码

```shell [git]
git clone https://github.com/TangSengDaoDao/TangSengDaoDaoWeb.git
```

2. 跳转目录`TangSengDaoDaoWeb`

```shell [terminal]
cd TangSengDaoDaoWeb
```

## 安装依赖

```shell [yarn]
yarn install
```

## 本地运行

::: code-group

```shell [web]
yarn run dev
```

```shell [electron]
yarn run dev-ele
```

:::

## 编译

::: code-group

```shell [web]
yarn run build
```

:::

## 打包桌面应用

::: tip 提示

1. 注意先运行yarn build编译
2. win打包应用需要在`apps/web`下执行

:::

::: code-group

```shell [mac]
yarn run build-ele:mac
```

```shell [win]
yarn run build-ele:win
```

```shell [linx]
yarn run build-ele:linux
```

:::
