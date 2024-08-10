import React from 'react'
import { Modal } from 'react-native'
import { Container, Content, Title, Footer, Description } from './styles'
import { Button } from '@Components/Button'
import { useTheme } from 'styled-components'
import { storageBiometrySave } from 'src/Storage/Biometria'

export function ModalPermissions() {
	const theme = useTheme()

	const acceptBiometry = async () => {
		storageBiometrySave('true')
	}

	return (
		<Modal animationType="fade" transparent>
			<Container>
				<Content>
					<Title>DESEJA USAR DIGITAL OU RECONHECIMENTO FACIAL?</Title>

					<Description>
						Para facilitar a sua entrada no app durante o dia a dia, você pode
						cadastrar a sua digital ou reconhecimento facial. Ah, você pode
						mudar depois se quiser, tá?
					</Description>

					<Footer>
						<Button
							text="Usar digital/Reconhecimento facial"
							onPress={acceptBiometry}
						/>

						<Button
							text="Agora não"
							color={theme.COLORS.BACKGROUND_PRIMARY}
							textColor={theme.COLORS.PURPLE_DARK}
							style={{ borderWidth: 1, borderColor: theme.COLORS.PURPLE_DARK }}
							onPress={() => {}}
						/>
					</Footer>
				</Content>
			</Container>
		</Modal>
	)
}
