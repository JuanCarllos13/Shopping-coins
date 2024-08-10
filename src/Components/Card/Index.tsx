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
import { View } from 'react-native'
import { ButtonIcon } from '@Components/ButtonIcon'
import { ShoppingCartSimple } from 'phosphor-react-native'
import { ShopType } from 'src/DTOs/ShopDTO'

interface CardProps {
	data: ShopType
	onPress: () => void
	isLoading?: boolean
	checked?: boolean
}

export function Card({ data, onPress, isLoading, checked }: CardProps) {
	return (
		<Container>
			<BoxImage>
				<Image source={data?.image ?? ''} />
			</BoxImage>

			<BoxInfos>
				<PackageText>{data?.title}</PackageText>

				<UnitText>{data?.description}</UnitText>

				<BoxMoney>
					<View>
						<MoneyText>R$</MoneyText>

						<MoneyText size={18}>{data?.price}</MoneyText>
					</View>

					<ButtonIcon
						icon={ShoppingCartSimple}
						onPress={onPress}
						isLoading={isLoading}
						checked={checked}
					/>
				</BoxMoney>
			</BoxInfos>
		</Container>
	)
}
