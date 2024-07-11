import { StyleSheet } from "react-native-web";

const stylesFn = () => {
    const buttonFormat ={ 
        alignSelf: 'center',
        alignItems: 'center',
        padding: 10,
    }

    const optionBtn = {
        borderRadius: 10, 
        marginTop: 10,
        width: '80%',
        ...buttonFormat,
    }

    return StyleSheet.create({
        textInput: {
            borderWidth: 1,
            borderColor: 'black',
            borderRadius: 4,
            padding: 15,
            marginTop: 10, 
            width: '90%',
            alignSelf: 'center'
        },
        button: {
            backgroundColor: 'orange',
            borderRadius: 4,
            width: '80%',
            marginTop: 40,
            marginBottom: 20,  
            ...buttonFormat, 
        },
        text: {
            marginTop: 10, 
            marginLeft: 20, 
            fontWeight: 'bold',
        },
        choiceBtn: {
            backgroundColor: 'lightgrey', 
            ...optionBtn
        }, 
        selectedChoiceBtn : {
            backgroundColor: 'tomato', 
            ...optionBtn
        }
    })
}

export default stylesFn;