import React from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Card, Button } from "react-native-paper";
import Routes from "../../Utility/Routes";

export default function LoginScreen({ navigation, route }) {
  const { link, name } = route.params;
  const NoticeList = [
    {
      id: "1",
      name: "১ম সেমিস্টার পরীক্ষা-২০২৪ এর সময়সূচি (একাদশ শ্রেণি) - 18/02/2024",
    },
    {
      id: "2",
      name: "আন্তর্জাতিক মাতৃভাষা দিবস-২০২৪ উপলক্ষে আয়োজিত অনুষ্ঠানমালা। - 18/02/2024",
    },
    { id: "3", name: "৪র্থ সেমিস্টার পরীক্ষা-২০২৪ এর সময়সূচি। - 18/02/2024" },
    {
      id: "4",
      name: "বার্ষিক দেয়ালিকা-২০২৪ প্রকাশের জন্য লেখা জমাদান প্রসঙ্গে। - 18/02/2024",
    },
    { id: "5", name: "জাবি কেন্দ্রের আসন বিন্যাস (এসএসসি-২০২৪) - 14/02/2024" },
    {
      id: "6",
      name: "স্কুল শাখার ক্লাসের সময়সূচি (এসএসসি পরীক্ষা চলাকালীন) এবং দুইদিন বন্ধ সংক্রান্ত নোটিশ। - 13/02/2024",
    },
    {
      id: "7",
      name: "এসএসসি পরীক্ষা-২০২৪ এর আসন বিন্যাস (ভোকেশনাল)। - 13/02/2024",
    },
    { id: "8", name: "এসএসসি পরীক্ষা-২০২৪ এর আসন বিন্যাস। - 13/02/2024" },
    {
      id: "9",
      name: "আগামী ১৪/০২/২৪ তারিখ শ্রেণি কার্যক্রম বন্ধ সংক্রন্ত নোটিশ। - 13/02/2024",
    },
    {
      id: "10",
      name: "বার্ষিক ম্যাগাজিন-২০২৪ প্রকাশের জন্য লেখা জমাদান প্রসঙ্গে। - 12/02/2024",
    },
    {
      id: "11",
      name: "আগামী 07/02/2024 তারিখ স্কুল শাখা ৪র্থ পিরিয়ডে ছুটি সংক্রান্ত নোটিশ। - 06/02/2024",
    },
  ];
  const handleLogin = () => {
    // Open WebView with the provided link
    navigation.navigate(Routes.WebScreenView, { url: link });
  };

  const NoticeCard = ({ item }) => (
    <TouchableOpacity
      style={styles.cardTwo}
      // onPress={() =>
      //   navigation.navigate(Routes.LoginScreen, {
      //     link: item.link,
      //     name: item.name,
      //   })
      // }
    >
      <Text style={styles.cardText}>{item.name}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: "700",
          marginBottom: 10,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        {name}
      </Text>
      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={handleLogin}>
            STUDENT LOGIN
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Button mode="contained" onPress={handleLogin}>
            TEACHER LOGIN
          </Button>
        </Card.Content>
      </Card>

      <View>
        <View>
          <Text
            style={{
              paddingTop: 20,
              fontSize: 25,
              fontWeight: "700",
            }}
          >
            Notice{" "}
          </Text>
        </View>
        <View style={styles.sectionTitle}>
          <FlatList
            data={NoticeList}
            keyExtractor={(item) => item.id}
            renderItem={NoticeCard}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  card: {
    width: "100%",
    marginVertical: 6,
  },
  cardTwo: {
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
    color: "#3367D1",
  },
  sectionTitle: {
    paddingTop: 20,
    fontSize: 25,
    fontWeight: "700",
  },
});
