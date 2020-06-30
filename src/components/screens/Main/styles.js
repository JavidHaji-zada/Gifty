const { StyleSheet } = require("react-native");

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#282828',
    },
    textInput: {
        width: '100%',
        height: 50,
        padding: 10,
        backgroundColor: 'white',
        borderTopWidth: 4,
        borderBottomWidth: 4,
        borderTopColor: '#A8A8A8',
        borderBottomColor: '#A8A8A8',
        fontSize: 24,
        fontFamily: 'Roboto'
    },
    ellipseContainer: {
        flexDirection: 'row',
        marginTop: 6,
    },
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
