import * as React from "react"
import Svg, { Path } from "react-native-svg"

const SearchIcon = () => (
    <Svg width={24} height={24} fill={"#000"}>
        <Path fill={"#000"} d="m22 20-2 2-6-6v-2h2z" />
        <Path fill={"#000"} d="M9 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7zM9 4C6.2 4 4 6.2 4 9s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5z" />
        <Path fill={"#000"} d="m12.624 13.401.707-.707 2.475 2.475-.708.707z" />
    </Svg>
)

export default SearchIcon;