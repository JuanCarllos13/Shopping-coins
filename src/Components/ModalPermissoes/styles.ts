import styled from 'styled-components/native'

export const Container = styled.View`
	flex: 1;
	background-color: rgba(0, 0, 0, 0.4);
	justify-content: space-between;
`

export const Content = styled.View`
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	margin-top: auto;
	height: 400px;
	justify-content: start;
	align-items: center;
	padding: 15px;
	border-top-right-radius: 50px;
	border-top-left-radius: 50px;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};

	margin-top: 20px;
	margin-bottom: 20px;
`

export const Description = styled.Text`
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
	text-align: center;
`


export const Footer = styled.View`
	flex: 1;
	width: 100%;
	justify-content: space-around;
	align-items: center;
`
