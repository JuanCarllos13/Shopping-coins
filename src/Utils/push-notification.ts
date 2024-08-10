import OneSignal from 'react-native-onesignal'

interface PushProps {
	titleShop: string
	description: string
}

export const sendNotification = async ({
	description,
	titleShop,
}: PushProps) => {
	try {
		// Obtém o estado do dispositivo
		const deviceState = await OneSignal.getDeviceState()
		const playerId = deviceState?.userId // ID do usuário

		if (playerId) {
			// Envia a notificação
			const response = await fetch(
				'https://onesignal.com/api/v1/notifications',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
						Authorization:
							'Basic MzRiNTBjYTAtYWY2OC00YThlLTlhY2MtNmVhODNjOTM0NGM0',
					},
					body: JSON.stringify({
						app_id: 'e5b27b34-11ba-4dbe-8557-23554f52d603',
						headings: { en: `${titleShop}` },
						contents: { en: `${description}` },
						include_player_ids: [playerId],
					}),
				},
			)

			const responseData = await response.json()
			console.log('Notification Response:', responseData)
		} else {
			console.log('Player ID não encontrado.')
		}
	} catch (error) {
		console.error('Error sending notification:', error)
	}
}
