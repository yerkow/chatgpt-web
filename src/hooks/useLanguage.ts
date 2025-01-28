import {computed} from 'vue'
import {enUS, ruRU} from 'naive-ui'
import {useAppStore} from '@/store'
import {setLocale} from '@/locales'

export function useLanguage() {
	const appStore = useAppStore()

	const language = computed(() => {
		switch (appStore.language) {
			case 'ru-RU':
				setLocale('ru-RU')
				return ruRU
			case 'en-US':
				setLocale('en-US')
				return enUS
			default:
				setLocale('ru-RU')
				return ruRU
		}
	})

	return {language}
}
