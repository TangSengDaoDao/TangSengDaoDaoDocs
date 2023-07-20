import { h } from "vue";
import Theme from "vitepress/theme";
import "./styles/var.css";
import "./styles/custom.css";
import 'uno.css';

import HomePreview from "./components/HomePreview.vue";

export default {
	...Theme,
	Layout() {
		return h(Theme.Layout, null, {
			"home-features-after": () => h(HomePreview),
		});
	},
};
