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

export const BoxImage = styled.View`
	flex-direction: row;
	justify-content: space-between;
	width: 90%;
	margin-top: 16px;
	margin-bottom: 16px;
`
export const Photo = styled.Image`
	width: 44px;
	height: 44px;
	border-radius: 15px;
`

export const BoxText = styled.View`
	background-color: ${({ theme }) => theme.COLORS.GRAY_950};
	height: 35px;
	padding: 8px;
	border-radius: 15px;
`

export const TextNameApp = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
	color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const BoxNameUser = styled.View`
	flex-direction: row;
`

export const Hello = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const UserName = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.TEXT_SECONDARY};
`

export const Content = styled.View`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	width: 100%;
	border-top-left-radius: 20px;
	border-top-right-radius: 20px;
	justify-content: start;
	align-items: center;
	padding: 24px;
`

export const CarShopMoney = styled.View`
	width: 100%;
	height: 62px;
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	padding-left: 10px;
	padding-right: 10px;
	border-radius: 10px;
	margin-top: -50px;
`

export const CarShopMoneyText = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	margin-left: 10px;
	margin-right: 10px;
`

export const Line = styled.View`
	width: 1px;
	height: 100%;
	background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`
export const BoxInline = styled.View`
	flex-direction: row;
`

export const Footer = styled.View`
	justify-content: center;
	align-items: center;
`
