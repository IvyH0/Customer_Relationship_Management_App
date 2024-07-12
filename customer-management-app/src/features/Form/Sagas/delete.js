import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as actions from '../reducers';
import {remove, set} from '../../../utilities/asyncStorage';

export function* watchDeleteCustomer() {
    yield takeLatest(actions.deleteCustomer.toString(), deleteCustomerSaga);
};

export function* deleteCustomerSaga(action) {
    console.log('Starting fetch request to API -- DELETE');
    const selectedCustomer= action.payload;
    console.log('ID:', selectedCustomer)
    try {
        // CUSTOMERS_KEY is the key for the storage
        // contains the list of customer objects
        const customers = yield select(state => state.form.list.customers);
        const customerExists = customers.some(customer => customer.id === selectedCustomer);

        if (!customerExists) {
            throw new Error(`Customer with ID ${selectedCustomer} not found.`);
        }

        // yield delay(500);
        // Assuming remove function requires the ID of the customer to delete
        yield remove('CUSTOMERS_KEY', selectedCustomer);

        // Dispatch deleteCustomerResult with the ID of the deleted customer
        yield put(actions.deleteCustomerResult(selectedCustomer));
    } catch (error) {
        yield put(actions.deleteCustomerError(error.toString()));
    };
};