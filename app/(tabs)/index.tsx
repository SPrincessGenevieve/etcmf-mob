import Input from "@/components/ui/Input";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";
import { useRouter } from "expo-router";

export default function LoginScreen() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  const router = useRouter();

  const handleOpen = async () => {
    setOpen(!open);
    setIsSecure(!isSecure);
  };

  const handleForgotPassword = () => {
    router.push("/forgot_password");
  };

  const handleLogin = () => {
    console.log("CLICKED")
    router.push("/(screen)/ocr/ocr_screen_6");
  };
  return (
    <ScrollView className="bg-white">
      <View className="bg-white h-full w-full">
        <View className="h-[45%] w-full  flex justify-center items-center">
          <Image
            resizeMode="contain"
            className="w-[70%] h-auto"
            source={require("@/assets/images/logo.png")}
          ></Image>
        </View>
        <View className="w-full h-full px-14 gap-4">
          <Input
            label="Username"
            value={username}
            placeholder="example@gmail.com"
            onChangeText={(e) => setUsername(e)}
          ></Input>
          <Input
            label="Password"
            secureTextEntry={isSecure}
            value={password}
            onPress={handleOpen}
            placeholder="************"
            isPassword={true}
            open={open}
            onChangeText={(e) => setPassword(e)}
          ></Input>
          <View className="flex items-end">
            <TouchableOpacity onPress={handleForgotPassword}>
              <Text className="italic">Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <Button onPress={handleLogin}>
            <Text className="text-white">Login</Text>
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}
