declare module 'react-native-textarea' {
  import { ComponentType } from 'react';
  import {
    TextInputProps,
    StyleProp,
    ViewStyle,
    TextStyle,
  } from 'react-native';

  export interface TextareaProps extends TextInputProps {
    containerStyle?: StyleProp<ViewStyle>;
    style?: StyleProp<TextStyle>;
  }

  const Textarea: ComponentType<TextareaProps>;
  export default Textarea;
}
