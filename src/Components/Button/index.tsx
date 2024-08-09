import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, Text } from './styles'

interface IconProps {
	color?: string
	size?: number
	weight?: 'regular' | 'bold'
}

interface ButtonProps extends TouchableOpacityProps {
	icon?: React.ComponentType<IconProps>
	iconColor?: string
	text?: string
	textColor?: string
	color?: string
	isLoading?: boolean
	width?: 'LG' | 'SM'
}

export function Button({
	text,
	icon: IconComponent,
	textColor,
	iconColor,
	isLoading,
	width = 'SM',
	color,
	...rest
}: ButtonProps) {
	const { COLORS } = useTheme()

	return (
		<Container width={width} color={color} {...rest}>
			{isLoading ? (
				<ActivityIndicator color={COLORS.WHITE} />
			) : (
				<>
					{IconComponent ? (
						<IconComponent color={iconColor ?? COLORS.WHITE} size={18} />
					) : null}
					{text && <Text color={textColor}>{text}</Text>}
				</>
			)}
		</Container>
	)
}
