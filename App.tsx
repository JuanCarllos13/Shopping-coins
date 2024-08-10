import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import {
	useFonts,
	Sora_400Regular,
	Sora_700Bold,
} from '@expo-google-fonts/sora'
import { Loading } from '@Components/Loading'
import { ThemeProvider } from 'styled-components'
import { useNetInfo } from '@react-native-community/netinfo'
import { TopMessage } from '@Components/TopMessage'
import { WifiSlash } from 'phosphor-react-native'
import themes from './src/Theme'
import { Routes } from '@Routes/index'
import { AuthProvider } from '@Contexts/Auth'
import * as WebBrowser from 'expo-web-browser'
import OneSignal from 'react-native-onesignal'

WebBrowser.maybeCompleteAuthSession()

OneSignal.setAppId('e5b27b34-11ba-4dbe-8557-23554f52d603')

export default function App() {
	const [fontsLoaded] = useFonts({
		Sora_400Regular,
		Sora_700Bold,
	})

	const netInfo = useNetInfo()


	useEffect(() => {
		const unuSubscribe = OneSignal.setNotificationOpenedHandler((response) => {
			if (response.action) {
				return
			}
		})
		return () => unuSubscribe
	}, [])


	if (!fontsLoaded) {
		return <Loading />
	}
	return (
		<ThemeProvider theme={themes}>
			<SafeAreaProvider
				style={{ backgroundColor: themes.COLORS.BACKGROUND_PRIMARY }}
			>
				<StatusBar style="auto" />

				{!netInfo.isConnected && (
					<TopMessage title="Você está off-line" icon={WifiSlash} />
				)}

				<AuthProvider>
					<Routes />
				</AuthProvider>
			</SafeAreaProvider>
		</ThemeProvider>
	)
}
