/* eslint-disable @typescript-eslint/no-unused-vars */
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import * as LocalAuthentication from 'expo-local-authentication'
import React, { createContext, useState, useEffect, ReactNode } from 'react'

import Toast from 'react-native-toast-message'
import { Loading } from '@Components/Loading'
import { storageBiometryGet } from 'src/Storage/Biometria'

interface AuthContextData {
	user: UserProps | null
	SignIn: (credentials: SignInProps) => Promise<void>
	CreateAccount: (credentials: SignUpProps) => Promise<void>
	SignOut: () => Promise<void>
	UpdateUserData: (uid: string, credentials: UserProps) => Promise<void>
}

interface UserProps {
	uid: string
	displayName: string
	photoUrl?: string | null
	email: string
}

type AuthProviderProps = {
	children: ReactNode
}

interface SignInProps {
	email: string
	password: string
}

interface SignUpProps {
	name: string
	email: string
	password: string
	photoUrl?: string | null
}

export const AuthContext = createContext({} as AuthContextData)

function AuthProvider({ children }: AuthProviderProps) {
	const [user, setUser] = useState<UserProps | null>(null)
	const [isLoading, setIsLoading] = useState(true)

	async function SignIn({ email, password }: SignInProps) {
		await auth()
			.signInWithEmailAndPassword(email, password)
			.then(async (value) => {
				const uid = value.user.uid

				const userSnapshot = await firestore()
					.collection('users')
					.doc(uid)
					.get()
				if (userSnapshot.exists) {
					const userData = userSnapshot.data() as UserProps

					setUser({
						email: value.user.email!,
						photoUrl: userData.photoUrl,
						uid: value.user.uid,
						displayName: userData.displayName,
					})
				} else {
					console.log('Usuário não encontrado na coleção \'users\'')
				}
			})
			.catch((error) => {
				console.log(error)
				Toast.show({
					type: 'error',
					text1: 'Usuário não encontrado',
				})
			})
	}

	async function CreateAccount({
		email,
		password,
		name,
		photoUrl,
	}: SignUpProps) {
		console.log('Criou a conta? ', email, password, name, photoUrl)

		await auth()
			.createUserWithEmailAndPassword(email, password)
			.then(async (value) => {
				value.user.updateProfile({
					displayName: name,
				})

				const uid = value.user.uid

				const newUser = {
					email: email,
					photoUrl: photoUrl,
					displayName: name,
				}

				await firestore().collection('users').doc(uid).set(newUser)

				Toast.show({
					type: 'success',
					text1: 'Usuário criado com sucesso',
				})
			})
			.catch((error) => {
				console.log('Erro durante a criação do usuário:', error)

				if (error.code === 'auth/email-already-in-use') {
					Toast.show({
						type: 'error',
						text1: 'Email já em uso!',
					})
				} else if (error.code === 'auth/invalid-email') {
					Toast.show({
						type: 'error',
						text1: 'Email inválido!',
					})
				} else {
					Toast.show({
						type: 'error',
						text1:
							'Erro durante a criação do usuário. Por favor, tente novamente.',
					})
				}
			})
	}

	async function UpdateUserData(uid: string, newData: Partial<UserProps>) {
		try {
			// Verifique se uma imagem foi selecionada
			if (newData.photoUrl && newData.photoUrl !== '') {
				// Obtenha a extensão do arquivo da imagem
				const fileExtension = newData.photoUrl.split('.').pop()

				// Crie uma referência para o armazenamento no Firebase Storage
				const storageRef = storage()
					.ref()
					.child(`profileImages/${uid}/image.${fileExtension}`)

				// Faça o upload da imagem para o Firebase Storage
				const response = await fetch(newData.photoUrl)
				const blob = await response.blob()
				await storageRef.put(blob)

				// Obtenha a URL pública da imagem
				const imageUrl = await storageRef.getDownloadURL()

				// Adicione a URL pública da imagem aos novos dados do usuário
				newData.photoUrl = imageUrl
			}

			// Atualize os dados do usuário no Firestore
			await firestore().collection('users').doc(uid).update(newData)

			// Faça algo com os novos dados do usuário atualizados, como atualizar o estado do usuário
			setUser({
				displayName: newData.displayName!,
				email: newData.email!,
				uid: newData.uid!,
				photoUrl: newData.photoUrl,
			})

			Toast.show({
				type: 'success',
				text1: 'Dados do usuário atualizados com sucesso!',
			})
		} catch (error) {
			Toast.show({
				type: 'error',
				text1: 'Erro ao atualizar os dados do usuário',
			})
			console.log(error)
		}
	}

	async function SignOut() {
		await auth().signOut()
		setUser(null)

		console.log('entrou aqui', user)
	}

	useEffect(() => {
		const fetchUserData = async (uid: string) => {
			try {
				const userSnapshot = await firestore()
					.collection('users')
					.doc(uid)
					.get()

				if (userSnapshot.exists) {
					const userData = userSnapshot.data() as UserProps

					const biometry = await storageBiometryGet()

					const compatible = await LocalAuthentication.hasHardwareAsync()

					if (compatible && biometry) {
						const biometriaRecord = await LocalAuthentication.isEnrolledAsync()
						if (!biometriaRecord) {
							alert('Biometria não cadastrada')
						} else {
							const result = await LocalAuthentication.authenticateAsync()
							console.log('result', result)
							if (result.success) {
								setUser({
									displayName: userData.displayName,
									email: userData.email,
									uid: uid,
									photoUrl: userData.photoUrl,
								})
							} else {
								throw new Error()
							}
						}
					} else {
						console.log('Dispositivo não suporta biometria')
					}
				} else {
					console.log('Usuário não encontrado')
				}
			} catch (error) {
				console.log('Erro ao obter os dados do usuário:', error)
			} finally {
				setIsLoading(false)
			}
		}

		const currentUser = auth().currentUser
		if (currentUser) {
			const { uid } = currentUser
			fetchUserData(uid)
		} else {
			setIsLoading(false) // Se não houver usuário logado, marca o carregamento como concluído
		}
	}, [])

	if (isLoading) {
		return <Loading /> // Renderiza o indicador de carregamento enquanto as fontes ou os dados do usuário estão sendo carregados
	}

	return (
		<AuthContext.Provider
			value={{
				user,
				SignOut,
				SignIn,
				CreateAccount,
				UpdateUserData,
			}}
		>
			{children}
		</AuthContext.Provider>
	)
}

export { AuthProvider }
