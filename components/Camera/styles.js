import { StyleSheet } from 'react-native';
import { responsiveHeight, responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    // Camera Styling
    preview: {
        flex: 1,
    },
    //Menu Button Styling
    header: {
        position: 'absolute',
        width: '100%',
        top: 20,
        zIndex: 0
    },
    topWrapper: {
        flex: 0,
        flexDirection: 'row',
        alignItems: 'center',
        height: responsiveHeight(9),
    },
    touchableOpacityMenuIcon: {
        marginLeft: 30,
        height: responsiveWidth(10),
        width: responsiveWidth(10),
        borderRadius: responsiveWidth(10),
        backgroundColor: '#1DE9B6',
        justifyContent: 'center',
        alignItems: 'center'
    },
    menuIcon: {
        fontSize: responsiveFontSize(4),
        color: 'white'
    },
    snapWrapper: {
        position: 'absolute',
        height: responsiveHeight(9),
        bottom: 30,
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    snap: {
        borderWidth: 4,
        borderColor: 'white',
        height: responsiveWidth(15),
        width: responsiveWidth(15),
        borderRadius: responsiveWidth(15),
        backgroundColor: 'transparent',
    },
    galleryWrapper: {
        position: 'absolute',
        height: responsiveHeight(9),
        bottom: 30,
        flex: 0,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    toGalleryTouchable: {
        marginRight: responsiveWidth(10)
    },
    toGallery: {
        color: 'white',
        fontSize: responsiveFontSize(5)
    }
});
