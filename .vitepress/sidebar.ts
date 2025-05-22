import { DefaultTheme } from "vitepress";

export const sidebar: DefaultTheme.Sidebar = {
	"/guide": [
		{
			text: "介绍",
			collapsed: false,
			items: [
				{ text: "什么是唐僧叨叨", link: "/guide/" },
				{ text: "快速入口", link: "/guide/fastentry" },
				{ text: "问题解决途径", link: "/guide/support" },
				{ text: "线上Demo体验", link: "/guide/demo" },
				{ text: "自己搭建体验", link: "/guide/quickstart" },
			],
		},
		{
			text: "其他",
			collapsed: false,
			items: [
				{ text: "法律声明", link: "/guide/legal" },
				{ text: "常见问题", link: "/guide/question" },
			],
		},
	],
	"/dev/backend": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				// { text: "一键部署（推荐）", link: "/dev/backend/deploy" },
				{ text: "Docker Compose部署", link: "/dev/backend/deploy-compose" },
				{ text: "小皮面板部署", link: "/dev/backend/xp-panel" },
				{ text: "1Panel部署", link: "/dev/backend/1panel" },
				{ text: "宝塔部署", link: "/dev/backend/btpanle" },
				{ text: "Rainbond部署", link: "/dev/backend/rainbond" },
				// { text: "K8S部署", link: "/dev/backend/k8s" },
				{ text: "端口说明", link: "/dev/backend/port" },
				{ text: "验证部署", link: "/dev/backend/verify" },
				{ text: "连接MYSQL", link: "/dev/backend/deploy-mysql" },
				{ text: "nginx配置(可选)", link: "/dev/backend/config-nginx" },
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
				{ text: "模块引入", link: "/dev/backend/moduleimport" },
				{ text: "常见问题", link: "/dev/backend/question" },
			],
		},
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
				{ text: "模块引入", link: "/dev/ios/moduleimport" },
				{ text: "常见问题", link: "/dev/ios/question" },
			],
		},
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
				{
					text: "模块引入",
					collapsed: false,
					items: [
						{ text: "非源码", link: "/dev/android/aar_import" },
						{ text: "源码", link: "/dev/android/code_import" },
					],
				},
				{ text: "常见问题", link: "/dev/android/question" },
			],
		},
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
				{ text: "模块引入", link: "/dev/web/moduleimport" },
				{ text: "常见问题", link: "/dev/web/question" },
			],
		},
	],
	"/dev/manager": [
		{
			text: "快速开始",
			collapsed: false,
			items: [
				{ text: "介绍", link: "/dev/manager/intro" },
				{ text: "项目编译", link: "/dev/manager/build" },
				{ text: "项目配置", link: "/dev/manager/config" },
			],
		},
		{
			text: "用户手册",
			collapsed: false,
			items: [
				{ text: "通用功能", link: "/dev/manager/user-manual/general" },
				{ text: "首页", link: "/dev/manager/user-manual/dashboard" },
				{
					text: "用户",
					collapsed: false,
					items: [
						{ text: "新增用户", link: "/dev/manager/user-manual/user/adduser" },
						{ text: "用户列表", link: "/dev/manager/user-manual/user/userlist" },
						{ text: "封禁用户列表", link: "/dev/manager/user-manual/user/disablelist" },
					],
				},
				{
					text: "群组",
					collapsed: false,
					items: [
						{ text: "群列表", link: "/dev/manager/user-manual/group/grouplist" },
						{ text: "封禁群列表", link: "/dev/manager/user-manual/group/groupdisablelist" },
					],
				},
				{
					text: "消息",
					collapsed: false,
					items: [
						{ text: "消息记录", link: "/dev/manager/user-manual/message/sendmsglist" },
						{ text: "违禁词列表", link: "/dev/manager/user-manual/message/prohibitwords" },
					],
				},
				{
					text: "举报",
					collapsed: false,
					items: [
						{ text: "举报用户", link: "/dev/manager/user-manual/report/user" },
						{ text: "举报群聊", link: "/dev/manager/user-manual/report/group" },
					],
				},
				// { text: "工作台",
				// 	collapsed: false,
				// 	items: [
				// 		{ text: "应用管理", link: "/dev/manager/user-manual/workplace/manage" },
				// 		{ text: "工作台设置", link: "/dev/manager/user-manual/workplace/configuration" },
				// 	]
				// },
				{ text: "工具", collapsed: false, items: [{ text: "APP升级", link: "/dev/manager/user-manual/tool/appupdate" }] },
				{
					text: "设置",
					collapsed: false,
					items: [
						{ text: "通用设置", link: "/dev/manager/user-manual/setting/currencysetting" },
						{ text: "修改登录密码", link: "/dev/manager/user-manual/setting/updatepwd" },
					],
				},
			],
		},
		{
			text: "二次开发",
			collapsed: false,
			items: [{ text: "项目结构", link: "/dev/manager/structure" }],
		},
		{
			text: "其他",
			collapsed: false,
			items: [{ text: "常见问题", link: "/dev/manager/question" }],
		},
	],
	"/demo": [{ text: "Demo", link: "/demo/" }],
};
