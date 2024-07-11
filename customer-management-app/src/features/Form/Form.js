//base skeleton of the form 
import { Text, View, Pressable, TextInput } from 'react-native';
import { useNavigation} from '@react-navigation/native'
import { useUpdateFields , useCreateCustomer } from './hooks';
import React, { useState, useEffect } from 'react'; 
import { PENDING, INPROGRESS, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers'
import stylesFn from './styles'

const Form = ({handleSubmit, status, selectedCustomer}) => {
    //selectedCustomer is an object that contains the customer details
    const styles = stylesFn();
    const {navigate} = useNavigation();
    const { fields, setFormField} = useUpdateFields(selectedCustomer)
    const [selectedRegion, setSelectedRegion] = useState(); 
    const [selectedActive, setSelectedActive] = useState();

    const {
        first_name, 
        last_name,
    } = fields; 

    const handleSelectRegion = (region) => {
        setFormField('region', region)
        setSelectedRegion(region)
        console.log('Region selected:', region)
    };

    const handleSelectActive = (active) => {
        setFormField('active', active)
        setSelectedActive(active)
        console.log('Active selected:', active)
    };

    // Function to dynamically change the button style based on selection
    const regionSelect = (region) => {
        return region === selectedRegion ? styles.selectedChoiceBtn : styles.choiceBtn;
    };

    const activeSelect = (active) => {
        return active === selectedActive ? styles.selectedChoiceBtn : styles.choiceBtn;
    };
    
    const onSubmit = () => {
        handleSubmit();
        setSelectedRegion('');
        setSelectedActive('');
        navigate('Home');
    };

    return (
        <View>
            <TextInput 
                key={'first_name'}
                placeholder={first_name || 'First Name'}
                value={first_name || ''}
                style={styles.textInput}
                onChangeText={v => setFormField('first_name', v)}
            />
            <TextInput
                key={'last_name'}
                placeholder={last_name || 'Last Name'}
                value={last_name || ''}
                style={styles.textInput}
                onChangeText={v => setFormField('last_name', v)}
            />
            <View>
                <Text style={styles.text}>Active/In-active</Text>
                {['active', 'in-active'].map((active) => {
                    return (
                        <Pressable
                            key={active}
                            style={activeSelect(active)}
                            onPress={() => handleSelectActive(active)}
                        >
                            <Text>{active}</Text>
                        </Pressable>
                    );
                })}
            </View>

            <View>
                <Text style={styles.text}>Region:</Text>
                <View>
                    {['South West', 'North West', 'South East', 'North East', 'Mid West'].map((region) => (
                        <Pressable
                            key={region}
                            style={regionSelect(region)}
                            onPress={() => handleSelectRegion(region)}
                        >
                            <Text>{region}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>

            <Pressable 
                onPress={onSubmit} 
                style={styles.button}
                disabled={status !== PENDING && status !== INPROGRESS}
            >
                <Text>Submit</Text>
            </Pressable>

        </View> 
    );
};

export default Form;