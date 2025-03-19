import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import "../global.css";
import { useColorScheme } from "@/hooks/useColorScheme";
import { UserProvider } from "./context/UserContext";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <UserProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(tabs_private)"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="(screen)" options={{ headerShown: false }} />
          <Stack.Screen
            name="(screen)/cite_option/cite_option"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_1"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_2"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_3"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_4"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_5"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="(screen)/ocr/ocr_screen_6"
            options={{ headerShown: false }}
          />
          <Stack.Screen name="+not-found" />
        </Stack>
      </UserProvider>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
