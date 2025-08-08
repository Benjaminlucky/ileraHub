// app/index.js
import { useRouter } from "expo-router";
import { Button, Center, Text, VStack } from "native-base";
import { Pressable, SafeAreaView } from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <Center flex={1} px={4}>
        <Text fontSize="4xl" fontWeight="bold" color="#0057b7">
          <Text color="#003c87">Ilera</Text>Hub
        </Text>
        <Text fontSize="md" mt={-1} color="emerald.500" fontWeight="medium">
          Shop Safe, Heal Fast
        </Text>

        <VStack space={4} mt={10} alignItems="center">
          <Button bg="#0057B7" w="64">
            Shop as Customer
          </Button>
          <Button
            bg="#4A90E2"
            w="64"
            onPress={() => router.push("/pharmacy/signup")}
          >
            Manage Your Pharmacy
          </Button>
        </VStack>
      </Center>

      <Pressable onPress={() => console.log("Admin Login Pressed")}>
        <Text fontSize="sm" color="#4A90E2" mt={10} textAlign="center">
          Admin Login
        </Text>
      </Pressable>
    </SafeAreaView>
  );
}
