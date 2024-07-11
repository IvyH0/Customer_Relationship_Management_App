import React from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, Pressable } from 'react-native';
import stylesFn from './styles';

const CustomerDetails = () => {
    const {params} = useRoute();
    const { selectedCustomer } = params;
    const navigation = useNavigation();
    const styles = stylesFn();

    return (
        <View>
            <View style={styles.container}>
                <View style={styles.detail}>
                    <Text style={styles.header}>First Name: </Text>
                    <Text style={styles.value}> {selectedCustomer.first_name}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Last Name: </Text>
                    <Text style={styles.value}> {selectedCustomer.last_name}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Customer ID: </Text>
                    <Text style={styles.value}> {selectedCustomer.id}</Text>
                </View>
                <View style={styles.detail}>
                    <Text style={styles.header}>Active/In-Active </Text>
                    <Text style={styles.value}> {selectedCustomer.active}</Text>
                </View>
            </View>
            <View style={styles.button}>
                <Pressable onPress={() => navigation.navigate('Delete')}>
                    <Text style={styles.btnNew}>Delete Customer</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate('Edit Customer', { editCustomer: selectedCustomer })}>
                    <Text style={styles.btnNew}>Edit Customer</Text>
                </Pressable>
            </View>
        </View>
    );
}

export default CustomerDetails;