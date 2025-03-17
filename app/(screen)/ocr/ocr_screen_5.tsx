import Border from "@/components/ui/Border";
import Calendar from "@/components/ui/Calendar";
import Input from "@/components/ui/Input";
import { CalendarDays, CalendarSearch, Check, X } from "lucide-react-native";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  View,
  Modal,
  Alert,
  TouchableOpacity,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import { useUserContext } from "@/app/context/UserContext";
import Button from "@/components/ui/Button";

export default function oOcrScreen5() {
  const [modalVisible, setModalVisible] = useState(false);
  const handleCalendar = () => {
    setModalVisible(!modalVisible);
  };

  const { selected_bday } = useUserContext();
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
        <Border label="Personal Information"></Border>
        <View className="p-8 flex gap-2">
          
          <Input label="First Name *"></Input>
          <Input label="Last Name *"></Input>
          <Input label="Sex *"></Input>
          <View className="w-full relative  flex justify-center items-center">
            <View className="w-full relative flex justify-center items-center">
              <View className="w-full">
                <Input
                  value={selected_bday}
                  dataDetectorTypes={"calendarEvent"}
                  label="Date of Birth *"
                ></Input>
              </View>
              <View className="absolute right-0 bottom-0 flex h-[50%] pr-5">
                <TouchableOpacity className="" onPress={handleCalendar}>
                  <CalendarDays color={"#3E7C1F"}></CalendarDays>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <Input label="Nationality *"></Input>
          <Input label="Weight *"></Input>
          <Input label="Height *"></Input>
          <Input
            className="h-28"
            dataDetectorTypes={"address"}
            label="Address *"
            multiline={true}
            numberOfLines={4}
          ></Input>
          <Input label="Driver License Number *"></Input>
          <Input label="Contact Number *"></Input>
        </View>

        {/* VEHIBLE INFORMATION */}
        <Border label="Vehicle Information"></Border>
        <View className="p-8 flex gap-2">
          <Input label="Registered Owner *"></Input>
          <Input label="Plate Number *"></Input>
          <Input label="Make"></Input>
          <Input label="Class"></Input>
          <Input label="Model"></Input>
          <Input label="Vehicle Color"></Input>
          <Input label="Body Markings"></Input>
        </View>

        {/* OFFICER INFORMATION */}
        <Border label="Officer Information"></Border>
        <View className="p-8 flex gap-2">
          <Input label="Apprehending Officer"></Input>
          <Input label="Time of Violation"></Input>
          <Input label="Place of Violation"></Input>
          <Button className="mt-[15px]"><Text className="text-white">Proceed</Text></Button>
        </View>
      </View>
    </ScrollView>
  );
}
