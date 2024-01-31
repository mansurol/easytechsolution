import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { WebView } from "react-native-webview";

export default function WebScreenView({ route }) {
  const { url } = route.params;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView source={{ uri: url }} sharedCookiesEnabled={true} />
    </SafeAreaView>
  );
}
