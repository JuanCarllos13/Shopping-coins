import React from 'react'
import {
	BackButtonText,
	ButtonBack,
	Container,
	Content,
	Header,
	Title,
} from './styles'

import { ArrowLeft } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { Card } from '@Components/Card/Index'
import { FlatList } from 'react-native'
import { SHOP } from '@Database/shop'

export function Shop() {
	const theme = useTheme()

	return (
		<Container>
			<Header>
				<ButtonBack>
					<ArrowLeft color={theme.COLORS.PURPLE_DARK} weight="bold" />
				</ButtonBack>

				<BackButtonText>Voltar</BackButtonText>
			</Header>

			<Content>
				<Title>Shop</Title>

				<FlatList
					data={SHOP}
					numColumns={2}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => <Card data={item} onPress={() => {}} />}
				/>
			</Content>
		</Container>
	)
}
