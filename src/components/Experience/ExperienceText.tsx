import React, { FC } from 'react';
import { View } from 'react-native';

import Sixhands from './Sixhands';
import SberMarket from './SberMarket';
import Tabby from './Tabby';

const ExperienceText: FC = () => {
    return (
        <View>
            <Tabby />
            <SberMarket />
            <Sixhands />
        </View>
    );
};

export default ExperienceText;
