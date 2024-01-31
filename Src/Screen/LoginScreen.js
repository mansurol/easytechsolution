import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { Card, Button } from "react-native-paper";
import Routes from "../../Utility/Routes";

export default function LoginScreen({ navigation, route }) {
  const { link } = route.params;

  const handleLogin = () => {
    // Open WebView with the provided link
    navigation.navigate(Routes.WebScreenView, { url: link });
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text
            style={{ fontSize: 17, fontWeight: "700", paddingVertical: 15 }}
          >
            STUDENT LOGIN
          </Text>
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
        </Card.Content>
      </Card>

      <Card style={styles.card}>
        <Card.Content>
          <Text
            style={{ fontSize: 17, fontWeight: "700", paddingVertical: 15 }}
          >
            TEACHER LOGIN
          </Text>
          <Button mode="contained" onPress={handleLogin}>
            Login
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "80%",
    marginVertical: 16,
  },
});

// Add a new screen for the WebView
