// app/_layout.js
import { Slot } from "expo-router";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useMemo } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";

const theme = extendTheme({
  config: { initialColorMode: "light" },
});

export default function Layout() {
  const stableTheme = useMemo(() => theme, []);

  return (
    <SafeAreaProvider>
      <NativeBaseProvider theme={stableTheme}>
        <Slot />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
}
