import { Svg, Path, LinearGradient, Stop } from 'react-native-svg';

function MySvgImage() {
  return (
    <Svg width="100%" height="285" viewBox="0 0 360 285">
      <Path
        d="M213.202 4.51982C266.224 -3.16388 332.63 12.2412 359.205 20.9042V51.978L-1.00003 51.978V0C48.9484 23.7291 146.924 14.1245 213.202 4.51982Z"
        fill="url(#paint0_linear_84_519)"
      />
      <Path
        d="M188.781 15.3187C280.871 -10.4047 338.107 6.58862 360.49 18.6897L360.49 285H-0.67334L-0.67334 18.6897C30.5027 29.4078 96.6919 41.0421 188.781 15.3187Z"
        fill="url(#paint1_linear_84_519)"
      />
      <LinearGradient
        id="paint0_linear_84_519"
        x1="179.583"
        y1="9.03965"
        x2="1.42201"
        y2="-16.7391"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8951FF" />
        <Stop offset="1" stopColor="#4EADE3" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_84_519"
        x1="355.214"
        y1="281.37"
        x2="216.898"
        y2="-68.1246"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset="1" stopColor="#E0E0E0" />
      </LinearGradient>
    </Svg>
  );
}

export default MySvgImage;
