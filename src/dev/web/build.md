# 项目编译

唐僧叨叨 PC 端支持 Web 端、Mac 端、Windows 端、Linux 端，是一款高颜值 IM 即时通讯聊天软件，让企业轻松拥有自己的即时通讯软件。由[悟空 IM](https://githubim.com/)提供动力。

<p>
	<a href="https://zh-hans.react.dev/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/React-17.0.2-%236CB52D.svg?logo=React" alt="React" />
	</a> &nbsp;
	<a href="https://ts.nodejs.cn/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/TypeScript-5.0.4-%236CB52D.svg?logo=TypeScript&logoColor=FFF" alt="TypeScript" />
	</a> &nbsp;
	<a href="https://yarn.bootcss.com/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/Yarn-1.22.17-%236CB52D.svg?logo=Yarn&logoColor=FFF" alt="Yarn" />
	</a> &nbsp;
	<a href="https://nodejs.org/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/Node-18.17.1-%236CB52D.svg?logo=Node&logoColor=FFF" alt="Node">
	</a> &nbsp;
	<a href="https://webpack.docschina.org/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/Webpack-5.88.2-%236CB52D.svg?logo=Webpack" alt="Webpack" />
	</a> &nbsp;
	<a href="https://www.electronjs.org/zh/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/Electron-26.0.0-%236CB52D.svg?logo=Electron&logoColor=FFF" alt="Electron" />
	</a> &nbsp;
	<a href="https://www.electron.build/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/ElectronBuilder-24.9.1-%236CB52D.svg?logo=ElectronBuilder&logoColor=FFF" alt="ElectronBuilder" />
	</a> &nbsp;
	<a href="https://semi.design/zh-CN/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/Semi UI-2.24.2-%236CB52D.svg?logo=SemiUI" alt="SemiUI">
	</a> &nbsp;
	<a href="https://turbo.build/repo" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/turbo-2.0.9-%236CB52D.svg?logo=Turbo&logoColor=FFF" alt="Turbo" />
	</a> &nbsp;
	<a href="https://githubim.com/" target="_blank" rel="noopener" style="display:inline-block;">
		<img src="https://img.shields.io/badge/WukongIm-1.2.10-%236CB52D.svg?logo=WukonIm" alt="Wukongim" />
	</a> &nbsp;
</p>

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
