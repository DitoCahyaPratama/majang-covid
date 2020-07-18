import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native'
import { IntroScreen, LoginScreen, RegisterScreen, BerandaScreen, NotifikasiScreen } from './screens'

export default function App() {
  const [data, setData] = useState({
    intro: false
  })

  useEffect(() => {
    const _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('intro');
        if (value !== null) {
          console.log(value);
          setData({
            ...data,
            intro: value
          })
        }
      } catch (err) {
        console.log(err)
      }
    };
    _retrieveData()
  }, [])

  if (data.intro === "true") {
    return (
      // <LoginScreen />
      // <RegisterScreen />
      // <BerandaScreen />
      <NotifikasiScreen />
    )
  }

  return (
    <IntroScreen />
  );
}