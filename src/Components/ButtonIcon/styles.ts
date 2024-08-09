import styled from 'styled-components/native'

interface ButtonProps {
	width?: 'LG' | 'SM'
}

export const Container = styled.TouchableOpacity<ButtonProps>`
	background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
	border-color: ${({ theme }) => theme.COLORS.GRAY_200};
	width: 43px;
	height: 42px;

	border-radius: 10px;
	align-items: center;
	justify-content: center;
`
