import styled from 'styled-components/native'

export const BoxHeader = styled.View`
	width: 100%;
	flex-direction: row;
	justify-content: space-between;
`

export const Title = styled.Text`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const Space = styled.View`
	width: 40px;
	height: 40px;
`

export const ButtonArrow = styled.TouchableOpacity``
