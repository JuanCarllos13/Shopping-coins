import React from 'react'
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

export default function App() {
	const [fontsLoaded] = useFonts({
		Sora_400Regular,
		Sora_700Bold,
	})

	const netInfo = useNetInfo()

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

				<Routes />
			</SafeAreaProvider>
		</ThemeProvider>
	)
}
