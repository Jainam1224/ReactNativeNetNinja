import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      // applied to each individial screen, i.e. common options for each screen
      screenOptions={{
        headerStyle: { backgroundColor: "#ddd" },
        headerTintColor: "#333",
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
  );
}

// Layout files are rendered first even before index.jsx by expo-router
// So, we need to explicitly tell expo router when to render layout file
