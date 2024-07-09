import { ScrollView, SafeAreaView, View, StyleSheet, Text} from 'react-native'
import NewForm from '../features/Form/New/index'

const NewFormScreen = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <NewForm />
            </ScrollView>
        </SafeAreaView>
    )
}

export default NewFormScreen; 