import React, { useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  AsyncStorage,
} from "react-native";
import Icon from "@expo/vector-icons/MaterialIcons";
import AppIntroSlider from "react-native-app-intro-slider";
import * as theme from "../theme";

const slides = [
  {
    key: "one",
    title: "Title 1",
    text: "Description.\nSay something cool",
    image: require("../assets/doctor.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: "two",
    title: "Title 2",
    text: "Other cool stuff",
    image: require("../assets/mask.png"),
    backgroundColor: "#febe29",
  },
  {
    key: "three",
    title: "Rocket guy",
    text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
    image: require("../assets/distance.png"),
    backgroundColor: "#22bcb5",
  },
];

function Intro(props) {
  const _storeData = async () => {
    try {
      await AsyncStorage.setItem("intro", "true");
    } catch (error) {
      console.log(error);
    }
  };
  const _renderItem = ({ item }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  const _renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          style={{ color: theme.colors.black }}
          name="navigate-next"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const _renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Icon
          style={{ color: theme.colors.black }}
          name="done"
          color="rgba(255, 255, 255, .9)"
          size={24}
        />
      </View>
    );
  };
  const saveData = () => {
    _storeData();
  };
  return (
    <ImageBackground
      style={styles.slide}
      source={require("../assets/bg-intro.png")}
    >
      <AppIntroSlider
        data={slides}
        renderItem={_renderItem}
        renderDoneButton={_renderDoneButton}
        renderNextButton={_renderNextButton}
        activeDotStyle={styles.activeDot}
        onDone={() => saveData(props.navigation.navigate("LoginScreen"))}
      />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  slide: {
    width: "100%",
    height: "100%",
  },
  activeDot: {
    backgroundColor: theme.colors.green,
  },
  item: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  buttonCircle: {
    width: 40,
    height: 40,
    backgroundColor: theme.colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    color: theme.colors.black,
  },
  image: {
    height: 250,
    width: 250,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  text: {
    fontSize: 18,
    textAlign: "center",
  },
});

export default Intro;
