import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
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
		</Navigator>
	)
}
