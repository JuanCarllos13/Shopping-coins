import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	border-radius: 13px;
	width: 100%;
	height: 80px;
	border-radius: 20px;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 24px;
`

export const Box = styled.View`
	flex-direction: row;
	align-items: center;
	margin-left: 24px;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	margin-left: 16px;

`
