import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import AntiDesign from 'react-native-vector-icons/AntDesign'
import { styles } from '../styles'
import RNText from 'src/components/molecules/General/RNText'
const Search = () => {
    return (
        <TouchableOpacity style={styles.searchContainer}>
            <AntiDesign name='search1' size={20} />
            <RNText
                title='What are you looking for?'
                textStyle={styles.textSearch}
            />
        </TouchableOpacity>
    )
}

export default Search