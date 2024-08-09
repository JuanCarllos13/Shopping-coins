import styled from 'styled-components/native'

export const Container = styled.View`
	margin-top: 20px;
	margin-bottom: 24px;
	flex-direction: row;
	align-items: center;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
	padding: 24px;
	border-radius: 13px;
	width: 100%;
	height: 95px;
	border-radius: 20px;
	justify-content: space-around;
`

export const BoxImage = styled.View``

export const Image = styled.Image`
	width: 111px;
	height: 90px;
`

export const BoxInfos = styled.View`
	margin-top: 20px;
	justify-content: center;
	align-items: center;
`

interface TextProps {
	size?: number
}

export const PackageText = styled.Text<TextProps>`
	color: ${({ theme }) => theme.COLORS.WHITE};
	font-size: ${({ theme, size }) => size ?? theme.FONT_SIZE.SM}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
