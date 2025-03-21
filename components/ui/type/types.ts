import { DataDetectorTypes, KeyboardTypeOptions, TextInputProps } from "react-native";

export interface InputType {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  open?: boolean;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  editable?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  keyboardType?: KeyboardTypeOptions;
  multiline?: boolean;
  numberOfLines?: number;
  onPress?: () => void;
  className?: string;
  classNameText?: string;
  dataDetectorTypes?: DataDetectorTypes | DataDetectorTypes[] | undefined;

}

export interface ButtonType {
  children?: React.ReactNode;
  className?: string;
  onPress?: () => void;
    
}

