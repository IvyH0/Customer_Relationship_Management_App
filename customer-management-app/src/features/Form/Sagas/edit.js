import { takeLatest, put, delay, select } from 'redux-saga/effects';
import * as actions from '../reducers'

export function* watchEditCustomer() {
    yield takeLatest(actions.editCustomer.toString(), editCustomerSaga);
};

export function* editCustomerSaga(action) {
    console.log('Starting fetch request to API -- EDIT');
    const customerID = action.payload;

    try{
        const fields = yield select(state => state.form.form.fields);
        const customers = yield select(state => state.form.list.customers);

        const result = customers.map(customer => {
            // if customer is not the one being updated, return it unchanged
            if(customer.id !== customerID) return customer;

            // otherwise, if customer is the one being updated
            // return the new fields instead of the old ones
            return fields;
        });

        yield delay(500);

        yield put(actions.editCustomerResult(result));
    } catch (error) {
        yield put(actions.editCustomerError(error.toString()));
    }
}
