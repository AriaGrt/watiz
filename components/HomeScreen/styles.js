import {StyleSheet} from 'react-native'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    textsContainer: {
        marginBottom: 10
    },
    text1:{
        fontSize: responsiveFontSize(2.5)
    },
    text2:{
        textAlign:'center'
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10
    },
    buttonsWrapper: {
        flex: 1,
        margin: '5%'
    }
});