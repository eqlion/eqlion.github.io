import { useWindowDimensions } from 'react-native';

export const useIsPhone = () => {
    const { width } = useWindowDimensions();
    if (!width) {
        return false;
    }
    return width < 769;
};
