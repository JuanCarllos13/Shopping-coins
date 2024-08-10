import { ArrowLeft } from 'phosphor-react-native'
import React from 'react'
import { BoxHeader, ButtonArrow, Space, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

interface HeaderProps {
	title: string
}

export function Header({ title }: HeaderProps) {
	const navigation = useNavigation()
	return (
		<BoxHeader>
			<ButtonArrow onPress={() => navigation.goBack()}>
				<ArrowLeft color="white" weight="bold" />
			</ButtonArrow>

			<Title>{title}</Title>

			<Space />
		</BoxHeader>
	)
}
