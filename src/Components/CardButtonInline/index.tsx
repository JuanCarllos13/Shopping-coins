import React from 'react'
import { Box, Container, Title } from './styles'
import { IconProps } from 'src/DTOs/IconDTO'
import { useTheme } from 'styled-components'
import { CaretRight } from 'phosphor-react-native'

interface Props {
	icon: React.ComponentType<IconProps>

	iconColor?: string
	text: string
}

export function CardButtonInline({
	text,
	icon: IconComponent,
	iconColor,
}: Props) {
	const theme = useTheme()


	return (
		<Container>
			<Box>
				{IconComponent ? (
					<IconComponent
						color={iconColor ?? theme.COLORS.PURPLE_DARK}
						size={30}
						weight="fill"
					/>
				) : null}
				<Title>{text}</Title>
			</Box>

			<CaretRight size={25} />
		</Container>
	)
}
