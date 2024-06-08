import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from 'src/components/styles'
import RNText from './RNText'
import AntDesign from "react-native-vector-icons/AntDesign"
import { appColors } from 'src/theme/colors'
import { useNavigation } from '@react-navigation/native'
const RNHeader = (
    {
        isBack,
        title
    }: {
        isBack: boolean;
        title: string;
    }
) => {
    const navigation = useNavigation()
    const _handleBack = () => {
        navigation.goBack();
    }
    return (
        <View style={styles.headerContainer}>
            {isBack ?
                <TouchableOpacity style={styles.btnBack}
                    onPress={_handleBack}
                >
                    <AntDesign
                        name="arrowleft"
                        size={25}
                        color={appColors.black}
                    />
                </TouchableOpacity>
                :
                <View style={[styles.btnBack, { backgroundColor: appColors.white }]} />
            }
            <RNText
                title={title ?? "E-commerce"}
                textStyle={styles.headerText}
            />
            <View style={[styles.btnBack, { backgroundColor: appColors.white }]} />
        </View>
    )
}

export default RNHeader