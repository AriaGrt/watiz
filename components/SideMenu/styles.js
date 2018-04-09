import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    //close menu icon
    closeMenuWrapper: {
        position: 'absolute',
        top: 20,
        right: responsiveWidth(10),
        width: responsiveWidth(10),
        height: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
        backgroundColor: '#1DE9B6',
        justifyContent: 'center',
        alignItems: 'center',
    },
    closeMenuIcon: {
        color: 'white',
        fontSize: responsiveFontSize(4.5),
    },
    //menu
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundColor: '#1DE9B6'
    },
    wrapper: {
        flex: 0,
        flexDirection: 'column',
        width: '100%',
        height: '100%',
    },
    menuItemWrapper: {
        flex: 0.8,
        flexDirection: 'row',
        width: '100%',
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        backgroundColor: 'white',
        alignItems: 'center',
    },
    itemTitle: {
        flex: 3,
        marginLeft: responsiveWidth(6),
        fontSize: responsiveFontSize(2.5)
    },
    itemIcon: {
        fontSize: responsiveFontSize(2.5),
        color: '#1DE9B6',
        marginRight: responsiveWidth(6),
        fontSize: responsiveFontSize(5)
    },
    uselessItem: {
        flex: 0.7,
        flexDirection: 'row', 
        width: '100%',
        backgroundColor: '#1DE9B6',
        justifyContent: 'center',
        alignContent: 'center',
    },
    cameraIcon: {
        fontSize: responsiveFontSize(5)
    }
})  