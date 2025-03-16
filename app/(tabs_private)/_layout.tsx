import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { NotebookPen, Settings } from "lucide-react-native";

export default function TabPrivateLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3E7C1F",
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          android: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          headerShown: false,
          title: "Dashboard",
          tabBarIcon: ({ color }) => (
            <IconSymbol size={28} name="house.fill" color={color} />
          ),
          tabBarStyle: {}, // Specific hide on this screen
        }}
      />
      <Tabs.Screen
        name="citation"
        options={{
          headerShown: false,
          title: "Record",
          tabBarIcon: ({ color }) => <NotebookPen color={color}></NotebookPen>,
          tabBarStyle: {}, // Specific hide on this screen
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          headerShown: false,
          title: "Settings",
          tabBarIcon: ({ color }) => <Settings color={color}></Settings>,
          tabBarStyle: {}, // Specific hide on this screen
        }}
      />
     
    </Tabs>
  );
}
