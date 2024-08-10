import React from 'react'
import { ActivityIndicator, TouchableOpacityProps } from 'react-native'
import { useTheme } from 'styled-components/native'
import { CheckCircle } from 'phosphor-react-native'

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
	checked?: boolean
}

export function ButtonIcon({
	icon: IconComponent,
	iconColor,
	isLoading,
	checked,
	...rest
}: ButtonProps) {
	const { COLORS } = useTheme()

	const renderIcon = () => {
		if (isLoading) {
			return <ActivityIndicator color={COLORS.WHITE} />
		}

		if (checked) {
			return (
				<CheckCircle
					color={iconColor ?? COLORS.GREEN_DARK}
					size={18}
					weight="bold"
				/>
			)
		}

		return (
			<IconComponent
				color={iconColor ?? COLORS.WHITE}
				size={18}
				weight="bold"
			/>
		)
	}

	return <Container {...rest}>{renderIcon()}</Container>
}
