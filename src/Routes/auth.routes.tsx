import React, {
	createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { SignIn } from '@Screens/Onboarding/SignIn'
import { SignUp } from '@Screens/Onboarding/SignUp'

const { Navigator, Screen } = createNativeStackNavigator()

export function AuthRoutes() {
	return (
		<Navigator initialRouteName="Welcome">

			<Screen
				name="SignIn"
				component={SignIn}
				options={{
					headerShown: false,
				}}
			/>


			<Screen
				name="SignUp"
				component={SignUp}
				options={{
					headerShown: false,
				}}
			/>



		</Navigator>
	)
}
