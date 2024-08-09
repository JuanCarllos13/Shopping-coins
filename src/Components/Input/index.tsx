import { Eye, EyeClosed } from 'phosphor-react-native'
import React, { forwardRef, useState } from 'react'
import { TextInput, TextInputProps, TouchableOpacity } from 'react-native'
import { useTheme } from 'styled-components/native'

import { Container, ContainerInput, InputText } from './styles'

interface IconProps {
	color?: string
	size?: number
	weight?: 'regular' | 'bold'
}

type InputProps = TextInputProps & {
	title: string
	width?: 'LG' | 'SM'
	height?: 'LG' | 'SM'
	secure?: boolean
	icon?: React.ComponentType<IconProps>
}

const Input = forwardRef<TextInput, InputProps>(
	({ width, height, secure = false, icon: Icon , ...rest }, ref) => {
		const [secureText, setSecureText] = useState(true)
		const { COLORS } = useTheme()

		return (
			<Container width={width} height={height}>
				{Icon && <Icon size={24} color={COLORS.PURPLE_DARK} weight='bold'  />}
				<ContainerInput>
					<InputText
						width={width}
						height={height}
						style={{ textAlignVertical: 'top' }}
						placeholderTextColor={COLORS.TEXT_PRIMARY}
						{...rest}
						secureTextEntry={secure ? secureText : false}
						ref={ref} // Adicione esta linha para encaminhar o ref
					/>
					{secure && (
						<TouchableOpacity onPress={() => setSecureText(!secureText)}>
							{secureText ? (
								<EyeClosed color={COLORS.BLACK} />
							) : (
								<Eye color={COLORS.BLACK} />
							)}
						</TouchableOpacity>
					)}
				</ContainerInput>
			</Container>
		)
	},
)

Input.displayName = 'Input'

export { Input }
