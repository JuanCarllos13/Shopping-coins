import React, { useContext, useRef, useState } from 'react'
import { Container, Content, Footer, Header, TextFooter, Title } from './styles'
import Logo from '@assets/logo.svg'
import { Input } from '@Components/Input'
import { User, LockSimple } from 'phosphor-react-native'
import { Button } from '@Components/Button'
import { TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '@Contexts/Auth'
import Toast from 'react-native-toast-message'

export function SignIn() {
	const navigation = useNavigation()

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)

	const emailInputRef = useRef<TextInput>(null)
	const passwordInputRef = useRef<TextInput>(null)

	const { SignIn } = useContext(AuthContext)

	async function handleLogin() {
		setIsLoading(true)

		if (email === '' || password === '') {
			Toast.show({
				type: 'error',
				text1: 'Errro',
			})
			setIsLoading(false)
			return
		}

		await SignIn({ email, password })
		setIsLoading(false)
	}

	return (
		<Container>
			<Header>
				<Logo />
			</Header>

			<Content>
				<Title>Login</Title>

				<Input
					title="Email"
					placeholder="Email"
					icon={User}
					value={email}
					onChangeText={setEmail}
					returnKeyType="next"
					ref={emailInputRef}
					onSubmitEditing={() => {
						passwordInputRef.current?.focus()
					}}
				/>

				<Input
					title="Senha"
					secure
					placeholder="Senha"
					icon={LockSimple}
					value={password}
					onChangeText={setPassword}
					ref={passwordInputRef}
					onSubmitEditing={handleLogin}
				/>

				<Button
					text="Entrar"
					width="SM"
					onPress={handleLogin}
					isLoading={isLoading}
				/>

				<Footer>
					<TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
						<TextFooter>Register</TextFooter>
					</TouchableOpacity>

					<TextFooter>|</TextFooter>

					<TouchableOpacity>
						<TextFooter>Resetar senha</TextFooter>
					</TouchableOpacity>
				</Footer>

			</Content>
		</Container>
	)
}
