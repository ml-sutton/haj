import { useAppInitialization } from "@/services/authService";
import { Redirect } from "expo-router";
import { ActivityIndicator, Text, View } from "react-native";

export default function Index() {
  const { status, isLoading } = useAppInitialization();
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (status === "new_user") {
    return <Redirect href="/onboarding/onboarding" />;
  }

  if (status === "locked") {
    return <Redirect href="/locked/locked" />;
  }

  if (status === "authenticated") {
    return <Redirect href="/authed/authed" />
  }
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Welcome to Haj - Home Screen</Text>
    </View>
  );
}
