import { SafeAreaView, ScrollView, Text, View, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import stylesFn from './styles'

const ListMain = () => {
    const styles = stylesFn();
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.button}>
                    <Pressable onPress={() => navigation.navigate('New')}>
                        <Text style={styles.btnNew}>Create a New Customer</Text>
                    </Pressable>
                </View>
                <View style={styles.container}>
                    <Text style={styles.title}>List of Regions</Text>
                    <Text>Select a Region:</Text>
                    <View style={styles.button}>
                        <Pressable>
                            <Text style={styles.region}>South West</Text>
                        </Pressable>
                    </View>
                    <View style={styles.button}>
                        <Pressable>
                            <Text style={styles.region}>North West</Text>
                        </Pressable>
                    </View>
                    <View style={styles.button}>
                        <Pressable>
                            <Text style={styles.region}>South East</Text>
                        </Pressable>
                    </View>
                    <View style={styles.button}>
                        <Pressable>
                            <Text style={styles.region}>North East</Text>
                        </Pressable>
                    </View>
                    <View style={styles.button}>
                        <Pressable>
                            <Text style={styles.region}>Mid West</Text>
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ListMain;