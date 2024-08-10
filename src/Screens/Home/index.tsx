import React, { useContext, useState } from 'react'
import { FlatList, Text } from 'react-native'
import {
	BoxImage,
	BoxInline,
	BoxNameUser,
	BoxText,
	CarShopMoney,
	CarShopMoneyText,
	Container,
	Content,
	Footer,
	Header,
	Hello,
	Line,
	Photo,
	TextNameApp,
	UserName,
} from './styles'
import { Bell, Wallet, ShoppingBag } from 'phosphor-react-native'
import { useTheme } from 'styled-components'
import { Banner } from '@Components/Banner/Index'
import { Card } from '@Components/Card/Index'
import { Button } from '@Components/Button'
import { useNavigation } from '@react-navigation/native'
import { SHOP } from '@Database/shop'
import { ShopType } from 'src/DTOs/ShopDTO'
import { sendNotification } from '@Utils/push-notification'
import { AuthContext } from '@Contexts/Auth'

import { Ionicons } from '@expo/vector-icons'

export function Home() {
	const theme = useTheme()
	const navigation = useNavigation()
	const {user} = useContext(AuthContext)

	const [loadingItemId, setLoadingItemId] = useState<string | null>(null)
	const [checkItemId, setCheckItemId] = useState<string | null>(null)

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
				<BoxImage>

					{ user?.photoUrl ? (
						<Photo source={{ uri:  user?.photoUrl }} />
					) : (
						<Ionicons name="person" size={34} color={theme.COLORS.WHITE} />
					)}

					<BoxText>
						<TextNameApp>Shopping Coins</TextNameApp>
					</BoxText>
				</BoxImage>

				<BoxImage>
					<BoxNameUser>
						<Hello>Olá,</Hello>
						<Text> </Text>
						<UserName>{user?.displayName}</UserName>
					</BoxNameUser>

					<Bell size={24} color={theme.COLORS.WHITE} weight="fill" />
				</BoxImage>
			</Header>

			<Content>
				<CarShopMoney>
					<BoxInline>
						<Wallet
							color={theme.COLORS.BACKGROUND_SECONDARY}
							size={24}
							weight="bold"
						/>

						<CarShopMoneyText>LC 5.000.00</CarShopMoneyText>
					</BoxInline>

					<Line />

					<BoxInline>
						<ShoppingBag
							color={theme.COLORS.BACKGROUND_SECONDARY}
							size={24}
							weight="bold"
						/>
						<CarShopMoneyText>Shop</CarShopMoneyText>
					</BoxInline>
				</CarShopMoney>

				<Banner />

				<FlatList
					data={SHOP}
					horizontal
					showsHorizontalScrollIndicator={false}
					renderItem={({ item }) => (
						<Card
							data={item}
							onPress={() => buyShop(item)}
							isLoading={loadingItemId === item.id}
							checked={checkItemId === item.id}
						/>
					)}
				/>

				<Footer>
					<Button
						text="Ver todos os produtos"
						onPress={() => navigation.navigate('Bag')}
					/>
				</Footer>
			</Content>
		</Container>
	)
}
