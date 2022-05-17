import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SuccessIcon = props => (
  <Svg
    width={60}
    height={60}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M57 27.531v2.484A27 27 0 1 1 40.989 5.337"
      stroke="#48B16E"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M57 8.416 30 35.443l-8.1-8.1"
      stroke="#48B16E"
      strokeWidth={5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default SuccessIcon;
