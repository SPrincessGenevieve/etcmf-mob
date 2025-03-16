export interface InputType {
  label?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  open?: boolean;
  isPassword?: boolean;
  secureTextEntry?: boolean;
  placeholder?: string;
  placeholderTextColor?: string;
  onPress?: () => void;
}

export interface ButtonType {
  children?: React.ReactNode;
  onPress?: () => void;
    
}
