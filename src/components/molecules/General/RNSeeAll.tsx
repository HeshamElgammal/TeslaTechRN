import { View, Text, ViewStyle, TextStyle } from 'react-native'
import React from 'react'
import { styles } from 'src/components/styles'
import RNText from './RNText';

const RNSeeAll = ({
    viewStyles,
    text='',
}: {
    viewStyles?: ViewStyle;
    text: string;
}) => {
    return (
        <View style={[styles.seeAllContainer,{...viewStyles}]}>
            <RNText title={text} textStyle={styles.titleOnSeeAll}/>
            <RNText title={'See all'} textStyle={styles.seeAll}/>
        </View>
    )
}

export default RNSeeAll