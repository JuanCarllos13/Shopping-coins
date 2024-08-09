import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	align-items: center;
	justify-content: center;

	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
`

export const Header = styled.View`
	padding-top: 50px;
	justify-content: space-around;
	align-items: center;
	height: 40%;
`

export const Photo = styled.Image`
	width: 96px;
	height: 96px;
	border-radius: 24px;
`

export const UserName = styled.Text`
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
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
