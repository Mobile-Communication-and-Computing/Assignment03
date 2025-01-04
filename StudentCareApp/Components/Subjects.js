import { ScrollView, View, StyleSheet, Image } from "react-native";
import { Divider, Text } from "react-native-paper";
import { courses } from "../assets/Data/StudentsDb";
import { subjects } from "../assets/Data/StudentsDb";
import { marks } from "../assets/Data/StudentsDb";

export default function Subjects({ route }) {
  const { user } = route.params || {};

  const course = courses.find((course) => course.id === user.course_id);
  const subs = subjects.filter((sub) => course.id == sub.course_id);

  const mrks = marks.filter((mark) => user.id == mark.student_id);
  const getTotal = (array) => {
    let sum = 0;
    for (let index = 0; index < array.length; index++) {
      sum = sum + array[index].marks;
    }
    return sum;
  };

  const average = getTotal(mrks) / subs.length;

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
              {subs.length} Subjects | Average: {Math.floor(average)}
            </Text>
          </View>
          <Divider />
          <View>
            <Text variant="titleLarge">Marks Information</Text>
            <View style={style.tableHeading}>
              <Text variant="bodyLarge">Subject</Text>
              <Text variant="bodyLarge">Mark</Text>
            </View>
          </View>
          <View>
            {subs.map((sub) => {
              const subjectMarks = mrks.find(
                (mark) => mark.subject_id === sub.id
              );
              return (
                <View key={sub.id} style={style.tableRow}>
                  <Text variant="bodyMedium">{sub.name}</Text>
                  <Text variant="bodyMedium">
                    {subjectMarks ? subjectMarks.marks : "N/A"}
                  </Text>
                </View>
              );
            })}
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
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  tableHeading: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
    color:'#BCCCDC',
  },
});
