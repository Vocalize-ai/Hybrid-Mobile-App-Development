import React from 'react'
import { View, Text, ImageBackground , Image, StyleSheet, TextInput, Button } from 'react-native'
import logo from './assets/logopng.png'
import fundo from './assets/fundo.png'
import { StatusBar } from 'expo-status-bar'
import TextLogin from '../../mocks/TextLogin.js'
import boneco from './assets/BonecoLogin.png'
import cadeado from './assets/CadeadoSenha.png'

export default function Login() {
  return (
    <View style={styles.divMasterLogin}>
        <ImageBackground source={fundo} resizeMode="contain" style={styles.divMasterLogin}>
          <Image source={logo}/>

          <Text>{TextLogin.login}</Text>
          <View style={styles.inputLogin}>
            <Image source={boneco} style={styles.inputLoginBoneco}/>
            <TextInput 
            autoCompleteType='email'
            keyboardType='email-address'
            placeholder={TextLogin.inputEmail}
            />
          </View>
          <View>
            <TextInput 
              secureTextEntry={true}
              autoCompleteType='password'
              keyboardType='default'
              placeholder={TextLogin.inputSenha}
            />
          </View>
          <Button title={TextLogin.btnLogin}/>
          <Text>{TextLogin.esqueceuSenha}</Text>
          <View>
            <Text>{TextLogin.conectar}</Text>
            {/* API BOTÃO GOOGLE */}
            <View>
              <Text>{TextLogin.semConta}</Text>
              <Text>{TextLogin.cadastrar}</Text>
            </View>
          </View>
        </ImageBackground>
    </View>
  )
}

styles = StyleSheet.create({
  divMasterLogin:{
    width: '100%',
    height: 915
  },
  inputLogin: {
    display: 'flex',
    flexDirection: 'row'
  },
  inputLoginBoneco:{
    marginTop:6,
    width:14,
    height:14
  }
})