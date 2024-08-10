import React, { useContext, useRef, useState } from 'react'
import { Container, Content, Footer, Header, TextFooter, Title } from './styles'
import Logo from '@assets/logo.svg'
import { Input } from '@Components/Input'
import { User, LockSimple, Pencil } from 'phosphor-react-native'
import { Button } from '@Components/Button'
import { TextInput, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { AuthContext } from '@Contexts/Auth'

export function SignUp() {
	const navigate = useNavigation()
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [name, setName] = useState('')

	const nameInputRef = useRef<TextInput>(null)
	const emailInputRef = useRef<TextInput>(null)
	const passwordInputRef = useRef<TextInput>(null)
	const [isLoading, setIsLoading] = useState(false)

	const { CreateAccount } = useContext(AuthContext)

	async function handleLogin() {

		console.log( email, password, name)
		setIsLoading(true)
		if (email === '' || password === '') {
			Toast.show({
				type: 'error',
				text1: 'Erro',
			})
			setIsLoading(false)
			return
		}

		try {
			await CreateAccount({ email, password, name, photoUrl: null })
		} catch (error) {
			setIsLoading(false)
		} finally {
			setEmail('')
			setName('')
			setPassword('')
			setIsLoading(false)

			navigate.navigate('SignIn')
		}
	}

	return (
		<Container>
			<Header>
				<Logo />
			</Header>

			<Content
				contentContainerStyle={{
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Title>Cria conta</Title>

				<Input
					title="Nome"
					placeholder="nome"
					icon={User}
					value={name}
					onChangeText={setName}
					ref={nameInputRef}
					onSubmitEditing={() => {
						emailInputRef.current?.focus()
					}}
				/>

				<Input
					title="Email"
					placeholder="Email"
					icon={Pencil}
					value={email}
					onChangeText={setEmail}
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
					onSubmitEditing={handleLogin}
				/>

				<Button
					text="Entrar"
					width="SM"
					onPress={handleLogin}
					isLoading={isLoading}
				/>

				<Footer>
					<TouchableOpacity onPress={() => navigate.navigate('SignIn')}>
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
