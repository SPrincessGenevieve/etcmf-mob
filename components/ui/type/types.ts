import { KeyboardTypeOptions } from "react-native";

export interface InputType {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  open?: boolean;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  onPress?: () => void;
}

export interface ButtonType {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
    
}
