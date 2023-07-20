import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
	"/guide": [
		{
			text: "介绍",
			collapsed: false,
			items: [
				{ text: "什么是唐僧叨叨", link: "/guide/" },
				{ text: "Demo下载", link: "/guide/demo" },
				{ text: "快速搭建体验", link: "/guide/quick" },
			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "常见问题", link: "/guide/others" },
			],
		}
	],
	"/dev/backend": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				{ text: "一键部署（推荐）", link: "/dev/backend/deploy" },
				{ text: "Docker Compose部署", link: "/dev/backend/deploy-compose" },
				{ text: "验证部署", link: "/dev/backend/verify" },
			],
		},
		{
			text: "进阶",
			collapsed: false,
			items: [
				{ text: "项目结构", link: "/dev/backend/structure" },
				{ text: "项目配置", link: "/dev/backend/fullconfig" },
				{ text: "API文档", link: "/dev/backend/api" },
				{ text: "模块开发", link: "/dev/backend/module" },

			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "常见问题", link: "/dev/backend/question" },
			],
		}
	],
	"/dev/ios": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				{ text: "介绍", link: "/dev/ios/intro" },
				{ text: "项目编译", link: "/dev/ios/build" },
				{ text: "项目配置", link: "/dev/ios/config" },
			],
		},
		{
			text: "进阶",
			collapsed: false,
			items: [
				{ text: "项目结构", link: "/dev/ios/structure" },
				{ text: "模块开发", link: "/dev/ios/module" },

			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "常见问题", link: "/dev/ios/question" },
			],
		}
	],
	"/dev/android": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				{ text: "介绍", link: "/dev/android/intro" },
				{ text: "项目编译", link: "/dev/android/build" },
				{ text: "项目配置", link: "/dev/android/config" },
			],
		},
		{
			text: "进阶",
			collapsed: false,
			items: [
				{ text: "项目结构", link: "/dev/android/structure" },
				{ text: "模块开发", link: "/dev/android/module" },

			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "常见问题", link: "/dev/android/question" },
			],
		}
	],
	"/dev/web": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				{ text: "介绍", link: "/dev/web/intro" },
				{ text: "项目编译", link: "/dev/web/build" },
				{ text: "项目配置", link: "/dev/web/config" },
			],
		},
		{
			text: "进阶",
			collapsed: false,
			items: [
				{ text: "项目结构", link: "/dev/web/structure" },
				{ text: "模块开发", link: "/dev/web/module" },

			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "常见问题", link: "/dev/web/question" },
			],
		}
	],
	"/demo": [
		{ text: "Demo", link: "/demo/" },
	],
};
