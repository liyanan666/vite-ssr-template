import { defineStore } from 'pinia';

export interface TestState {
	data: string;
}

const useTestStore = defineStore('test', {
	state: (): TestState => ({
		data: 'hello',
	}),
});

export default useTestStore;
