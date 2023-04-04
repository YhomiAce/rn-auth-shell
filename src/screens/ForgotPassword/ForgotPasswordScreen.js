import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ForgotPasswordScreen = () => {
  const {navigate} = useNavigation();
  const [username, setUsername] = useState('');
  
  const onResetPasswordPress = () => {
    console.warn("Reset Password press");
    navigate('ResetPassword')
  };
  const onBackToSignIn = () => {
    navigate('SignIn')
  }
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>
        <CustomInput
          placeholder="Enter Username or Email"
          value={username}
          setValue={setUsername}
        />
        
        <CustomButton title="Send" onPress={onResetPasswordPress} type="Primary" />
                
        <CustomButton
          title="Back to Sign in"
          onPress={onBackToSignIn}
          type="Tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#051C60",
    margin: 10,
  },
  text: {
    color: "gray",
    marginVertical: 10,
  },
  link: {
    color: "#FDB075",
  },
});

export default ForgotPasswordScreen;
