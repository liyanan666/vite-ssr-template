import { defineStore } from 'pinia';

const useStore = defineStore('store', {
	state: () => ({
		test: false,
	}),
});

export default useStore;
