import React, { useState } from "react";
import {
  View,
  Text,
  ImageBackground,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import stylesAll from "./style";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import * as theme from "../theme";
import { firebase } from "../config/firebase";

function Register(props) {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    isError: "",
  });

  const onRegister = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then((createdUser) => {
        console.log(createdUser);
        props.navigation.navigate("LoginScreen");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/bg-login.png")}
    >
      {/* <KeyboardAwareScrollView style={{ flex: 1, width: '100%' }} */}
      {/* keyboardShouldPersistTaps="always"> */}
      <View style={styles.container}>
        <View style={styles.loginHeader}>
          <Text style={styles.loginTitle1}>BUAT AKUN</Text>
          <Text style={styles.loginTitle2}>Lorem</Text>
        </View>
        <View style={styles.loginBody}>
          <View style={stylesAll.formContainer}>
            <View style={stylesAll.inputContainer}>
              <View>
                <Text style={stylesAll.labelText}>Username</Text>
                <TextInput
                  style={stylesAll.textInput}
                  placeholder="Masukkan Username"
                  onChangeText={(username) =>
                    setData({ ...data, username: username })
                  }
                />
              </View>
            </View>
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
                  onChangeText={(password) =>
                    setData({ ...data, password: password })
                  }
                  secureTextEntry={true}
                />
              </View>
            </View>
            <Text
              style={
                data.isError ? stylesAll.errorText : stylesAll.hiddenErrorText
              }
            >
              Password Salah
            </Text>
            <TouchableOpacity
              style={[stylesAll.button, stylesAll.btnGreen]}
              onPress={() => onRegister()}
            >
              <Text style={stylesAll.btnTextGreen}>DAFTAR</Text>
            </TouchableOpacity>
            <Text style={stylesAll.divider}>ATAU</Text>
            <TouchableOpacity style={[stylesAll.button, stylesAll.btnBlack]}>
              <Text style={stylesAll.btnTextBlack}>MASUK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* </KeyboardAwareScrollView> */}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
  },
  loginHeader: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  loginBody: {
    width: "90%",
  },
  loginTitle1: {
    fontSize: 36,
    fontWeight: "bold",
    color: theme.colors.white,
  },
  loginTitle2: {
    fontSize: 20,
    fontWeight: "bold",
    color: theme.colors.white,
  },
});

export default Register;
