import styled, { css } from 'styled-components/native'

interface OptionProps {
  active: boolean;
}

export const Container = styled.View`
  flex: 1;
	background-color: ${({ theme }) => theme.COLORS.PURPLE_DARK};
`

export const HeaderContainer = styled.View`
	height: 250px;
	align-items: center;
	flex-direction: column;
	justify-content: space-around;
	padding: 24px;
	margin-top: 70px;
`

export const HeaderTop = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;
`

export const HeaderTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const LogoutButton = styled.TouchableOpacity``

export const PhotoContainer = styled.View`
  width: 180px;
  height: 180px;
  border-radius: 90px;
	justify-content: center;
	align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 48px;

`

export const Photo = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`

export const PhotoButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GREEN_DARK};
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 10px;
  right: 10px;
`

export const Content = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }) => theme.COLORS.BACKGROUND_PRIMARY};
	border-top-right-radius: 40px;
	border-top-left-radius: 40px;
	padding: 24px;
`

export const Options = styled.View`
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_200};
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 24px;
`

export const Option = styled.TouchableOpacity<OptionProps>`
  padding-bottom: 14px;
  ${({ active }) =>
		active &&
    css`
      border-bottom-width: 3px;
      border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_SECONDARY};
    `}
`

export const OptionTitle = styled.Text<OptionProps>`
  font-size: 20px;
  font-family: ${({ theme, active }) =>
		active ? theme.FONT_FAMILY.BOLD : theme.FONT_FAMILY.REGULAR};
  color: ${({ theme, active }) =>
		active ? theme.COLORS.TEXT_PRIMARY : theme.COLORS.GRAY_600};
`

export const Section = styled.View``


export const Footer = styled.View`
	flex: 1;
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 10px;
`
