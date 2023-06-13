import { View, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import TextoNunito from '../../components/TextoNunito'
import TextoOpen from '../../components/TextoOpen'

export default function Cadastro() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>


      <Image style={styles.logo}source={require('../../../assets/images/adaptive-icon.png')}/>

      <View style={styles.body}>

        <TextoNunito style={styles.titulo}>Crie sua conta</TextoNunito>

        <View style={styles.inputContainer}>
          <TextInput style={styles.input} placeholder='Nome de usuário'></TextInput>
          <TextInput style={styles.input} placeholder='Email'></TextInput>
          <TextInput style={styles.input} placeholder='Senha'></TextInput>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.entrarButton}><TextoNunito style={styles.entrarText}>Cadastrar</TextoNunito></TouchableOpacity>
        </View>

        <TouchableOpacity 
        style={styles.esqueciSenhaButton}
        onPress={ () => navigation.navigate('Login')}><TextoOpen style={styles.esqueciSenhaText}>Já tenho uma conta</TextoOpen></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#FAFFF9',
    flex: 1,
    justifyContent: 'center'
  },

  body:{
    height: '70%',
    width: '100%',
    paddingHorizontal: "7%",
    justifyContent: 'space-around',
    paddingVertical: '6%'
  },

  titulo:{
    fontSize: 34,
    lineHeight: 42,
    fontWeight: 'bold',
    marginBottom: 12,

  },


  logo:{
    width: '20%',
    height: '11%',
    position: 'absolute',
    top: '4%',
    alignSelf: 'center'
  },

  inputContainer:{
    width: '100%',
    flex: 2,
    justifyContent: "space-around",
    marginTop: '6%'
  },

  input:{
    backgroundColor: "#ffffff",
    width: '100%',
    height: 56,
    borderWidth: 1,
    borderColor: '#7E9F70',
    borderRadius: 10,
    paddingHorizontal: 11,
    color: '#061500'
  },

  buttonContainer:{
    width: '100%',
    flex: 1,
    justifyContent: "space-around",
    paddingVertical: '5%'
  },

  entrarButton:{
    backgroundColor: '#7E9F70',
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37
  },

  entrarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#FAFFF9',
    
  },

  criarButton:{
    backgroundColor: '#FAFFF9',
    width: '100%',
    height: 53,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 37,
    borderWidth: 1,
    borderColor: '#7E9F70',
  },

  criarText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#7E9F70',
    
  },

  esqueciSenhaButton:{
    borderBottomWidth: 1,
    borderBottomColor: '#061500',
    alignSelf: 'center'
  },

  esqueciSenhaText:{
    color: '#061500',
    fontSize: 16,
    lineHeight: 27
  },

  esqueciSenhaContainer:{
  }
})
