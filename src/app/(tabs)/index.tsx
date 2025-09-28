import CalenderCard from "@/components/index/calenderCard";
import { NextDoseCard } from "@/components/index/nextDoseCard";
import { WelcomeCard } from "@/components/index/welcomeCard";
import { ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={{ backgroundColor: "#0000bb" }}>
      <WelcomeCard />
      <NextDoseCard />
      <CalenderCard />
    </ScrollView>
  );
}
