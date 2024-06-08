import { StatusBar } from 'react-native'
import React from 'react'
import AppRouter from 'src/navigation'
import { appColors } from 'src/theme/colors'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import { Provider } from 'react-redux'
// import { store, useAppSelector } from 'src/redux/store'
// import Toast from 'react-native-toast-message'
// import { selectIsDarkMode } from 'src/redux/reducers/general'



// const App = () => {
//   return (
//     <>
//       <React.Fragment>
//         <Provider store={store}>
//           <Container />
//         </Provider>

//       </React.Fragment>
//     </>
//   )
// }
const Container = () => {

  return (
    <>
      <StatusBar barStyle={"dark-content"} backgroundColor={appColors.lightGray} />
      <GestureHandlerRootView style={{ flex: 1 }}>
        <AppRouter />
        {/* <Toast topOffset={70} /> */}
      </GestureHandlerRootView>
    </>
  )
}

export default Container

