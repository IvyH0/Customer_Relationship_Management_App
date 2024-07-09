import { createSlice } from '@reduxjs/toolkit';
import { PENDING, REQUESTING, SUCCESS, ERROR } from '../../utilities/helpers';

const name = 'form'

const initialState = {
    form: {
        fields: {
            first_name: null,
            last_name: null,
        },
    },
    list:{
        customers: [],
        status: PENDING,
    },
    create:{
        status: PENDING,
    }
    
}
const reducers = {
    createCustomer: (state) => {
        state.create.status = REQUESTING;
    },

    createCustomerResult: (state, { payload }) => {
        state.list.customers = payload; // Update customer list
        state.form.fields = initialState.form.fields; // Reset form fields 
        state.create.status = SUCCESS; // Update status on success
    },

    createCustomerError: (state, { payload }) => {
        state.list.error = payload; // Handle error
        state.list.status = ERROR; // Update status on error
    },
    setFormField: (state, {payload}) => {
        const current = state.form.fields;
        const {field, value} = payload;

        const fields = {
            ...current,
            [field]: value
        };

        state.form.fields = fields;
    }
}

const slice = createSlice({
    name, 
    initialState,
    reducers,
})

export const {
    createCustomer,
    createCustomerError,
    setFormField,
} = slice.actions

export default slice.reducer