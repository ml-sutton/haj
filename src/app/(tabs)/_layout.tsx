import { Tabs } from "expo-router";

const _Layout = () => {
  return <Tabs>
    <Tabs.Screen
      name="index"
      options={{
        title: "Home",
        headerShown: false
      }}
    />
    <Tabs.Screen
      name="doses"
      options={{
        title: "Doses",
        headerShown: false
      }}
    />
    <Tabs.Screen
      name="stats"
      options={{
        title: "Statistics",
        headerShown: false
      }}
    />
    <Tabs.Screen
      name="settings"
      options={{
        title: "Settings",
        headerShown: false
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
}
export default _Layout;
