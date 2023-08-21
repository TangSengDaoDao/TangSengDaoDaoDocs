import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
	"/guide": [
		{
			text: "介绍",
			collapsed: false,
			items: [
				{ text: "什么是唐僧叨叨", link: "/guide/" },
				{ text: "问题解决途径", link: "/guide/support" },
				{ text: "线上Demo体验", link: "/guide/demo" },
				{ text: "自己搭建体验", link: "/guide/quickstart" },
			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "我们的开源", link: "/guide/source" },
				{ text: "法律声明", link: "/guide/legal" },
				{ text: "常见问题", link: "/guide/question" },
			],
		}
	],
	"/dev/backend": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				// { text: "一键部署（推荐）", link: "/dev/backend/deploy" },
				{ text: "Docker Compose部署", link: "/dev/backend/deploy-compose" },
				{ text: "K8S部署", link: "/dev/backend/k8s" },
				{ text: "需要开放的端口", link: "/dev/backend/port" },
				{ text: "验证部署", link: "/dev/backend/verify" },
				{ text: "连接MYSQL", link: "/dev/backend/deploy-mysql" },
			],
		},
		{
			text: "二次开发",
			collapsed: false,
			items: [
				{ text: "项目架构", link: "/dev/backend/architecture" },
				{ text: "推荐二次开发流程", link: "/dev/backend/workflow" },
				{ text: "开发环境搭建", link: "/dev/backend/devenv" },
				{ text: "项目结构", link: "/dev/backend/structure" },
				{ text: "项目配置", link: "/dev/backend/fullconfig" },
				{ text: "API文档", link: "https://apidocs.botgate.cn/" },
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
			text: "二次开发",
			collapsed: false,
			items: [
				{ text: "项目结构", link: "/dev/ios/structure" },
				{ text: "模块开发", link: "/dev/ios/module" },
				{ text: "打包注意事项", link: "/dev/ios/package_notes" },

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
			text: "二次开发",
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
			text: "二次开发",
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
