import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import supabase from "../../lib/supabase";

export default function PharmacySignupScreen() {
  const [pharmacyName, setPharmacyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");

  const router = useRouter();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          pharmacy_name: pharmacyName,
          phone,
          license_number: licenseNumber,
        },
      },
    });

    if (error) {
      Alert.alert("Signup Failed", error.message);
    } else {
      Alert.alert(
        "Success",
        "Account created! Please check your email to verify your account."
      );
      router.push("/pharmacy/login");
    }
  };

  return (
    <LinearGradient
      colors={["#0057B7", "#009973"]} // gradient colors
      style={styles.gradient}
    >
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.wrapper}>
          <Text style={styles.title}>Create an Account</Text>
          <Text style={styles.subtitle}>Manage your pharmacy digitally</Text>

          <TextInput
            style={styles.input}
            placeholder="Pharmacy Name"
            placeholderTextColor="#fff"
            value={pharmacyName}
            onChangeText={setPharmacyName}
          />

          <TextInput
            style={styles.input}
            placeholder="Email Address"
            placeholderTextColor="#fff"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            style={styles.input}
            placeholder="Phone Number (WhatsApp enabled)"
            placeholderTextColor="#fff"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />

          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#fff"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor="#fff"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <TextInput
            style={styles.input}
            placeholder="License Number"
            placeholderTextColor="#fff"
            value={licenseNumber}
            onChangeText={setLicenseNumber}
          />

          <TouchableOpacity style={styles.button} onPress={handleSignup}>
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push("/pharmacy/login")}>
            <Text style={styles.link}>
              Already have an account?{" "}
              <Text style={styles.linkHighlight}>Sign In</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  wrapper: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    marginBottom: 3,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "white",
    marginBottom: 60,
    textAlign: "center",
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.3)",
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 15,
    color: "white",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#00b894",
    fontWeight: "bold",
    fontSize: 16,
  },
  link: {
    color: "white",
    textAlign: "center",
    marginTop: 15,
  },
  linkHighlight: {
    textDecorationLine: "underline",
    color: "yellow",
  },
});
