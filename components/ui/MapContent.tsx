import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { LocationObject } from "expo-location";
import MapView, { Marker, MapType } from "react-native-maps"; // Use MapType
import Button from "./Button";
import { MapPin, MapPinHouse, Mountain, Satellite } from "lucide-react-native";

export default function MapContent() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [mapType, setMapType] = useState<MapType>("hybrid"); // Use MapType for the state

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  // Function to handle map type changes
  const handleMapTypeChange = (type: MapType) => {
    setMapType(type);
  };

  return (
    <View
      style={{
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        overflow: "hidden",
        alignItems: "center",
        justifyContent: "center",
        borderColor:"#1b7751"
      }}
      className="flex w-full h-full"
    >
      {/* Buttons for selecting map style */}
      <View className="flex flex-row  absolute z-50 right-0 gap-2 mr-[57px] mt-3 top-0">
        <Button
          className={`p-0 h-[40] w-[40px] rounded-full ${
            mapType === "standard" ? "bg-[#ffffffce]" : "bg-[#ffffffa4]"
          }`}
          onPress={() => handleMapTypeChange("standard")}
        >
          <MapPin color={"#666666"}></MapPin>
        </Button>
        <Button
          className={`p-0 h-[40] w-[40px] rounded-full ${
            mapType === "satellite" ? "bg-[#ffffffce]" : "bg-[#ffffffa4]"
          }`}
          onPress={() => handleMapTypeChange("satellite")}
        >
          <Satellite color={"#666666"}></Satellite>
        </Button>
        <Button
          className={`p-0 h-[40] w-[40px] rounded-full ${
            mapType === "hybrid" ? "bg-[#ffffffce]" : "bg-[#ffffffa4]"
          }`}
          onPress={() => handleMapTypeChange("hybrid")}
        >
          <MapPinHouse color={"#666666"}></MapPinHouse>
        </Button>
        <Button
          className={`p-0 h-[40] w-[40px] rounded-full ${
            mapType === "terrain" ? "bg-[#ffffffce]" : "bg-[#ffffffa4]"
          }`}
          onPress={() => handleMapTypeChange("terrain")}
        >
          <Mountain color={"#666666"}></Mountain>
        </Button>
      </View>

      <MapView
        style={{ flex: 1, height: "100%", width: "100%", borderRadius: 15 }}
        showsUserLocation={true}
        mapType={mapType}
        region={{
          latitude: location?.coords.latitude || 37.78825,
          longitude: location?.coords.longitude || -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {location && (
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title={"Your Location"}
            description={"You are here"}
          />
        )}
      </MapView>
    </View>
  );
}
