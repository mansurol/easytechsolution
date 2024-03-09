import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Routes from "../Utility/Routes";
import SchoolList from "../Src/Screen/SchoolList";
import LoginScreen from "../Src/Screen/LoginScreen";
import WebScreenView from "../Src/Screen/WebScreenView";
import Noticedetails from "../Src/Screen/Noticedetails";

const Stack = createNativeStackNavigator();

export default function StackNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Routes.SchoolList}
        component={SchoolList}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.LoginScreen}
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.WebScreenView}
        component={WebScreenView}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Routes.Noticedetails}
        component={Noticedetails}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
