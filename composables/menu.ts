import {defineStore} from "pinia";
export const useMenuStore = defineStore('menu', {
    state: () => ({
        topMenuList: new Array<IMenuItem>(),
        activeTopMenu: 0,
        activeSideMenu: {
            url: '',
            breadcrumb: [''],
            key: ''
        }
    }),
    getters: {
        getTopMenuList(): IMenuItem[] {
            return this.topMenuList
        }
        ,
        getSideMenu():IMenuItem[] {
            if (this.topMenuList[this.activeTopMenu]) {
                return this.topMenuList[this.activeTopMenu].children
            }else {
                return []
            }

        }
    },
    actions: {
        setActiveTopMenu(index: number) {
            this.activeTopMenu = Number(index)
        },
        setActiveSideMenu(key: string, breadcrumb: string[], url: string) {
            this.activeSideMenu.key = key
            this.activeSideMenu.url = url
            this.activeSideMenu.breadcrumb = breadcrumb
        },
        async init() {
            const { data } = await useFetch('/api/menu');
            const menus = data.value;
            const map = new Map<string, Set<IMenuItem>>()
            const firstLevel: Set<IMenuItem> = new Set<IMenuItem>();
            if (menus) {
                for (const index in menus) {
                    let item = {
                        id: menus[index].id,
                        pid: menus[index].pid,
                        name: menus[index].name,
                        url: menus[index].url,
                        icon: menus[index].icon,
                        type: menus[index].type,
                        children: []
                    }
                    try {
                        const route = useRoute()
                        if(item.url == route.fullPath) {
                            this.activeSideMenu.key = item.id
                            this.activeSideMenu.url = item.url
                            this.activeSideMenu.breadcrumb = [item.name]
                        }
                    } catch (e) {

                    }
                    if (menus[index].type == 'navbar') {
                        firstLevel.add(item)
                    }
                    if (map.get(item.pid)){
                        map.get(item.pid)?.add(item)
                    } else {
                        map.set(item.pid, new Set<IMenuItem>([item]))
                    }
                }
                fillTree(firstLevel, map)
                this.topMenuList = Array.of(...firstLevel)
            }

        }
    }
})