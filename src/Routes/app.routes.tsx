import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { SettingsRoutes } from '@Screens/Profile/profileNavigator'
import { AppTabRoutes } from './app.tabs'

const { Navigator, Screen } = createNativeStackNavigator()


export function AppRoutes() {
	return (
		<Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Screen name="Home" component={AppTabRoutes} />

			<Screen name="SettingsRoutes" component={SettingsRoutes} />
		</Navigator>
	)
}
