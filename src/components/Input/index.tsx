import { useState } from 'react';
import { TextInputProps } from 'react-native';
import { StyledTextInput } from './styles';

function Input(props: TextInputProps): JSX.Element {
  const [focused, setFocused] = useState<boolean>(false);

  return (
    <StyledTextInput
      {...props}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
    />
  );
}

export default Input;
