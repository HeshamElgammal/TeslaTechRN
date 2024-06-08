import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import RNText from 'src/components/molecules/General/RNText'
import Ionicons from "react-native-vector-icons/Ionicons"
import { appColors } from 'src/theme/colors'
import { fonts } from 'src/theme/fonts'
const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View>
                <RNText
                    title={'Welcome'}

                    textStyle={styles.textHeader}
                />
                {/* <RNText title='today?'
                    textStyle={{ ...styles.textHeader, fontFamily: fonts.openSansBold }}
                /> */}
            </View>
            <View style={styles.iconNotiContainer}>
                <Ionicons name='notifications' size={25} color={appColors.primaryBlue} />
            </View>
        </View>
    )
}

export default Header