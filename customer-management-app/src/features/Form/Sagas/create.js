import { takeLatest, put } from 'redux-saga/effects';
import * as actions from '../reducers'

//saga function generator 
//this function listens to when the createCustomer action is dispatched
export function* watchCreateCustomer() {
    yield takeLatest(actions.createCustomer.toString(), createCustomerSaga);

}

//when action is dispatched, this callback function is called
//this the fetch request to the api
export function* createCustomerSaga() {
    console.log('starting fetch request to api');
    //test to see if this works 

    try {
        const fields = yield select(state => state.form.form.fields); 
        const customers = yield select(state => state.form.list.customers);

        //mock request to API
        //customer object containing customer details and saved to a database
        const customer = {
            id: customers.length + 1,
            ...fields,
        }

        //pretend call to API 
        yield delay(500)

        const result = [customer, ...customers] //add new customer to list of customers
        yield put(actions.createCustomerResult(result)); //dispatches an action to update state with new customer
    } catch (error){
        yield put(actions.createCustomerError(error.toString()));
    }


};
