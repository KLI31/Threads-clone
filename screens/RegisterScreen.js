import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  KeyboardAvoidingView,
  TextInput
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View style={{ marginTop: 50 }}>
        <Image
          source={{
            uri: "https://freelogopng.com/images/all_img/1688663386threads-logo-transparent.png"
          }}
          style={{ width: 150, height: 100, resizeMode: "contain" }}
        />
      </View>

      <KeyboardAvoidingView style={{ marginTop: 12 }}>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={styles.text}>Register to you account</Text>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderWidth: 1,
              borderColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5
            }}
          >
            <FontAwesome
              name="user"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              onChange={(text) => setUser(text)}
              value={user}
              placeholder="Enter your email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderWidth: 1,
              borderColor: "#D0D0D0",
              paddingVertical: 5,
              borderRadius: 5
            }}
          >
            <Feather
              name="mail"
              size={24}
              color="gray"
              style={{ marginLeft: 8 }}
            />
            <TextInput
              onChange={(text) => setEmail(text)}
              value={email}
              placeholder="Enter your email"
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16
              }}
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderWidth: 1,
                borderColor: "#D0D0D0",
                paddingVertical: 5,
                borderRadius: 5
              }}
            >
              <AntDesign
                name="lock1"
                size={24}
                color="gray"
                style={{ marginLeft: 8 }}
              />
              <TextInput
                value={password}
                onChange={(text) => setPassword(text)}
                placeholder="Enter your password"
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16
                }}
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 18
            }}
          >
            <Text>Keep me login</Text>
            <Text style={{ fontWeight: 500, color: "#007FFF" }}>
              Forgot password
            </Text>
          </View>

          <View style={{ marginTop: 45 }}>
            <Pressable
              style={{
                marginTop: 40,
                alignItems: "center",
                backgroundColor: "black",
                padding: 15,
                width: 200,
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto"
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                  textAlign: "center"
                }}
              >
                Register
              </Text>
            </Pressable>
            <Pressable style={{ marginTop: 20, alignItems: "center" }}>
              <Text
                style={{ fontSize: 16 }}
                onPress={() => navigation.goBack()}
              >
                Already have an account? Login
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  text: {
    fontWeight: "bold",
    marginTop: 20,
    fontSize: 17
  }
});
