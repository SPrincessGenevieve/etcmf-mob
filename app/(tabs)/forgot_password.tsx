import Button from "@/components/ui/Button";
import Input from "@/components/ui/Input";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useRouter } from "expo-router";

export default function ForgotPassword() {
  const router = useRouter()  
  
  const handleNext = () =>{
    router.push('/')
  }

  return (
    <ScrollView
      contentContainerStyle={{
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
      }}
      className="flex h-full"
    >
      <View className="w-full h-full bg-white p-4 px-8 flex items-center justify-center">
        <Text className="font-bold text-[20px]">Enter Email</Text>
        <Text className="text-[#71727A] text-center">
          A link will be sent to your account to update your username and
          password
        </Text>
        <View className="w-full mt-5 flex gap-2">
          <Input label="Email" placeholder="example@gmail.com"></Input>
          <Text className="text-center font-semibold mt-10">Resend Email</Text>
          <Button onPress={handleNext}>
            <Text className="text-white">Send Email</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
