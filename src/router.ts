import { createRouter as _createRouter, createMemoryHistory, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		name: 'home',
		component: () => import('./pages/Home.vue'),
		meta: {
			pageName: 'Home',
		},
	},
];

export function createRouter() {
	const router = _createRouter({
		history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
		routes,
	});
	return router;
}
