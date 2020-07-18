import { StyleSheet } from 'react-native'
import * as theme from '../theme'

const stylesAll = StyleSheet.create({
  button: {
    display: 'flex',
    height: 50,
    width: '100%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    shadowOpacity: 0.4,
    shadowOffset: { height: 10, width: 0 },
    shadowRadius: 20,
  },
  btnGreen:{
    backgroundColor: theme.colors.green, 
  },
  btnBlack:{
    backgroundColor: theme.colors.black, 
  },
  btnTextBlack: {
    fontSize: 18,
    color: theme.colors.white,
  },
  btnTextGreen: {
    fontSize: 18,
    color: theme.colors.Black,
  },
  formContainer: {
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 16,
  },
  textInput: {
    width: 300,
    backgroundColor: 'white',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    marginBottom: 16,
  },
  hiddenErrorText: {
    color: 'transparent',
    textAlign: 'center',
    marginBottom: 16,
  },
  divider: {
    textAlign: 'center',
    padding: 10,
    color: theme.colors.gray
  },
})

export default stylesAll