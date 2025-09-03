import { useRouter } from "expo-router";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Defs, RadialGradient, Rect, Stop } from "react-native-svg";

export default function PharmacyLoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log({ email, password });
    // TODO: Add login logic here
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Radial Gradient Background */}
      <Svg height="100%" width="100%" style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient
            id="grad"
            cx="20%"
            cy="-20%"
            r="70%"
            fx="20%"
            fy="50%"
          >
            <Stop offset="20%" stopColor="#0057B7" stopOpacity="1" />
            <Stop offset="100%" stopColor="#00b894" stopOpacity="1" />
          </RadialGradient>
        </Defs>
        <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)" />
      </Svg>

      {/* Foreground Content */}
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Access your pharmacy dashboard</Text>

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#fff"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/pharmacy/signup")}>
            <Text style={styles.link}>
              Don’t have an account?{" "}
              <Text style={styles.linkHighlight}>Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1 },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 20,
    textAlign: "center",
    marginBottom: 50,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 12,
    color: "white",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
    marginBottom: 15,
  },
  buttonText: { color: "#00b894", fontWeight: "bold", fontSize: 16 },
  link: { color: "white", textAlign: "center" },
  linkHighlight: { color: "yellow", textDecorationLine: "underline" },
});
