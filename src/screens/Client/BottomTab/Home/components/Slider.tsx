import { View, Text, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { width } from 'src/theme/Dimensions'
import IMGSLIDER1 from 'src/assets/images/slider1.jpeg'
import IMGSLIDER2 from 'src/assets/images/slider2.jpeg'
// give laptop images source for laptop please
const images = [
    IMGSLIDER1,
    IMGSLIDER2
]

const Slider = () => {
    const [selectedIndex,setSelectedIndex]=useState(0)
    return (
        <>
        <View style={{height:200}}>
        <FlatList
            data={images}
            renderItem={({ item }) => (
                <Image source={item} style={styles.sliderItem} />
            )}
            contentContainerStyle={{
                paddingHorizontal: width(2.5),
                paddingVertical: width(2.5),
            }}
            ItemSeparatorComponent={() => <View style={{ width: width(2.5) }} />}
            keyExtractor={(item, index) => index.toString()}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            scrollEventThrottle={200}
            decelerationRate={0}
            snapToAlignment="center"
            snapToInterval={width(98)}
            onScroll={(event) => {
                const slideSize = event.nativeEvent.layoutMeasurement.width
                const index = event.nativeEvent.contentOffset.x / slideSize
                setSelectedIndex(index)
            }}
        />
</View>
</>
    )
}

export default Slider