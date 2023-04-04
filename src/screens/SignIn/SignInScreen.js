import React, { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import Logo from "../../../assets/images/Logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();
  const onSignIn = () => {
    console.log(username, password);
  };
  const onForgotPassword = () => {
    console.log(username, password);
  };
  const onSignInWithFb = () => {
    console.log(username, password);
  };
  const onSignInWithGoogle = () => {
    console.log(username, password);
  };
  const onSignInWithApple = () => {
    console.log(username, password);
  };
  const onSignupPress = () => {
    console.warn("signup screen");
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
        <CustomButton
          title="Sign In with Facebook"
          onPress={onSignInWithFb}
          type="Primary"
          bgColor="#E7EAF4"
          fgColor="#4765A9"
        />
        <CustomButton
          title="Sign In with Google"
          onPress={onSignInWithGoogle}
          type="Primary"
          bgColor="#fae9ea"
          fgColor="#dd4d44"
        />
        <CustomButton
          title="Sign In with Apple"
          onPress={onSignInWithApple}
          type="Primary"
          bgColor="#e3e3e3"
          fgColor="#363636"
        />
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
