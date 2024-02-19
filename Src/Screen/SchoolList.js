import React from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Routes from "../../Utility/Routes";

const SchoolList = ({ navigation }) => {
  const schools = [
    {
      id: "1",
      name: "AKULI CHALA JUNIOR SCHOOL",
      link: "https://easyresult.easytechsolution.org/student_login.php",
      noticeApi: "https://services.apistore.dev/apistore/countries/v1",
    },
    { id: "2", name: "BHAWMAN TALAGAHA MODEL HIGH SCHOOL" },
    { id: "3", name: "BIJOY SMARANI JR. SCHOOL" },
    { id: "4", name: "JATHALIA ALAL SIKDER JUNIOR HIGH SCHOOL" },
    { id: "5", name: "JATIR PITA BANGA BANDHU HIGH SCHOOL" },
    { id: "6", name: "JOBED ALI  SARKER JUNIOR  GIRLS SCHOOL" },
    { id: "7", name: "RAMCHANDRAPUR JUNIOR HIGH SCHOOL" },
    { id: "8", name: "AKKEL ALI HIGH SCHOOL" },
    { id: "9", name: "ARAIGANJ AZIM HIGH SCHOOL" },
    { id: "10", name: "ASRAF ALI  M.L HIGH SCHOOL" },
    { id: "11", name: "BALIADI M.L HIGH SCHOOL" },
  ];

  const renderSchoolCard = ({ item }) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() =>
        navigation.navigate(Routes.LoginScreen, {
          link: item.link,
          name: item.name,
        })
      }
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Please Select Your School Or College</Text>

      <FlatList
        data={schools}
        keyExtractor={(item) => item.id}
        renderItem={renderSchoolCard}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#fff",
    padding: 16,
    marginVertical: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    elevation: 3, // Add shadow for Android
    shadowColor: "#000", // Add shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  cardText: {
    fontSize: 13,
    fontWeight: "500",
  },
  Title: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    padding: 24,
  },
});

export default SchoolList;
