import React from 'react'
import { BoxImage, BoxInfos, Container, Image, PackageText } from './styles'
import Pacote from '@assets/pacote.png'

export function Banner() {
	return (
		<Container>
			<BoxImage>
				<Image source={Pacote} />
			</BoxImage>

			<BoxInfos>
				<PackageText>Pacote ACAPULCO</PackageText>

				<PackageText>Guerrero - México</PackageText>

				<PackageText size={24}>LC 50.000</PackageText>
			</BoxInfos>
		</Container>
	)
}
