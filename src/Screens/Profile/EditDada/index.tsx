import { Feather } from '@expo/vector-icons'
import auth from '@react-native-firebase/auth'
import * as ImagePicker from 'expo-image-picker'
import React, { useContext, useState } from 'react'
import { TouchableWithoutFeedback, Keyboard } from 'react-native'
import Toast from 'react-native-toast-message'
import { useTheme } from 'styled-components'
import {User, Lock} from 'phosphor-react-native'

import {
	Container,
	PhotoContainer,
	Photo,
	PhotoButton,
	Content,
	Options,
	Option,
	OptionTitle,
	Section,
	Footer,
	HeaderContainer,
} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { AuthContext } from '@Contexts/Auth'
import { Input } from '@Components/Input'
import { Button } from '@Components/Button'
import { Header } from '@Components/Header'

export function EditDada() {
	const { user, UpdateUserData } = useContext(AuthContext)
	const [option, setOption] = useState<'dataEdit' | 'passwordEdit'>('dataEdit')
	const [avatar, setAvatar] = useState(user?.photoUrl)
	const [password, setPassword] = useState('')
	const [oldPassword, setOldPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [name, setName] = useState(user?.displayName)
	const theme = useTheme()

	async function openImagePicker() {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 1,
			})

			if (result.assets && result.assets[0]) {
				setAvatar(result.assets[0].uri)
			}
		} catch (err) {
			console.log(err)
			// Trate o erro aqui
		}
	}

	function handleOptionChange(optionSelected: 'dataEdit' | 'passwordEdit') {
		setOption(optionSelected)
	}

	async function handleProfileUpdate() {
		setIsLoading(true)
		if (option === 'dataEdit') {
			const uid = user?.uid
			if (uid) {
				await UpdateUserData(uid, {
					displayName: name!,
					email: user.email,
					uid,
					photoUrl: avatar,
				})
				setIsLoading(false)
			}
		} else {
			if (password !== confirmPassword) {
				Toast.show({
					type: 'error',
					text1: 'Erro',
				})
				return
			}

			const user = auth().currentUser

			if (!user) {
				Toast.show({
					type: 'error',
					text1: 'Erro',
				})
				return
			}

			const { email } = user

			if (!email) {
				Toast.show({
					type: 'error',
					text1: 'erro',
				})

				return
			}

			const credentials = auth.EmailAuthProvider.credential(email, oldPassword)

			try {
				await user.reauthenticateWithCredential(credentials)
				await user.updatePassword(password)
				Toast.show({
					type: 'success',
					text1: 'erro',
				})
				setIsLoading(false)
			} catch (error) {
				Toast.show({
					type: 'error',
					text1:'erro',
				})
				console.log(error)
			}
			setIsLoading(false)
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<HeaderContainer>

					<Header title={'Editar dados'} />

					<PhotoContainer>
						{avatar ? (
							<Photo source={{ uri: avatar }} />
						) : (
							<Ionicons name="person" size={90} color={theme.COLORS.WHITE} />
						)}
						<PhotoButton
							onPress={openImagePicker}
							disabled={option === 'passwordEdit'}
						>
							<Feather name="camera" size={24} color={theme.COLORS.WHITE} />
						</PhotoButton>
					</PhotoContainer>
				</HeaderContainer>

				<Content
					contentContainerStyle={{ flexGrow: 1 }}
					showsHorizontalScrollIndicator={false}
				>
					<Options>
						<Option
							active={option === 'dataEdit'}
							onPress={() => handleOptionChange('dataEdit')}
						>
							<OptionTitle active={option === 'dataEdit'}>
								Dados
							</OptionTitle>
						</Option>

						<Option
							active={option === 'passwordEdit'}
							onPress={() => handleOptionChange('passwordEdit')}
						>
							<OptionTitle active={option === 'passwordEdit'}>
								Senha
							</OptionTitle>
						</Option>
					</Options>

					{option === 'dataEdit' ? (
						<Section>
							<Input
								title={'Nome'}
								placeholder="Nome"
								autoCorrect={false}
								defaultValue={user?.displayName}
								onChangeText={setName}
								icon={User}
							/>

							<Input

								title={'Nome'}
								placeholder="Email"
								autoCorrect={false}
								editable={false}
								defaultValue={user?.email}
								style={{ color: theme.COLORS.GRAY_500 }}
								icon={Lock}
							/>
						</Section>
					) : (
						<Section>
							<Input
								title={'Senha antiga'}
								placeholder={'Senha antiga'}
								onChangeText={setOldPassword}
								value={oldPassword}
								secure
								icon={Lock}
							/>
							<Input
								title={'Nome'}
								placeholder="Nova Senha"
								onChangeText={setPassword}
								value={password}
								secure
								icon={Lock}
							/>
							<Input
								title={'Confirmar senha'}
								placeholder="Confirmar senha"
								onChangeText={setConfirmPassword}
								value={confirmPassword}
								secure
								icon={Lock}
							/>
						</Section>
					)}

					<Footer>
						<Button
							text={'Salvar'}
							onPress={handleProfileUpdate}
							isLoading={isLoading}
						/>
					</Footer>
				</Content>
			</Container>
		</TouchableWithoutFeedback>
	)
}
