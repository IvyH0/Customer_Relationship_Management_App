import { StyleSheet } from "react-native-web";

const stylesFn = () => {
    return StyleSheet.create({
        container: {
            backgroundColor: 'white',
            borderWidth: 2, 
            borderColor: 'darkgrey',
            margin: 10, 
            padding: 10, 
            borderRadius: 10,
        },
        detail: {
            flexDirection: 'row',
            margin: 5,
        },
        header: {
            fontWeight: 'bold',
            fontSize: 15,
        },
        text: {
            paddingLeft: 5, 
            textTransform: 'capitalize',
        },
        button: {
            padding: 10, 
            margin: 10, 
            justifyContent: 'space-around',
            alignItems: 'center',
            textTransform: 'uppercase',
            flexDirection: 'row',
        },
        btnNew: {
            color: 'white',
            backgroundColor: 'tomato',
            padding: 10,
            borderRadius: 5,
            fontWeight: 'bold'
        },
    });
}

export default stylesFn;