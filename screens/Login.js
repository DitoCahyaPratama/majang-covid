import React, { useState } from 'react'
import { View, Text, ImageBackground, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import stylesAll from './style'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import * as theme from '../theme'

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
    isError: '',
  })
  return (
    <ImageBackground style={{ flex: 1 }} source={require('../assets/bg-login.png')}>
      {/* <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }} */}
      {/* keyboardShouldPersistTaps="always"> */}
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginTitle1}>MAJANG</Text>
          <Text style={styles.loginTitle1}>COVID 19</Text>
        </View>
        <View style={styles.loginBody}>
          <View style={stylesAll.formContainer}>
            <View style={stylesAll.inputContainer}>
              <View>
                <Text style={stylesAll.labelText}>Email</Text>
                <TextInput
                  style={stylesAll.textInput}
                  placeholder="Masukkan Email"
                  onChangeText={(email) => setData({ ...data, email: email })}
                />
              </View>
            </View>

            <View style={stylesAll.inputContainer}>
              <View>
                <Text style={stylesAll.labelText}>Password</Text>
                <TextInput
                  style={stylesAll.textInput}
                  placeholder="Masukkan Password"
                  onChangeText={(password) => setData({ ...data, password: password })}
                  secureTextEntry={true}
                />
              </View>
            </View>
            <Text style={{ textAlign: 'right' }}>Lupa password ?</Text>
            <Text style={data.isError ? stylesAll.errorText : stylesAll.hiddenErrorText}>Password Salah</Text>
            <TouchableOpacity style={[stylesAll.button, stylesAll.btnGreen]} onPress={() => loginHandler()}>
              <Text style={stylesAll.btnTextGreen}>MASUK</Text>
            </TouchableOpacity>
            <Text style={stylesAll.divider}>
              ATAU
            </Text>
            <TouchableOpacity style={[stylesAll.button, stylesAll.btnBlack]} onPress={() => { }}>
              <Text style={stylesAll.btnTextBlack}>DAFTAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  loginHeader: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  loginBody: {
    width: '90%',
  },
  loginTitle1: {
    fontSize: 36,
    fontWeight: 'bold',
    color: theme.colors.white
  },
})

export default Login