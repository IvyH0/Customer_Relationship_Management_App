import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import { useDeleteCustomer } from '../Form/hooks';
import stylesFn from './styles';

const DeleteCustomer = () => {
    const {params} = useRoute();
    const { deleteCustomer } = params; //id of the customer thats being deleted
    const navigation = useNavigation();
    const { onSubmit } = useDeleteCustomer();
    const styles = stylesFn();

    // Modified onPress to pass deleteCustomer ID to onSubmit
    const handlePress = () => {
        onSubmit(deleteCustomer);
        navigation.navigate('Home');
    };

    return(
        <View>
            <Text style={styles.delTitle}>Are you sure you want to delete this customer?</Text>
            <View style={styles.button}>
                <Pressable onPress={handlePress}>
                    <Text style={styles.btn}>Confirm</Text>
                </Pressable>
            </View>
        </View>
    )
}

export default DeleteCustomer;