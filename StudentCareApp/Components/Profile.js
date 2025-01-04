import React from "react";
import { Image, ScrollView, StyleSheet, View } from "react-native";
import { Divider, Text } from "react-native-paper";

export default function Profile({ route }) {
  const { user } = route.params; 
  return (
    <>
      <ScrollView>
        <View style={style.containerStyle}>
          <Image
            source={require("../assets/logo.png")}
            style={style.imageStyle}
          />
        </View>
        <View style={style.profileContainerStyle}>
          <View style={style.profileInnerContainerStyle}>
            <Image source={user.profile_pic} style={style.profileStyle} />
            <Text variant="titleLarge">{user.name}</Text>
            <Text variant="titleSmall">
              Age: {user.age} | Gender: {user.gender}
            </Text>
          </View>
          <Divider />
          <View style={style.profileSectionStyle}>
            <Text variant="titleLarge">Contact information</Text>
            <Text variant="titleSmall">Email: {user.email}</Text>
            <Text variant="titleSmall">Phone: {user.phone}</Text>
            <Text variant="titleSmall">Address: {user.address}</Text>
          </View>
          <Divider />
          <View style={style.profileSectionStyle}>
            <Text variant="titleLarge">Biological information</Text>
            <Text variant="titleSmall">Gender: {user.gender}</Text>
            <Text variant="titleSmall">Age: {user.age}</Text>
            <Text variant="titleSmall">Bllod Group: {user.blood_group}</Text>
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
  profileStyle: {
    height: 200,
    width: 200,
    resizeMode: "contain",
  },
  profileContainerStyle: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  profileSectionStyle: {
    margin: 20,
  },
  profileInnerContainerStyle: {
    alignItems: "center",
    margin: 20,
  },
});
