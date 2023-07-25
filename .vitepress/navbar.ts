import { DefaultTheme } from "vitepress/types/default-theme";

export const navbar: DefaultTheme.NavItem[] = [
	{
		text: " 指南",
		link: "/guide/",
		activeMatch: "^/guide/",
	},
	{
		text: "后端",
		link: "/dev/backend/deploy",
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
		text: "Web/PC",
		link: "/dev/web/intro",
		activeMatch: "^/dev/web"
	},
	{
		text: "收费模块",
		link: "/price/index"
	},
	{
		text: "项目地址",
		activeMatch: "^/project",
		items: [
			{ text: "Github", link: "https://github.com/TangSengDaoDao/TangSengDaoDaoServer" },
			{ text: "Gitee", link: "https://gitee.com/TangSengDaoDao/TangSengDaoDaoServer" },
		],
	},
];
