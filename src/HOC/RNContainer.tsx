import React from 'react'
import { appStyles } from 'src/theme/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ViewStyle } from 'react-native';
import RNHeader from 'src/components/molecules/General/RNHeader';

const RNContainer = ({
  children,
  withScroll,
  contentContainerStyles,
  fixedHeader,
  showHeader,
  headerText,
  isBack = true,
}: {
  children?: React.ReactNode;
  withScroll?: boolean;
  contentContainerStyles?: ViewStyle;
  fixedHeader: boolean;
  showHeader: boolean;
  headerText?: string;
  isBack?: boolean;
}) => {
  return (
    <SafeAreaView
      style={[appStyles.bigContainer]}
      edges={["top", "left", "right"]}
    >
      {fixedHeader && showHeader && <RNHeader title={headerText ?? ""} isBack={isBack ?? false} />}
      {
        withScroll ?
          <>
            <KeyboardAwareScrollView
              enableOnAndroid={true}
              keyboardShouldPersistTaps={"handled"}
              enableResetScrollToCoords={false}
              resetScrollToCoords={{ x: 0, y: 0 }}
              contentContainerStyle={{
                ...contentContainerStyles
              }}
            >
              {!fixedHeader && showHeader && <RNHeader title={headerText ?? ''} isBack={isBack ?? false} />}
              {children}
            </KeyboardAwareScrollView>
          </>
          :
          children
      }
    </SafeAreaView>
  )
}

export default RNContainer