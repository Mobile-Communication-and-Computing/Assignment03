import { useState } from "react";
import { Image, View, StyleSheet, Alert, ScrollView } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { students } from "../assets/Data/StudentsDb";
import { useNavigation } from "@react-navigation/native";
import Error from "./Error";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigation = useNavigation();

  const handleLogin = () => {
    const user = students.find(
      (student) => student.username == username && student.password == password
    );

    if (username == "" || password == "") {
      setError(true);
    } else if (user) {
      navigation.navigate("BottomTab", { user });
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <>
      <ScrollView keyboardShouldPersistTaps="handled">
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
            <Button
              mode="contained"
              buttonColor="#70116d"
              onPress={handleLogin}
            >
              Login
            </Button>
            {error ? (
              <Error text="Please check your username and password" />
            ) : (
              <></>
            )}
          </View>
        </View>
      </ScrollView>
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
  formStyle: {
    margin: 20,
  },
  buttonStyle: {
    marginTop: 10,
  },
});
