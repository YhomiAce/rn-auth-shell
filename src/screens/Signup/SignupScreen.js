import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const SignupScreen = () => {
  const {navigate} = useNavigation();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { username, email, password, confirmPassword } = formData;
  
  const onSignupPress = () => {
    console.warn("signup screen");
    navigate('Confirm')
  };
  const onSignInPress = () => {
    navigate('SignIn')
  };
  const termsOfUsePressed = () => {
    console.warn("navigate to termsOfUsePressed screen");
  };
  const privacyPolicyPress = () => {
    console.warn("navigate to privacyPolicyPress screen");
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Text style={styles.title}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setFormData}
        />
        <CustomInput placeholder="Email" value={email} setValue={setFormData} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setFormData}
          isSecure={true}
        />
        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setFormData}
          isSecure={true}
        />
        <CustomButton title="Register" onPress={onSignupPress} type="Primary" />
        <Text style={styles.text}>
          By registering, you confirm that you accept our{" "}
          <Text onPress={termsOfUsePressed} style={styles.link}>Terms of use</Text> and{" "}
          <Text onPress={privacyPolicyPress} style={styles.link}>Privacy Policy.</Text>
        </Text>
        
       <SocialSignInButton />
        <CustomButton
          title="Have an account? Sign In"
          onPress={onSignInPress}
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

export default SignupScreen;
