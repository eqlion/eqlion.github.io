import { PixelRatio, useWindowDimensions } from 'react-native';
import useIsPhone from './useIsPhone';

export default (w: number) => {
    const { width, height } = useWindowDimensions();
    const isPhone = useIsPhone();
    return PixelRatio.roundToNearestPixel(
        (w * (isPhone ? width : height)) / (isPhone ? 414 : 769),
    );
};
