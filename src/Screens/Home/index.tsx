import React from 'react'
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

export function Home() {
	const theme = useTheme()
	const navigation = useNavigation()

	return (
		<Container>
			<Header>
				<BoxImage>
					<Photo source={{ uri: 'https://github.com/juanCarllos13.png' }} />

					<BoxText>
						<TextNameApp>Shopping Coins</TextNameApp>
					</BoxText>
				</BoxImage>

				<BoxImage>
					<BoxNameUser>
						<Hello>Olá,</Hello>
						<Text> </Text>
						<UserName>Juan</UserName>
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
					renderItem={({ item }) => <Card data={item} onPress={() => {}} />}
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
