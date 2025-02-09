import {ss} from '@/utils/storage'

const LOCAL_NAME = 'appSetting'

export type Theme = 'light' | 'dark' | 'auto'

export type Language = 'en-US' | 'ru-RU'

export type FastDelMsg = '0' | '1'

export interface AppState {
	siderCollapsed: boolean
	theme: Theme
	language: Language
	fastDelMsg: FastDelMsg
}

export function defaultSetting(): AppState {
	return {siderCollapsed: false, theme: 'auto', language: 'ru-RU', fastDelMsg: '0'}
}

export function getLocalSetting(): AppState {
	const localSetting: AppState | undefined = ss.get(LOCAL_NAME)
	return {...defaultSetting(), ...localSetting}
}

export function setLocalSetting(setting: AppState): void {
	ss.set(LOCAL_NAME, setting)
}
