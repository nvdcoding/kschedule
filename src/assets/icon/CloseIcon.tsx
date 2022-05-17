import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const CloseIcon = props => (
  <Svg
    width={64}
    height={64}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M32 61c16.016 0 29-12.984 29-29S48.016 3 32 3 3 15.984 3 32s12.984 29 29 29ZM40.7 23.3 23.3 40.7M23.3 23.3l17.4 17.4"
      stroke="#FB3836"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default CloseIcon;
