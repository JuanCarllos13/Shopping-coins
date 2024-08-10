import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '@Screens/Home'
import React from 'react'
import { Platform } from 'react-native'
import { useTheme } from 'styled-components/native'

import { House, Bag, User } from 'phosphor-react-native'
import { Profile } from '@Screens/Profile'
import { ShopScreen } from '@Screens/Shop'

const { Navigator, Screen } = createBottomTabNavigator()

export function AppTabRoutes() {
	const Theme = useTheme()
	return (
		<Navigator
			screenOptions={() => ({
				animationEnabled: true,
				headerShown: false,
				tabBarActiveTintColor: Theme.COLORS.PURPLE_DARK,
				tabBarInactiveTintColor: Theme.COLORS.GRAY_100,
				tabBarStyle: {
					height: Platform.OS === 'android' ? 76 : 96,
					backgroundColor: Theme.COLORS.WHITE,
					paddingBottom: 15,
					paddingTop: 15,
					borderTopLeftRadius: 20,
					borderTopRightRadius: 20,
				},
			})}
		>
			<Screen
				name="Home"
				component={Home}
				options={{
					tabBarLabelStyle: { fontSize: 16, color: 'white' },
					tabBarIcon: ({ color }) => (
						<House color={color} weight="fill" size={30} />
					),
				}}
			/>

			<Screen
				name="Bag"
				component={ShopScreen}
				options={{
					tabBarLabelStyle: { fontSize: 16, color: 'white' },
					tabBarIcon: ({ color }) => (
						<Bag color={color} weight="fill" size={30} />
					),
				}}
			/>

			<Screen
				name="Person"
				component={Profile}
				options={{
					tabBarLabelStyle: { fontSize: 16, color: 'white' },
					tabBarIcon: ({ color }) => (
						<User color={color} weight="fill" size={30} />
					),
				}}
			/>
		</Navigator>
	)
}
