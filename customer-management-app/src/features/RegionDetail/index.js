import { useRoute } from '@react-navigation/native'
import { useNavigation } from '@react-navigation/native'
// import { useListCustomers } from '../Form/hooks'
import { Text, View, SafeAreaView, ScrollView, FlatList, Button} from 'react-native';
import { useSelector } from 'react-redux';

const RegionDetail = () => {
    // const customers = useListCustomers();

    const {params} = useRoute();
    const { region } = params;
    return (
        <View>
            <Text>Region Detail: {region} !! </Text>
            {/* {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text>{'No Customers'}</Text>
                    <Button title={'Add Customer'} onPress={() => {
                        navigate('New')
                    }} />
                </>
            )} */}
        </View>
    );
}

export default RegionDetail;