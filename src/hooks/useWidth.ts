import { PixelRatio, useWindowDimensions } from 'react-native';

export const useWidth = (w: number) => {
    const { width } = useWindowDimensions();
    return PixelRatio.roundToNearestPixel((w * width) / 719);
};
