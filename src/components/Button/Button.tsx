import { Btn, ButtonText } from './styles';

interface ButtonProps {
  text: string;
  onPress: () => void;
  children?: React.ReactNode;
}

function Button({ text, onPress, children }: ButtonProps) {
  return (
    <Btn onPress={onPress}>
      {children}
      <ButtonText>{text}</ButtonText>
    </Btn>
  );
}

export default Button;
