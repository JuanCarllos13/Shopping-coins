import React from 'react'
import { Container, Title } from './styles'
import { useTheme } from 'styled-components/native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'


interface IconProps {
	color?: string
	size?: number
	weight?: 'regular' | 'bold'
}

type Props = {
  icon?: React.ComponentType<IconProps>;
  title: string;
};

export function TopMessage({ title, icon: Icon }: Props) {
	const theme = useTheme()
	const insets = useSafeAreaInsets()

	const paddingTop = insets.top + 5

	return (
		<Container style={{paddingTop}}>
			{Icon && <Icon size={18} color={theme.COLORS.GRAY_100} />}
			<Title>{title}</Title>
		</Container>
	)
}
