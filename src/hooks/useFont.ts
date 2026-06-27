import { PixelRatio, useWindowDimensions } from 'react-native';
import { useIsPhone } from './useIsPhone';

export const useFont = (w: number) => {
    const { width, height } = useWindowDimensions();
    const isPhone = useIsPhone();
    const dimension = isPhone ? width : height;
    // During static rendering there is no window (dimension === 0). Fall back to
    // the design base size so the prerendered HTML isn't sized to 0px before
    // hydration scales it to the real viewport.
    if (!dimension) {
        return w;
    }
    return PixelRatio.roundToNearestPixel((w * dimension) / (isPhone ? 414 : 769));
};
