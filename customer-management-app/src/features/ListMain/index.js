import { SafeAreaView, ScrollView, Text, View, Button, Pressable} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import stylesFn from './styles'

const ListMain = () => {
    const styles = stylesFn();
    const navigation = useNavigation();
    const regions = ['South West', 'North West', 'South East', 'North East', 'Mid West'];

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
                    {regions.map((region) => (
                        <View key={region} style={styles.button}>
                            <Pressable 
                                onPress={() => navigation.navigate('RegionDetail', { region })}
                            >
                                <Text style={styles.region}>{region}</Text>
                            </Pressable>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default ListMain;