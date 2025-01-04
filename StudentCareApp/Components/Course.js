import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Divider, Text } from "react-native-paper";
import { courses } from "../assets/Data/StudentsDb";

export default function Course({ route }) {
  const { user } = route.params || {};

  const course = courses.find((course) => course.id === user.course_id);
  return (
    <>
      <ScrollView>
        <View style={style.containerStyle}>
          <Image
            source={require("../assets/logo.png")}
            style={style.imageStyle}
          />
        </View>
        <View style={style.courseContainerStyle}>
          <View style={style.courseInnerContainerStyle}>
            <Text variant="displaySmall">{course.name}</Text>
            <Text variant="bodyLarge">
              Code: {course.course_code} | Dept.: {course.department}
            </Text>
          </View>
          <Divider />
          <View style={style.courseSectionStyle}>
            <Text variant="titleLarge">Course Information</Text>
            <Text variant="bodyLarge">Code: {course.course_code}</Text>
            <Text variant="bodyLarge">Duration: {course.duration}</Text>
            <Text variant="bodyLarge">Description: {course.description}</Text>
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
  courseContainerStyle: {
    backgroundColor: "#fff",
    margin: 15,
    borderRadius: 10,
    padding: 20,
    elevation: 3,
  },
  courseSectionStyle: {
    margin: 20,
  },
  courseInnerContainerStyle: {
    alignItems: "center",
    margin: 20,
  },
});
