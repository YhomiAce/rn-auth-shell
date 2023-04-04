import { StyleSheet, Text, View } from "react-native";
import SignInScreen from "./src/screens/SignIn";

export default function App() {
  return (
    <View style={styles.container}>
      <SignInScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fbfc",
  },
});
