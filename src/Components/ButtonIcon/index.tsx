import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container } from './styles'

interface IconProps {
	color?: string
	size?: number
	weight?: 'regular' | 'bold'
}

interface ButtonProps extends TouchableOpacityProps {
	icon: React.ComponentType<IconProps>
	iconColor?: string
	textColor?: string
	isLoading?: boolean
}

export function ButtonIcon({
	icon: IconComponent,
	iconColor,
	isLoading,
	...rest
}: ButtonProps) {
	const { COLORS } = useTheme()

	return (
		<Container {...rest}>
			{isLoading ? (
				<ActivityIndicator color={COLORS.WHITE} />
			) : (
				<IconComponent
					color={iconColor ?? COLORS.WHITE}
					size={18}
					weight="bold"
				/>
			)}
		</Container>
	)
}
