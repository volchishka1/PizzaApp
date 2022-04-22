import * as React from "react"
import Svg, { Defs, LinearGradient, Stop, Rect } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: style */

const SvgMenu = (props) => (
    <Svg
        id="Icons"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
        fill ={props.color}
    >
        <Defs>
            <LinearGradient
                gradientUnits="userSpaceOnUse"
                id="linear-gradient"
                x1={12}
                x2={12}
                y1={1.979}
                y2={20.683}
            >
                <Stop offset={0} stopColor="#ffaa39" />
                <Stop offset={1} stopColor="#ff811a" />
            </LinearGradient>
        </Defs>
        <Rect className="cls-1" height={4} rx={2} width={22} x={1} y={2} />
        <Rect className="cls-1" height={4} rx={2} width={22} x={1} y={18} />
        <Rect className="cls-1" height={4} rx={2} width={22} x={1} y={10} />
    </Svg>
)

export default SvgMenu;
