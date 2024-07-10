import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
import { useListCustomers } from '../Form/hooks'
import Row from './row'
import { Text, View, SafeAreaView, ScrollView, FlatList, Button} from 'react-native';

const RegionDetail = () => {
    const customers = useListCustomers(); //custom hook
    const navigation = useNavigation();
    const {params} = useRoute();
    const { region } = params;

    const renderItem = ({ item }) => (
        <View>
            <Text>{item.first_name} {item.last_name}</Text>
        </View>
    );

    return (
        <View>
            <Text>Region Detail: {region} !! </Text>
            <FlatList
                data={customers || []}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
           
        </View>
    );
}

export default RegionDetail;

// {(customers && customers.length > 0) ? (
//     <FlatList
//         data={customers || []}
//         renderItem={(props) => <Row {...props} />}
//         keyExtractor={(item) => item.id}
//     />
// ) : (
//     <>
//         <Text>{'No Customers'}</Text>
//         <Button title={'Add Customer'} onPress={() => {
//             navigation.navigate('New')
//         }} />
//     </>
// )}