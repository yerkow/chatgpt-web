import type {App} from 'vue'
import {createI18n} from 'vue-i18n'
import enUS from './en-US'
import ruRU from './ru-RU'
import type {Language} from '@/store/modules/app/helper'
import {useAppStoreWithOut} from '@/store/modules/app'

const appStore = useAppStoreWithOut()

const defaultLocale = appStore.language || 'ru-RU'

const i18n = createI18n({
	locale: defaultLocale,
	fallbackLocale: 'en-US',
	allowComposition: true,
	messages: {
		'en-US': enUS,
		'ru-RU': ruRU,
	},
})

export const t = i18n.global.t

export function setLocale(locale: Language) {
	i18n.global.locale = locale
}

export function setupI18n(app: App) {
	app.use(i18n)
}

export default i18n
