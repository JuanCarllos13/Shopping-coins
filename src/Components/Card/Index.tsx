import React from 'react'
import {
	BoxImage,
	BoxInfos,
	BoxMoney,
	Container,
	Image,
	MoneyText,
	PackageText,
	UnitText,
} from './styles'
import MacBook from '@assets/macbook.png'
import { View } from 'react-native'
import { ButtonIcon } from '@Components/ButtonIcon'
import { Car } from 'phosphor-react-native'
import { Shop } from 'src/DTOs/ShopDTO'

interface CardProps {
	data: Shop
	onPress: () => void
}

export function Card({data, onPress}: CardProps) {
	return (
		<Container>
			<BoxImage>
				<Image source={data?.image} />
			</BoxImage>

			<BoxInfos>
				<PackageText>{data?.title}</PackageText>

				<UnitText>{data?.description}</UnitText>

				<BoxMoney>
					<View>
						<MoneyText>R$</MoneyText>

						<MoneyText size={18}>{data?.price}</MoneyText>
					</View>

					<ButtonIcon icon={Car} onPress={onPress}/>
				</BoxMoney>
			</BoxInfos>
		</Container>
	)
}
