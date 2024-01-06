import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url: string) {
	const { app, store, router } = createApp();

	await router.push(url);
	await router.isReady();

	// passing SSR context object which will be available via useSSRContext()
	// @vitejs/plugin-vue injects code into a component's setup() that registers
	// itself on ctx.modules. After the render, ctx.modules would contain all the
	// components that have been instantiated during this render call.
	const ctx = {} as any;
	const html = await renderToString(app, ctx);

	const initialState = store.state.value;

	return [html, initialState];
}
