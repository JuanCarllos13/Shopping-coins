import styled from 'styled-components/native'


interface ButtonProps {
	width?: 'LG' | 'SM'
	color?: string
}

export const Container = styled.TouchableOpacity<ButtonProps>`
	background-color: ${({ theme, color }) => color ?? theme.COLORS.PURPLE_DARK};
	border-radius: 20px;
	width: ${({ width }) => (width === 'SM' ? '80%' : '100%')};
	align-items: center;
	justify-content: center;
	padding: 15px;
`

interface TextColorProps {
	color?: string
}

export const Text = styled.Text<TextColorProps>`
	color: ${({ theme, color }) => color ?? theme.COLORS.WHITE};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	text-align: center;
`
