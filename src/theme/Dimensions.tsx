

import { Dimensions } from 'react-native';
export const MarginsAndPaddings = {
  xxs: 2,
  xs: 4,
  s: 6,
  m: 8,
  l: 10,
  xl: 12,
  xxl: 15,
  ml: 25,
  mml: 30
};

export const BorderRadius = {
  xs: 5,
  s: 10,
  m: 15,
  l: 20,
  xl: 25,
};
export const fontSizes = {
  s: 10,
  xs: 12,
  xxs: 14,
  m: 16,
  xm: 18,
  xxm: 20,
  l: 22,
  xl: 24,
  xxl: 26,
  xxxl: 28,
  xxxxl: 30,
}


export const sizeActivity = {
  xs: 10,
  s: 14,
  m: 18,
  l: 24,
  xl: 28,
  xxl: 32,
}

export const width = (width: number) =>
  Dimensions.get('window').width * width * 0.01;
export const height = (height: number) =>
  Dimensions.get('window').height * height * 0.0046;
