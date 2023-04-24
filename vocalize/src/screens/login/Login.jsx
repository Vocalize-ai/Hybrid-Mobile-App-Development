import React from 'react'

import TextLogin from '../../mocks/TextLogin.js'

import googleDiv from './assets/divCurvilinea.png'
import logo from './assets/logopng.png'
import fundo from '../../../assets/fundo.png'
import boneco from '../../../assets/BonecoLogin.png'
import cadeado from '../../../assets/CadeadoSenha.png'
import logoGoogle from '../../../assets/loginGoogle.png'

import * as AuthSession from 'expo-auth-session'

import { View, Text, ImageBackground , Image, StyleSheet, TextInput, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'

export default function Login() {

  const navigation = useNavigation();
  

  const handlePress = () => {
    navigation.navigate('Registrar');
  }

  async function handleSignInGoogle(){

    const CLIENT_ID = '559661121569-rjso4b8ke01s5r06jhcp6j6lvsan4ftu.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@gustafont/vocalize';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);
    
    navigation.navigate('Home');

  }
  

  return (
    <View style={styles.divMasterLogin}>
        <ImageBackground source={fundo} resizeMode="contain" style={styles.divMasterLogin}>
          <Image source={logo} style={styles.logotipo}/>

          <Text style={styles.txtLogin}>{TextLogin.login}</Text>

          <View style={styles.inputLogin}>
            <Image source={boneco} style={styles.vetoresInput}/>
            <TextInput 
            placeholder={TextLogin.inputEmail}
            placeholderTextColor={'#D0D0D0'}
            autoCompleteType='email'
            keyboardType='email-address'
            style={styles.txtInputsLogin}
            />
          </View>

          <View style={styles.inputLogin}>
            <Image source={cadeado} style={styles.vetoresInput}/>
            <TextInput
              placeholder={TextLogin.inputSenha}
              placeholderTextColor={'#D0D0D0'}
              secureTextEntry={true}
              autoCompleteType='password'
              keyboardType='default'
              style={styles.txtInputsLogin}
              />
          </View>

          <TouchableOpacity>
            <View style={styles.btnLogin}>
              <Text style={styles.txtBtnLogin}>{TextLogin.btnLogin}</Text>
            </View>
          </TouchableOpacity>

          <Text style={styles.txtEsqueceuSenha}>{TextLogin.esqueceuSenha}</Text>

          <View style={styles.GoogleDiv}>
            
            <ImageBackground
            source={googleDiv}
            resizeMode='stretch'
            style={styles.fundoGoogleDiv}
            >
            <View style={styles.centerDivGoogle}>            
              <Text style={styles.txtConectar}>{TextLogin.conectar}</Text>
              {/* API BOTÃO GOOGLE */}

              <TouchableOpacity onPress={handleSignInGoogle}>
                <View style={styles.btnGoogleLogin} >
                  <Image source={logoGoogle}/>
                  <Text style={styles.txtBtnGoogleLogin}>{TextLogin.btnGoogleLogin}</Text>
                </View>
              </TouchableOpacity>


              <View style={styles.divCadastrar}>
                <Text style={styles.txtSemConta}>{TextLogin.semConta}</Text>
                <TouchableOpacity onPress={handlePress}>
                  <Text style={styles.txtCadastrar}>{TextLogin.cadastrar}</Text>
                </TouchableOpacity>

              </View>
            </View>
            </ImageBackground>
          </View>

        </ImageBackground>
    </View>
  )
}

styles = StyleSheet.create({
  divMasterLogin:{
    width: '100%',
    height: 915,
    alignItems: "center",
  },
  logotipo:{
    marginTop: 70
  },
  txtLogin:{
    marginTop: 70,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 800,
    color: '#FFF',
  },
  inputLogin: {
    display: 'flex',
    flexDirection: 'row',
    width: 240,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 67,
    padding: 7,
    paddingLeft: 15,
    marginTop: 18

  },
  vetoresInput:{
    marginTop:3,
    width:14,
    height:16,
    marginRight: 5
  },
  txtInputsLogin:{
    width:200,
    height:20,
    color: 500,
    marginTop: 2,
    marginLeft: 10
  },
  btnLogin:{
    width: 240,
    height: 40,
    borderRadius: 67,
    marginTop:48,
    backgroundColor: '#6A74CF',
    alignItems: 'center',
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  txtBtnLogin:{
    fontFamily: 'Roboto',
    fontWeight: 400,
    color: '#FFF',
  },
  txtEsqueceuSenha:{
    marginTop:24,
    fontSize:12,
    color: '#fff'
  },

  GoogleDiv:{
    width: '100%',
    height:400,
    marginTop: 70,
    
  },
  fundoGoogleDiv:{
    height:400,
  },
  centerDivGoogle:{
    width: 240,
    height:200,
    marginTop: 110,
    marginLeft: 89,
    alignItems: 'center'
  },
  txtConectar:{
    color: "#7A7A7A",
    fontSize: 12
  },
  btnGoogleLogin:{
    display: 'flex',
    flexDirection: 'row',
    width: 140,
    height: 34,
    borderRadius: 15,
    marginTop:48,
    backgroundColor: '#fff',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  txtBtnGoogleLogin:{
    fontFamily: 'Roboto',
    fontSize:11,
    color: '#757575',
    marginLeft: 4
  },
  divCadastrar:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 35
  },
  txtSemConta:{
    fontSize:12,
    color: '#757575',
    fontWeight: 400,
    marginEnd: 10
  },
  txtCadastrar:{
    color: '#6A74CF',
    
  }

});