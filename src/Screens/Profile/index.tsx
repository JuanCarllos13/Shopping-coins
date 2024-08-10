import React, { useContext } from 'react'
import { Container, Content, Header, Photo, UserName } from './styles'
import { Button } from '@Components/Button'
import { useTheme } from 'styled-components'
import { CardButtonInline } from '@Components/CardButtonInline'
import { UserCircle, Bank, BookBookmark } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '@Contexts/Auth'
import { Alert } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export function Profile() {
	const theme = useTheme()
	const navigation = useNavigation()
	const { SignOut, user } = useContext(AuthContext)


	async function handleSignOut() {
		Alert.alert(
			'Atenção!',
			'Você deseja sair da conta?',
			[
				{
					text: 'Cancelar',
					style: 'cancel',
				},
				{
					text: 'Sair',
					onPress: () => {
						SignOut()
					},
				},
			],
		)
	}

	return (
		<Container>
			<Header>
				{ user?.photoUrl ? (
					<Photo source={{ uri:  user?.photoUrl }} />
				) : (
					<Ionicons name="person" size={84} color={theme.COLORS.WHITE} />
				)}

				<UserName>{user?.displayName}</UserName>

				<Button
					text="Editar Perfil"
					color={theme.COLORS.GRAY_950}
					onPress={() =>
						navigation.navigate('SettingsRoutes', { screen: 'EditDada' })
					}
				/>
			</Header>

			<Content>
				<CardButtonInline icon={UserCircle} text="Detalhes do Perfil" />

				<CardButtonInline icon={Bank} text="Detalhes da Conta" />
				<CardButtonInline icon={BookBookmark} text="Histórico" />

				<Button
					text="Sair"
					color={theme.COLORS.PURPLE_DARK}
					onPress={handleSignOut}
				/>
			</Content>
		</Container>
	)
}
