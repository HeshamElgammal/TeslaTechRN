import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { width } from 'src/theme/Dimensions'
import RNText from 'src/components/molecules/General/RNText'
import RNSeeAll from 'src/components/molecules/General/RNSeeAll'
const list = [
    {
        _id: 1,
        name: "Laptop",
        // give me another laptop image
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        _id: 2,
        name: "Play-station",
        image: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
    },

]
const Products = () => {

    return (
        <>
            <RNSeeAll text='Popular products' viewStyles={{
                width: "95%",
                alignSelf: "center",
                //  marginTop: 20
            }} />
            <FlatList
                data={list}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.ProductItem}>
                        <Image source={{ uri: item?.image }} style={styles.imgProduct} />
                        <RNText title={item?.name} textStyle={styles.textProduct} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={{
                    paddingHorizontal: width(2.5),
                    paddingVertical: width(2.5),
                }}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                keyExtractor={(item, index) => index.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}

            />
        </>
    )
}

export default Products