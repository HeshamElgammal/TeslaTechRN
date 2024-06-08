import { StyleSheet } from "react-native";
import { appColors } from "src/theme/colors";
import { BorderRadius, fontSizes, MarginsAndPaddings, width } from "src/theme/Dimensions";
import { fonts } from "src/theme/fonts";

export const styles = StyleSheet.create({
    sliderItem: {
        width: width(95),
        height: 180,
        backgroundColor: 'red',
        borderRadius: 10
    },
    headerContainer: {
        // height: 50,
        width: "100%",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexDirection: "row",
        paddingHorizontal: MarginsAndPaddings.m,
    },
    textHeader: {
        fontSize: fontSizes.xxl,
        color: appColors.text.dark,
        fontFamily: fonts.openSansBold,
    },
    iconNotiContainer: {
        width: 40,
        height: 40,
        backgroundColor: appColors.bg.light3,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    CategoryItem: {
        alignItems: "center",
        rowGap: 5,
        // height: 130,
        padding:5,
        backgroundColor: appColors.bg.light,
        borderWidth:1,
        borderColor:appColors.border.light,
        borderRadius: BorderRadius.s,
        flexDirection:"row",
        columnGap:10
    },
    imgCategory: {
        width: 50,
        height: 50,
        borderRadius: BorderRadius.s,
        borderWidth: .7,
        borderColor: appColors.border.dark
    },
    textCategory: {
        fontSize: fontSizes.m,
        fontFamily: fonts.openSansSemibold,
        color: appColors.text.dark,
        textAlign: "center"
    },
    ProductItem:{
        // alignItems: "center",
        rowGap: 5,
        height: 210,
        // padding:15,
        backgroundColor:appColors.bg.light2,
        borderRadius:BorderRadius.s,
        
    },
    imgProduct: {
        width: 170,
        height: 120,
        borderRadius: BorderRadius.s,
        borderWidth: .7,
        borderColor: appColors.border.dark
    },
    textProduct: {
        fontSize: fontSizes.m,
        fontFamily: fonts.openSansSemibold,
        color: appColors.text.dark,
        textAlign: "left",

    },
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:appColors.background,
        paddingHorizontal:width(2.5),
        paddingVertical:width(2.5),
        borderRadius:BorderRadius.s,
        borderWidth:1,
        borderColor:appColors.border.light,
        width:"96%",
        alignSelf:"center",
        marginTop:20
    },
    textSearch:{
        fontSize: fontSizes.m,
        fontFamily: fonts.openSansSemibold,
        color: appColors.text.dark,
        textAlign: "left",
        paddingHorizontal:10
    }
})