import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation } from "@react-navigation/native";

const ConfirmSignupScreen = () => {
  const { navigate } = useNavigation();
  const [code, setCode] = useState('');
  
  const onConfirmPress = () => {
    console.warn("Confirm press");
    navigate('Home');
  };
  const onBackToSignIn = () => {
    navigate('SignIn')
  }
  const onResendCode = () => {
    console.warn("Resend confirm code");
  };
  

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Confirm Your Email</Text>
        <CustomInput
          placeholder="Enter Your confirmation code"
          value={code}
          setValue={setCode}
        />
        
        <CustomButton title="Confirm" onPress={onConfirmPress} type="Primary" />
                
        <CustomButton
          title="Resend Code"
          onPress={onResendCode}
          type="Secondary"
        />
        <CustomButton
          title="Back to Signin"
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

export default ConfirmSignupScreen;
