import { DefaultTheme } from "vitepress/types/default-theme";

export const navbar: DefaultTheme.NavItem[] = [
	{
		text: " 指南",
		link: "/guide/",
		activeMatch: "^/guide/",
	},
	{
		text: "后端",
		link: "/dev/backend/deploy-compose",
		activeMatch: "^/dev/backend",
	},
	{
		text: "iOS",
		link: "/dev/ios/intro",
		activeMatch: "^/dev/ios"
	},
	{
		text: "Android",
		link: "/dev/android/intro",
		activeMatch: "^/dev/android"
	},
	{
		text: "Web",
		link: "/dev/web/intro",
		activeMatch: "^/dev/web"
	},
	{
		text: "管理后台",
		link: "/dev/manager/intro",
		activeMatch: "^/dev/manager"
	},
	{
		text: "收费模块",
		link: "/price/index"
	},
	{
		text: "演示Demo",
		link: "/guide/demo"
	},
	{
		text: '<img src="https://img.shields.io/github/stars/TangSengDaoDao/TangSengDaoDaoServer.svg?style=social&label=Star" alt="TangSengDaoDao" />',
		link: "https://github.com/TangSengDaoDao/TangSengDaoDaoServer"
	}
];
