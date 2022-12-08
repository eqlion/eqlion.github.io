import { useWindowDimensions } from 'react-native';

export default () => {
    const { width } = useWindowDimensions();
    return width < 769;
};
