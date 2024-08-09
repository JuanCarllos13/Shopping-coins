import styled from 'styled-components/native'

export const Container = styled.View`
	background-color: ${({ theme }) => theme.COLORS.WHITE};
	border-radius: 13px;
	width: 158px;
	height: 233px;
	border-radius: 20px;
	margin-right: 16px;
`

export const BoxImage = styled.View`
	width: 100%;
`

export const Image = styled.Image`
	width: 100%;
	height: 111px;
`

export const BoxInfos = styled.View`
	padding-left: 8px;
	padding-top: 16px;
	padding-right: 8px;
`

interface TextProps {
	size?: number
}



export const PackageText = styled.Text<TextProps>`
	color: ${({ theme }) => theme.COLORS.BLACK};
	font-size: ${({ theme, size }) => size ?? theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
export const UnitText = styled.Text<TextProps>`
	color: ${({ theme }) => theme.COLORS.GRAY_100};
	font-size: 12px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};


`


export const BoxMoney = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`

export const MoneyText = styled.Text<TextProps>`
	color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
	font-size: ${({ theme, size }) => size ?? theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
