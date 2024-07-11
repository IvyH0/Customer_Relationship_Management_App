import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { useListCustomers } from '../Form/hooks';
import Row from './row';
import React, { useEffect } from 'react';
import { Text, View, FlatList, Pressable} from 'react-native';
import stylesFn from './styles';

const RegionDetail = () => {
    const {params} = useRoute();
    const { region } = params;
    const customers = useListCustomers(region); //custom hook
    const navigation = useNavigation();
    const styles = stylesFn();

    useEffect(() => {
        navigation.setOptions({ title: region });
    }, [region, navigation]);
    
    return (
        <View>
            {(customers && customers.length > 0) ? (
                <FlatList
                    data={customers || []}
                    renderItem={(props) => <Row {...props} />}
                    keyExtractor={(item) => item.id}
                />
            ) : (
                <>
                    <Text style={styles.emptyText}>{'No Customers'}</Text>
                    <View style={styles.button}>
                        <Pressable onPress={() => navigation.navigate('New')}>
                            <Text style={styles.btnNew}>Add Customer</Text>
                        </Pressable>
                    </View>
                </>
            )}
        </View>
    );
}

export default RegionDetail;

