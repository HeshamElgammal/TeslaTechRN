import { StyleSheet } from "react-native";
import { appColors } from "./colors";
import { MarginsAndPaddings } from "./Dimensions";

export const appStyles = StyleSheet.create({
    bigContainer:{
        flex:1,
        position:"relative",
        backgroundColor:appColors.bg.light,
        // paddingHorizontal: MarginsAndPaddings.m

    }
})