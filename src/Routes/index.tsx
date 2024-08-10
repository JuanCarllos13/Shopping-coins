import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import Toast from 'react-native-toast-message'

import { AuthRoutes } from './auth.routes'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '@Contexts/Auth'
import { AppRoutes } from './app.routes'

export function Routes() {
	const { user } = useContext(AuthContext)

	console.log('user', user)
	const insets = useSafeAreaInsets()
	return (
		<NavigationContainer>
			{user?.uid ? <AppRoutes /> : <AuthRoutes />}

			<Toast
				topOffset={insets.top}
				config={{
					Toast,
				}}
			/>
		</NavigationContainer>
	)
}
