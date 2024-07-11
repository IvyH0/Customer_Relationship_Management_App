//this hook talks and triggers the reducer
//custom hooks
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo }  from 'react';
import * as actions from './reducers';

export const useUpdateFields = () => {
    const dispatch = useDispatch() //access to redux store dispatch. used to send actions to the store
    const fields = useSelector(state => state.form.form.fields) //extracts data from the redux store state. Accessing the form slice of the state.
    //form is the name of the action

    return {
        fields,
        setFormField: (field, value) => {
            console.log(`Updating field ${field} to ${value}`)
            return dispatch(actions.setFormField({field, value})) // Dispatch the action correctly
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

export const useListCustomers = (region) => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(actions.loadCustomers())
    }, [region]);
    const customers = useSelector(state => state.form.list.customers || []);

     // Memoize the filtered customers list
     const filteredCustomers = useMemo(() => {
        return customers.filter(customer => customer.region === region);
    }, [customers, region]);

    return filteredCustomers;
}; 

export const useEditCustomerStatus = () => {
    return useSelector(state => state.form.edit.status)
};
  
export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch();
    const status = useEditCustomerStatus();

    return {
        onSubmit: () => {
            console.log('Dispatching EDIT_CUSTOMER action')
            dispatch(actions.editCustomer(customerID))
        },
    };
};
