import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { LocationObject } from "expo-location";
import MapView, { Marker } from 'react-native-maps';

export default function MapContent() {
  const [location, setLocation] = useState<LocationObject | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View className="flex w-full h-full">
      <MapView
        style={{ width: "100%", height: "100%" }}
        showsUserLocation={true}
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
