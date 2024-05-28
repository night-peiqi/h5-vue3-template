import { defineStore } from 'pinia'
import { NAVIGATION_LIUBAI } from '@/constants'

export const useSystemStore = defineStore('system', {
	state: () => {
		return {
			systemInfo: {},
			menuRect: {
				top: 0,
				bottom: 80,
				left: 281,
				right: 368,
				width: 87,
				height: 32
			}
		}
	},
	getters: {
		navigationHeight() {
			return this.menuRect.top + this.menuRect.height + NAVIGATION_LIUBAI
		}
	},
	actions: {
		setSystemInfo(payload) {
			console.log('设备信息', payload)
			this.systemInfo = payload
		},
		setMenuRect(payload) {
			console.log('胶囊菜单信息', payload)
			this.menuRect = payload
		}
	}
})
