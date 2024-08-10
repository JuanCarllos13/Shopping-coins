import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`

export const Header = styled.View`
	justify-content: center;
	align-items: center;
	height: 30%;
`

export const Content = styled.ScrollView`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	padding: 24px;
`

export const Title = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	margin-top: 32px;
	margin-bottom: 24px;
`

export const Footer = styled.View`
	flex-direction: row;
`

export const TextFooter = styled.Text`
	padding: 10px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
	color: ${({ theme }) => theme.COLORS.GRAY_100};
	margin-top: 32px;
`
