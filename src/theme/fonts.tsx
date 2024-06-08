import { Platform } from "react-native";

export const fonts = {
    openSansBold: Platform.OS == "ios" ? "Open Sans Condensed Bold" : "OpenSans_Condensed-Bold",
    openSansSemibold: Platform.OS == "ios" ?"Open Sans Condensed SemiBold": "OpenSans_Condensed-SemiBold",
    openSansLight: Platform.OS == "ios" ?"Open Sans Condensed Light": "OpenSans_Condensed-Light",
    openSansMedium:Platform.OS == "ios" ? "Open Sans Condensed Medium": "OpenSans_Condensed-Medium",
    openSansRegular:Platform.OS == "ios" ? "Open Sans Condensed Regular": "OpenSans_Condensed-Regular",
}