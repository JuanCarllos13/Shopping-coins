import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { EditDada } from './EditDada'

const { Navigator, Screen } = createNativeStackNavigator()

export function SettingsRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>

			<Screen name="EditDada" component={EditDada} />
		</Navigator>
	)
}
