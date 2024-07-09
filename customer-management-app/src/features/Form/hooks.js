//this hook talks and triggers the reducer
//custom hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect }  from 'react';
import * as actions from './reducers';

export const useUpdateFields = () => {
    const dispatch = useDispatch() //access to redux store dispatch. used to send actions to the store
    const fields = useSelector(state => state.form.form.fields) //extracts data from the redux store state. Accessing the form slice of the state.
    //form is the name of the action


    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)
            return dispatch(actions.setFormField({field, value})); // Dispatch the action correctly
        }
    }
};

export const useCreateCustomer = () => {
    const dispatch = useDispatch();
    return {
        onSubmit: () => {
            console.log('Dispatching CREATE_CUSTOMER action')
            dispatch(actions.createCustomer())
        }
    }
};

export const useListCustomers = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadCustomers())
    }, [dispatch]);
    return useSelector(state => state.form.list.customers);
}; 

