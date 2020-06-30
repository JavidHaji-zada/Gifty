const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    sendBtnContainer: {
        position: 'absolute',
        bottom: 32,
        left: 16,
        right: 16
    },
    sendBtn: {
        flex: 1,
        paddingVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#27AE60',
        borderRadius: 10,
    },
    sendBtnTxt: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Roboto'
    }
})
