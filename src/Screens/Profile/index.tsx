import React from 'react'
import { Container, Content, Header, Photo, UserName } from './styles'
import { Button } from '@Components/Button'
import { useTheme } from 'styled-components'
import { CardButtonInline } from '@Components/CardButtonInline'
import { UserCircle, Bank, BookBookmark } from 'phosphor-react-native'

export function Profile() {
	const theme = useTheme()

	return (
		<Container>
			<Header>
				<Photo source={{ uri: 'https://github.com/juanCarllos13.png' }} />

				<UserName>Juan</UserName>

				<Button text="Editar Perfil" color={theme.COLORS.GRAY_950} />
			</Header>

			<Content>
				<CardButtonInline icon={UserCircle} text="Detalhes do Perfil" />

				<CardButtonInline icon={Bank} text="Detalhes da Conta" />
				<CardButtonInline icon={BookBookmark} text="Histórico" />
			</Content>
		</Container>
	)
}
