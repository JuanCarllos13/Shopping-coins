import React, { useState } from 'react'
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

import { ShopType } from 'src/DTOs/ShopDTO'
import { sendNotification } from '@Utils/push-notification'
import { useNavigation } from '@react-navigation/native'

export function ShopScreen() {
	const theme = useTheme()
	const [loadingItemId, setLoadingItemId] = useState<string | null>(null)
	const [checkItemId, setCheckItemId] = useState<string | null>(null)
	const navigate = useNavigation()

	const delay = (ms: number) =>
		new Promise((resolve) => setTimeout(resolve, ms))

	const buyShop = async (item: ShopType) => {
		try {
			setLoadingItemId(item.id)

			await delay(2000)

			setLoadingItemId(null)
			setCheckItemId(item.id)
			await delay(2000)
		} finally {
			setLoadingItemId(null)
			setCheckItemId(null)

			sendNotification({
				titleShop: `${item.title} está à caminho! 🥳`,
				description: '🎁 Parabéns, sua compra foi confirmada!',
			})
		}
	}

	return (
		<Container>
			<Header>
				<ButtonBack onPress={() => navigate.goBack()}>
					<ArrowLeft color={theme.COLORS.PURPLE_DARK} weight="bold" />
				</ButtonBack>

				<BackButtonText>Voltar</BackButtonText>
			</Header>

			<Content>
				<Title>Shop</Title>

				<FlatList
					data={SHOP}
					numColumns={2}
					keyExtractor={(item) => item.id}
					showsVerticalScrollIndicator={false}
					renderItem={({ item }) => (
						<Card
							data={item}
							onPress={() => buyShop(item)}
							isLoading={loadingItemId === item.id}
							checked={checkItemId === item.id}
						/>
					)}
				/>
			</Content>
		</Container>
	)
}
