import Border from "@/components/ui/Border";
import Calendar from "@/components/ui/Calendar";
import Input from "@/components/ui/Input";
import { CalendarDays, BusFront } from "lucide-react-native";
import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, Modal, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import CalendarPicker from "react-native-calendar-picker";
import { useUserContext } from "@/app/context/UserContext";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import { GenderData } from "@/components/data/lib";
import * as Location from "expo-location"; // Import Expo Location

export default function oOcrScreen5() {
  const router = useRouter();
  const [modalVisible, setModalVisible] = useState(false);
  const [genderSelected, setGenderSelected] = useState("");
  const [violationTime, setViolationTime] = useState("");
  const [violationLocation, setViolationLocation] = useState("");

  const handleCalendar = () => {
    setModalVisible(!modalVisible);
  };

  const handleNext = () => {
    router.push("/(screen)/ocr/ocr_screen_6");
  };

  const { selected_bday } = useUserContext();

  // Get current time
  useEffect(() => {
    const currentTime = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setViolationTime(currentTime);
  }, []);

  // Get current location
  useEffect(() => {
    const getLocation = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setViolationLocation("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;

      // Reverse geocode the latitude and longitude to get a readable address
      let reverseGeocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });

      if (reverseGeocode.length > 0) {
        const { city, region, country } = reverseGeocode[0];
        setViolationLocation(`${city}, ${region}, ${country}`);
      } else {
        setViolationLocation("Unable to retrieve location");
      }
    };

    getLocation();
  }, []);

  return (
    <ScrollView className="bg-white h-auto">
      <Modal
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
        className="w-full "
      >
        <View className="w-full h-auto flex flex-col p-8 gap-4 items-center ">
          <Calendar></Calendar>
          <View className="w-full">
            <Button className="w-full" onPress={handleCalendar}>
              <Text className="text-white">Select</Text>
            </Button>
          </View>
        </View>
      </Modal>
      <View className="w-full h-full bg-white">
        <View className="w-full bg-white p-8">
          <Text className="text-[#787878]">
            Please fill out the relevant information in each section
          </Text>
          <Text className="text-[#787878]">
            Fields marked with * are mandatory
          </Text>
        </View>
        <Border
          children={<BusFront color={"#fff"}></BusFront>}
          label="Personal Information"
        ></Border>
        <View className="p-8 flex gap-2">
          <Input classNameText="text-gray-400" label="First Name *"></Input>
          <Input classNameText="text-gray-400" label="Last Name *"></Input>
          <Select
            classNameText="text-gray-400"
            label="Sex"
            setSelected={(val: string) => setGenderSelected(val)}
            data={GenderData}
          ></Select>

          <View className="w-full relative  flex justify-center items-center">
            <View className="w-full relative flex justify-center items-center">
              <View className="w-full">
                <Input
                  value={selected_bday}
                  dataDetectorTypes={"calendarEvent"}
                  label="Date of Birth *"
                  classNameText="text-gray-400"
                ></Input>
              </View>
              <View className="absolute right-0 bottom-0 flex h-[50%] pr-5">
                <TouchableOpacity className="" onPress={handleCalendar}>
                  <CalendarDays color={"#1b7751"}></CalendarDays>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Input classNameText="text-gray-400" label="Nationality *"></Input>
          <Input classNameText="text-gray-400" label="Weight *"></Input>
          <Input classNameText="text-gray-400" label="Height *"></Input>
          <Input
            className="h-28"
            dataDetectorTypes={"address"}
            label="Address *"
            multiline={true}
            numberOfLines={4}
            classNameText="text-gray-400"
          ></Input>
          <Input
            classNameText="text-gray-400"
            label="Driver License Number *"
          ></Input>
          <Input classNameText="text-gray-400" label="Contact Number *"></Input>
        </View>

        {/* VEHICLE INFORMATION */}
        <Border
          children={<BusFront color={"#fff"}></BusFront>}
          label="Vehicle Information"
        ></Border>
        <View className="p-8 flex gap-2">
          <Input
            classNameText="text-gray-400"
            label="Registered Owner *"
          ></Input>
          <Input classNameText="text-gray-400" label="Plate Number *"></Input>
          <Input classNameText="text-gray-400" label="Make"></Input>
          <Input classNameText="text-gray-400" label="Class"></Input>
          <Input classNameText="text-gray-400" label="Model"></Input>
          <Input classNameText="text-gray-400" label="Vehicle Color"></Input>
          <Input classNameText="text-gray-400" label="Body Markings"></Input>
        </View>

        {/* OFFICER INFORMATION */}
        <Border
          children={<BusFront color={"#fff"}></BusFront>}
          label="Officer Information"
        ></Border>
        <View className="p-8 flex gap-2">
          <Input
            editable={false}
            value="Jayde Mike Engracia"
            classNameText="text-gray-400"
            label="Apprehending Officer"
          ></Input>
          <Input
            classNameText="text-gray-400"
            editable={false}
            value={violationTime}
            label="Time of Violation"
          ></Input>
          <Input
            classNameText="text-gray-400"
            editable={false}
            value={violationLocation}
            label="Place of Violation"
          ></Input>
          <Button onPress={handleNext} className="mt-[15px]">
            <Text className="text-white">Proceed</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
