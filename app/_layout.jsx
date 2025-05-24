import { Stack } from "expo-router";
import { Colors } from "../constants/Colors";
import { useColorScheme } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <StatusBar value="auto" />
      <Stack
        // applied to each individial screen, i.e. common options for each screen
        screenOptions={{
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
        }}
      >
        {/* Individual Screens */}
        <Stack.Screen name="index" options={{ title: "Home" }} />
        <Stack.Screen name="about" options={{ title: "About" }} />
        <Stack.Screen
          name="contact"
          options={{ title: "Contact", headerShown: false }} // headerShown: false means header should not be visible for this page.
        />
      </Stack>
    </>
  );
}

// Layout files are rendered first even before index.jsx by expo-router
// So, we need to explicitly tell expo router when to render layout file
