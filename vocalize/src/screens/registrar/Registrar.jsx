import React from 'react'
import axios from 'axios'
import { View, ImageBackground , StyleSheet, TextInput, TouchableOpacity, Text, Image} from 'react-native'
import isValidCpf from './validaCpf'

import fundo from '../../../assets/fundo.png'
import TextRegister from '../../mocks/TextRegister'
import logoGoogle from '../../../assets/loginGoogle.png'
import boneco from '../../../assets/BonecoLogin.png'
import cadeado from '../../../assets/CadeadoSenha.png'
import imgTelefone from './assets/telefone.png'
import imgCpf from './assets/cpf.png'

import { useNavigation } from '@react-navigation/native'
import * as AuthSession from 'expo-auth-session'
import { useState } from 'react'

export default function Registrar() {

  const navigation = useNavigation();
  
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [celular, setCelular] = useState('');
  const [cpf, setCpf] = useState('');


  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleSenhaChange = (text) => {
    setSenha(text);
  };

  const handleCelularChange = (text) => {
    setCelular(text);
  };

  const handleCpfChange = (text) => {
    setCpf(text);
  };

  const handleRegister = async () => {

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailRegex.test(email)) {
      alert('O email é inválido');
      return;
    }

    if(!/[A-Z]/.test(senha) || !/[a-z]/.test(senha) || senha.length < 8) {
      alert('A senha deve conter pelo menos \n1. Uma letra MAIÚSCULA\n2. Uma letra MINÚSCULA\n3. MÍNIMO 8 caracteres');
      return;
    }

    if(celular.length  != 11){
      alert('O celular deve conter o DDD + os dados');
      setCelular('');
      return;
    } 

    if(!isValidCpf(cpf)){
      alert('CPF inválido');
      setCpf('');
      return;
    }

    const clienteData = {
      email,
      senha,
      celular,
      cpf,
    };

    // try {
    //   const response = await axios.post('http://localhost:8080/api/cliente', clienteData);

    //   // Exibindo a resposta do backend
    //   console.log(response.data);

    //   navigation.navigate("ReceiveHome");
    // } catch (error) {
    //   console.error(error);
    // }

    navigation.navigate("ReceiveHome");

    console.log(`Usuário registrado. \nemail: ${email}\nsenha: ${senha}\ncelular: ${celular}\ncpf: ${cpf}`);
  };

  async function handleSignInGoogle(){

    const CLIENT_ID = '559661121569-rjso4b8ke01s5r06jhcp6j6lvsan4ftu.apps.googleusercontent.com';
    const REDIRECT_URI = 'https://auth.expo.io/@gustafont/vocalize';
    const RESPONSE_TYPE = 'token';
    const SCOPE = encodeURI('profile email');

    const authUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;
    const response = await AuthSession.startAsync({ authUrl });
    console.log(response);
    
    navigation.navigate('ReceiveHome');

  }
  

  return (<>
    <View style={sReg.divMasterRegister}>
      <ImageBackground source={fundo} resizeMode="cover"  style={sReg.imgMasterBackground}>
        <Text style={styles.txtLogin}>{TextRegister.regPage}</Text>

        <View style={sReg.inputRegister}>
          <Image source={boneco} style={styles.vetoresInput}/>
          <TextInput 
          placeholder={TextRegister.name}
          placeholderTextColor={'#D0D0D0'}
          autoCompleteType='text'
          style={[styles.txtInputsRegister, {width:203}]}
          onChangeText={handleEmailChange}
          />
        </View>

        <View style={sReg.inputRegister}>
          <Image source={boneco} style={styles.vetoresInput}/>
          <TextInput 
          placeholder={TextRegister.email}
          placeholderTextColor={'#D0D0D0'}
          autoCompleteType='email'
          keyboardType='email-address'
          style={[styles.txtInputsRegister, {width:203}]}
          onChangeText={handleEmailChange}
          />
        </View>
        <View style={sReg.inputRegister}>
          <Image source={cadeado} style={styles.vetoresInput}/>
          <TextInput 
          placeholder={TextRegister.password}
          placeholderTextColor={'#D0D0D0'}
          secureTextEntry={true}
          autoCompleteType='password'
          keyboardType='default'
          style={[styles.txtInputsRegister, {width:203}]}
          onChangeText={handleSenhaChange}
          />
        </View>
        <View style={sReg.inputRegister}>
          <Image source={imgTelefone} style={styles.vetoresInput}/>
          <TextInput 
          placeholder={TextRegister.tel}
          placeholderTextColor={'#D0D0D0'}
          autoCompleteType='off|tel'
          keyboardType='phone-pad'
          onChangeText={handleCelularChange}
          style={[styles.txtInputsRegister, {width:203}]}
          />
        </View>
        <View style={sReg.inputRegister}>
          <Image source={imgCpf} style={styles.vetoresInput}/>
          <TextInput 
          placeholder={TextRegister.cpf}
          placeholderTextColor={'#D0D0D0'}
          autoCompleteType='off|tel'
          keyboardType='phone-pad'
          onChangeText={handleCpfChange}
          style={[styles.txtInputsRegister, {width:203}]}
          />
        </View>
        <TouchableOpacity onPress={handleRegister}>
          <View style={styles.btnLogin}>
            <Text style={styles.txtBtnLogin}>{TextRegister.btnRegistrar}</Text>
          </View>
        </TouchableOpacity>

        <Text style={sReg.txtRegister}>{TextRegister.other}</Text>

        <TouchableOpacity onPress={handleSignInGoogle}>
          <View style={sReg.btnGoogleRegister}>
            <Image source={logoGoogle}/>
            <Text style={styles.txtBtnGoogleLogin}>{TextRegister.btnRegistrarGoogle}</Text>
          </View>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  </>
  )
}

sReg = StyleSheet.create({
  divMasterRegister:{
    width: '100%',
    height: 915,
    alignItems: "center",
  },
  imgMasterBackground:{
    width: '100%',
    height: 915,
    alignItems: "center",
  
  },
  txtInputsRegister:{
    width: "100%",
    height:20,
    color: 500,
    marginTop: 2,
    marginLeft: 10
  },
  txtRegister:{
    marginTop: 70,
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 800,
    color: '#FFF',
  },
  inputRegister:{
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
  txtRegister:{
    color: "#7A7A7A",
    fontSize: 12,
    marginTop:90
  },
  btnGoogleRegister:{
    display: 'flex',
    flexDirection: 'row',
    width: 159,
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
    paddingLeft:5
  }
});