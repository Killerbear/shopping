import { createRouter, createWebHistory } from "vue-router";
import ShoppingView from "@/views/ShoppingView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "shopping",
			component: ShoppingView,
		},
	],
});

export default router;
