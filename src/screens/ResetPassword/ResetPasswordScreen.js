import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ResetPasswordScreen = () => {
  const { navigate } = useNavigation();
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');
  
  const onResetPasswordPress = () => {
    console.warn("signup screen");
    navigate('Home')
  };
  const onBackToSignIn = () => {
    navigate('SignIn')
  }
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Reset Your Password</Text>
        <CustomInput
          placeholder="Enter Your confirmation code"
          value={code}
          setValue={setCode}
        />
        <CustomInput
          placeholder="Enter Your new Password"
          value={password}
          setValue={setPassword}
          isSecure={true}
        />
        
        <CustomButton title="Submit" onPress={onResetPasswordPress} type="Primary" />
                
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

export default ResetPasswordScreen;
