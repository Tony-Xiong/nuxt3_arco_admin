import { defineStore } from 'pinia';

export const useAppStore = defineStore('app', {
    state: () => ({name: 'app'}),
    getters: {
        getAppName(): string {
            return this.name;
        }
    },
    actions: {
        updateAppName(name: string) {
            this.name = name
        }
    }
})