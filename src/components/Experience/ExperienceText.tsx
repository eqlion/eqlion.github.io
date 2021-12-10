import React, { FC } from "react";
import { View } from "react-native";
import Sixhands from "./Sixhands";
import SberMarket from "./SberMarket";

const ExperienceText: FC = () => {
    return (
        <View>
            <SberMarket />
            <Sixhands />
        </View>
    );
};

export default ExperienceText;
