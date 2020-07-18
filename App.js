import React, { useState, useEffect } from 'react';
import Intro from './screens/Intro'
import { AsyncStorage } from 'react-native'

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

  if(data.intro === "true"){
    return (
      <></>
    )  
  }

  return (
    <Intro />
  );
}