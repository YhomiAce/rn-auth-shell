import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
    const {navigate} = useNavigation();
    const onLogout = () => {
        navigate('SignIn')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <CustomButton title='Logout' onPress={onLogout} type="Tertiary" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default HomeScreen;
