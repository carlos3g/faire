import { FC, useState } from 'react';
import { TextInputProps } from 'react-native';

import { StyledTextInput } from './styles';

const Input: FC<TextInputProps> = (props) => {
  const [focused, setFocused] = useState(false);

  return (
    <StyledTextInput
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      focused={focused}
      {...props}
    />
  );
};

export default Input;
