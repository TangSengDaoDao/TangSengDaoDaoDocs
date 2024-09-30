import { h } from "vue";
import type { EnhanceAppContext } from "vitepress";
import Theme from "vitepress/theme";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";

import HomePreview from "./components/HomePreview.vue";

import "./styles/var.css";
import "./styles/custom.css";
import 'uno.css';



export default {
	...Theme,
	Layout() {
		return h(Theme.Layout, null, {
			"home-features-after": () => h(HomePreview),
		});
	},
	enhanceApp({ app }: EnhanceAppContext) {
		enhanceAppWithTabs(app);
	},
};
