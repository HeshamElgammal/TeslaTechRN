import { StyleSheet } from "react-native";
import { appColors } from "../theme/colors";
import { BorderRadius, fontSizes, MarginsAndPaddings } from "src/theme/Dimensions";
import { fonts } from "src/theme/fonts";

export const styles = StyleSheet.create({
    bigContainer: {
        flex: 1,
        backgroundColor: appColors.background,
    },
    headerContainer: {
        height: 50,
        borderBottomColor: appColors.primary,
        borderBottomWidth: 1,
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: MarginsAndPaddings.m,
    },
    headerText: {
        fontSize: fontSizes.l,
        color: appColors.black,
        // fontWeight: "bold",
        fontFamily: fonts.openSansBold
    },
    btnBack: {
        // padding: MarginsAndPaddings.m,
        backgroundColor: appColors.lightGray,
        borderRadius: BorderRadius.xs,
        width:40,
        height:40,
        alignItems:"center",
        justifyContent:"center"

    },
    seeAllContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"100%",
        marginVertical:MarginsAndPaddings.m,
    },
    titleOnSeeAll:{
        fontSize:fontSizes.l,
        fontFamily:fonts.openSansBold,
        color:appColors.secondary,
    },
    seeAll:{
        fontSize:fontSizes.m,
        fontFamily:fonts.openSansMedium,
        color:appColors.darkGray,
        textDecorationLine:"underline",
        textDecorationColor:appColors.darkGray,

    }
})