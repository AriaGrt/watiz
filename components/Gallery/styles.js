import { StyleSheet, Dimensions } from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

const { width } = Dimensions.get('window')

export const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      padding: 20
    },
    scrollContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    image: {
      width: width / 4, 
      height: width / 4,
    }
  })