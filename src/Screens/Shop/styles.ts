import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`

export const Header = styled.View`
	padding-top: 50px;
	height: 20%;
	flex-direction: row;
	padding-left: 32px;
	align-items: center;
`

export const ButtonBack = styled.TouchableOpacity`
	width: 24px;
	height: 24px;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	border-radius: 5px;
	justify-content: center;
	align-items: center;
	padding: 15px;
`

export const BackButtonText = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
	margin-left: 8px;
`

export const Content = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	justify-content: start;
	padding: 24px;
`


export const Title = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	margin-left: 8px;
	margin-bottom: 16px;
`