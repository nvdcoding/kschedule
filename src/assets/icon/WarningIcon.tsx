import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const WarningIcon = props => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M32 61c16.016 0 29-12.984 29-29S48.016 3 32 3 3 15.984 3 32s12.984 29 29 29ZM32 43.6V32M32 20.4h.029"
      stroke="#DCA048"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default WarningIcon;
