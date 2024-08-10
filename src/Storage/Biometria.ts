import AsyncStorage from '@react-native-async-storage/async-storage'

import { BIOMETRY } from './StorageConfig'

export async function storageBiometrySave(Biometry: string) {
	await AsyncStorage.setItem(BIOMETRY, JSON.stringify(Biometry))
}

export async function storageBiometryGet() {
	const storage = await AsyncStorage.getItem(BIOMETRY)

	const Biometry = storage ? JSON.parse(storage) : ''
	return Biometry
}

export async function storageBiometryRemove() {
	await AsyncStorage.removeItem(BIOMETRY)
}
