import { useWindowDimensions } from 'react-native';

export const useIsPhone = () => {
    const { width } = useWindowDimensions();
    return width < 769;
};
