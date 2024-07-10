//to handle asynchrnous action of loading animals from storage
import { takeLatest, put, delay} from 'redux-saga/effects';
import * as actions from '../reducers'
import {get} from '../../../utilities/asyncStorage';

export function* watchLoadCustomers(){
    yield takeLatest(actions.loadCustomers, loadCustomersSaga);
};

export function* loadCustomersSaga(){
    console.log('Starting fetch request to API for loading')
    try{
        const customers = yield get('CUSTOMERS_KEY');

        yield delay(1500); //waiting time before data loads
        yield put(actions.loadCustomersResult(customers));
    } catch (error){
       yield put(actions.loadCustomersResult([]));
    };
};