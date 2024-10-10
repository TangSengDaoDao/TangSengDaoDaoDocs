import { defineConfig } from "vitepress";
import mdItCustomAttrs from "markdown-it-custom-attrs";

import UnoCSS from "unocss/vite";

import { navbar } from "./navbar";
import { sidebar } from "./sidebar";

export default defineConfig({
	title: "唐僧叨叨",
	description: "IM",
	lang: "zh-CN",
	ignoreDeadLinks: true,
	head: [
		["meta", { name: "keywords", content: "IM，即时通讯，开源即时通讯，唐僧叨叨聊天软件" }],
		["link", { rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
		["link", { rel: "stylesheet", href: "/css/fancybox.css" }],
		["script", { src: "/js/fancybox.umd.js" }],
		["script", { src: "https://hm.baidu.com/hm.js?945767791d09113d72014cd801857369" }], // 百度统计
	],
	markdown: {
		theme: {
			light: "vitesse-light",
			dark: "vitesse-dark",
		},
		config: (md) => md.use(mdItCustomAttrs, "image", { "data-fancybox": "gallery" }),
	},
	lastUpdated: true,
	srcDir: "./src",
	themeConfig: {
		logo: "/logo.svg",
		siteTitle: "唐僧叨叨",
		nav: navbar,
		sidebar: sidebar,
		lastUpdatedText: "上次更新",
		outlineTitle: "目录",
		outline: [2, 6],
		docFooter: {
			prev: "上一篇",
			next: "下一篇",
		},
		socialLinks: [
			{
        icon: {
          svg: '<svg t="1663266323098" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2880" width="200" height="200"><path d="M512 1024C230.4 1024 0 793.6 0 512S230.4 0 512 0s512 230.4 512 512-230.4 512-512 512z m259.2-569.6H480c-12.8 0-25.6 12.8-25.6 25.6v64c0 12.8 12.8 25.6 25.6 25.6h176c12.8 0 25.6 12.8 25.6 25.6v12.8c0 41.6-35.2 76.8-76.8 76.8h-240c-12.8 0-25.6-12.8-25.6-25.6V416c0-41.6 35.2-76.8 76.8-76.8h355.2c12.8 0 25.6-12.8 25.6-25.6v-64c0-12.8-12.8-25.6-25.6-25.6H416c-105.6 0-188.8 86.4-188.8 188.8V768c0 12.8 12.8 25.6 25.6 25.6h374.4c92.8 0 169.6-76.8 169.6-169.6v-144c0-12.8-12.8-25.6-25.6-25.6z" p-id="2881"></path></svg>',
        },
        link: 'https://gitee.com/TangSengDaoDao/TangSengDaoDaoServer',
      },
      { icon: 'github', link: 'https://github.com/TangSengDaoDao/TangSengDaoDaoServer' }
    ],
		footer: {
			message: `本文档内容版权属于 上海信必达网络科技有限公司，保留所有权利`,
			copyright: "Copyright © 2023 | Powered by 唐僧叨叨 | <a href='https://beian.miit.gov.cn/' target='_blank'>沪ICP备2021032718号-3</a> | <a href='https://beian.miit.gov.cn/' target='_blank'>沪ICP备2021032718号-5</a>",
		},
		search: {
			provider: "local",
			options: {
				translations: {
					button: { buttonText: "搜索文档", buttonAriaLabel: "搜索文档" },
					modal: {
						noResultsText: "无法找到相关结果",
						resetButtonTitle: "清除查询条件",
						footer: { selectText: "选择", navigateText: "切换", closeText: "关闭" },
					},
				},
			},
		},
	},
	vite: {
		optimizeDeps: {
			exclude: ["vitepress"],
		},
		server: {
			host: "0.0.0.0",
		},
		plugins: [UnoCSS()],
	},
});
