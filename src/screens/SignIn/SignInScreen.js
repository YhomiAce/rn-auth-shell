import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  View,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/Logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import SocialSignInButton from "../../components/SocialSignInButton";
import { useNavigation } from "@react-navigation/native";

const SignInScreen = () => {
  const { navigate } = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignIn = () => {
    console.log(username, password);
    navigate("Home");
  };
  const onForgotPassword = () => {
    navigate("ForgotPassword");
  };
  const onSignupPress = () => {
    navigate("SignUp");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, { height: height * 0.3 }]}
          resizeMode="contain"
        />
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          isSecure={true}
        />
        <CustomButton title="SignIn" onPress={onSignIn} type="Primary" />
        <CustomButton
          title="Forgot Password"
          onPress={onForgotPassword}
          type="Tertiary"
        />
        <SocialSignInButton />
        <CustomButton
          title="Don't have an account? Create one"
          onPress={onSignupPress}
          type="Tertiary"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    padding: 20,
  },
  logo: {
    width: "70%",
    maxWidth: 400,
    maxHeight: 200,
  },
});

export default SignInScreen;
