import { Header } from "@/components/global/header";
import { Tabs } from "expo-router";

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          header: () => <Header route={"Home"} />,
        }}
      />
      <Tabs.Screen
        name="doses"
        options={{
          title: "Doses",
          header: () => <Header route={"Doses"} />
        }}
      />
      <Tabs.Screen
        name="stats"
        options={{
          title: "Statistics",
          header: () => <Header route={"Statistics"} />
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          header: () => <Header route={"Settings"} />
        }}
      />
      <Tabs.Screen
        name="eject"
        options={{
          title: "Eject",
          headerShown: false
        }}
      />
    </Tabs>
  );
};
export default _Layout;
