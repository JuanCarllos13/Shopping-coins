import styled from 'styled-components/native'

interface TextInputProps {
	width?: 'LG' | 'SM'
	height?: 'LG' | 'SM'
}

export const Container = styled.View<TextInputProps>`
	margin-bottom: 24px;
	flex-direction: row;
	align-items: center;
	width: ${({ width }) => (width === 'SM' ? '153px' : '100%')};
	height: ${({ height }) => (height === 'LG' ? '120px' : '80px')};
	background-color: ${({theme}) => theme.COLORS.WHITE};
	padding: 24px;
	border-radius: 13px;
`

export const ContainerInput = styled.View<TextInputProps>`
	flex-direction: row;
	border-radius: 6px;
	width: ${({ width }) => (width === 'SM' ? '153px' : '100%')};
	height: ${({ height }) => (height === 'LG' ? '120px' : '48px')};
	justify-content: space-between;
	align-items: center;
	padding-right: 15px;

`

export const InputText = styled.TextInput<TextInputProps>`
	color: ${({ theme }) => theme.COLORS.TEXT_PRIMARY};
	font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
	width: ${({ width }) => (width === 'SM' ? '153px' : '90%')};
	padding-left: 16px;
`

export const Text = styled.Text`
	color: ${({ theme }) => theme.COLORS.GREEN_DARK};
	font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
	font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`
