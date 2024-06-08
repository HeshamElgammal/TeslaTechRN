import { View, Text } from 'react-native'
import React from 'react'
import RNContainer from 'src/HOC/RNContainer'
import Slider from './components/Slider'
import Header from './components/Header'
import Categories from './components/Categories'
import Products from './components/Products'
import Search from './components/Search'

const HomeClient = () => {
  return (
    <RNContainer
      fixedHeader
      // headerText='Home'
      // withScroll={false}
      showHeader={false}
    >
      <Header/>
      {/* <Slider /> */}
      <Search/>
      <Categories/>
      <Products/>
    </RNContainer>
  )
}

export default HomeClient