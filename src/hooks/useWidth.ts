import { PixelRatio, useWindowDimensions } from "react-native";

export default (w: number) => {
    const { width } = useWindowDimensions();
    return PixelRatio.roundToNearestPixel((w * width) / 719);
};
