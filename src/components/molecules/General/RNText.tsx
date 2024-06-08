import { View, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
type TProps = {
    textStyle: TextStyle;
    secondTextStyle?: TextStyle;
    viewStyle?: ViewStyle;
    view2Style?: ViewStyle;
    title?: string;
    secondTitle?: string;
    onPress1?: (str?: any) => void;
    onPress2?: (str?: any) => void;
    numberOfLines?:number;
    numberOfLines2?:number;

}
const RNText = ({
    textStyle,
    viewStyle,
    // viewStyle2
    title,
    secondTitle,
    secondTextStyle,
    onPress1,
    onPress2,
    view2Style,
    numberOfLines,
    numberOfLines2


}: TProps) => {
    return (
        <>
            {title ? <View
                style={{ ...viewStyle }}
            >
                {title ? <Text
                    style={textStyle}
                    onPress={onPress1}
                    disabled={onPress1 ? false : true}
                    numberOfLines={numberOfLines}
                >{title}</Text> : null}
            </View> : null}
            {secondTitle ? <View
                      style={{ ...view2Style }}
            >
                {secondTitle ? <Text
                    style={{ ...secondTextStyle }}
                    onPress={onPress2}
                    disabled={onPress2 ? false : true}
                    numberOfLines={numberOfLines2}
                >{secondTitle}</Text> : null}
            </View> : null}
        </>
    )
}

export default RNText