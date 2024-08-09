import React from 'react'
import { Container, Content, Footer, Header, TextFooter, Title } from './styles'
import Logo from '@assets/logo.svg'
import { Input } from '@Components/Input'
import { User, LockSimple } from 'phosphor-react-native'
import { Button } from '@Components/Button'

export function SignIn() {
	return (
		<Container>
			<Header>
				<Logo />
			</Header>

			<Content>
				<Title>Login</Title>

				<Input title="Email" placeholder="Email" icon={User} />

				<Input title="Senha" secure placeholder="Senha" icon={LockSimple} />

				<Button text="Entrar" width="SM" />

				<Footer>
					<TextFooter>Register</TextFooter>

					<TextFooter>|</TextFooter>

					<TextFooter>Resetar senha</TextFooter>
				</Footer>
			</Content>
		</Container>
	)
}
