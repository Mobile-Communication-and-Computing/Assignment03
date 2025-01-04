import { useState } from "react";
import { Image, View, StyleSheet, Alert } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <>
      <View style={style.containerStyle}>
        <Image
          source={require("../assets/logo.png")}
          style={style.imageStyle}
        />
      </View>
      <View style={style.headingStyle}>
        <Text variant="displayMedium">Student Login</Text>
      </View>
      <View style={style.formStyle}>
        <TextInput
          mode="outlined"
          label="Username"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          mode="outlined"
          label="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
          right={<TextInput.Icon icon="eye" />}
        />
        <View style={style.buttonStyle}>
            <Button mode="contained" buttonColor="#70116d" onPress={handleLogin}>Login</Button>
        </View>
      </View>
    </>
  );
}

const style = StyleSheet.create({
  containerStyle: {
    alignItems: "center",
  },
  imageStyle: {
    height: 100,
    width: 300,
    resizeMode: "contain",
  },
  headingStyle: {
    alignItems: "center",
  },
  formStyle:{
    margin:20,
  },
  buttonStyle:{
    marginTop:10,
  },
});
