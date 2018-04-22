import { StyleSheet } from "react-native";
import {
  responsiveHeight,
  responsiveFontSize,
  responsiveWidth
} from "react-native-responsive-dimensions";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  // Camera Styling
  preview: {
    flex: 1
  },
  //Menu Button Styling
  header: {
    position: "absolute",
    width: "100%",
    top: 20,
    zIndex: 0
  },
  topWrapper: {
    flex: 0,
    flexDirection: "row",
    alignItems: "center",
    height: responsiveHeight(9)
  },
  touchableOpacityMenuIcon: {
    marginLeft: 30,
    height: responsiveWidth(10),
    width: responsiveWidth(10),
    borderRadius: responsiveWidth(10),
    backgroundColor: "#1DE9B6",
    justifyContent: "center",
    alignItems: "center"
  },
  menuIcon: {
    fontSize: responsiveFontSize(4),
    color: "white"
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: responsiveHeight(15)
  },
  iconWrapper: {
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1DE9B6",
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(12),
    marginLeft: 40,
    marginRight: 40
  },
  icon: {
    fontSize: responsiveFontSize(4),
    color: "#EFEFEF"
  },
  snapWrapper: {},
  snap: {
    width: responsiveWidth(17),
    height: responsiveWidth(17),
    backgroundColor: "transparent",
    borderRadius: responsiveWidth(17),
    borderWidth: 4,
    borderColor: "#EFEFEF"
  }
});
