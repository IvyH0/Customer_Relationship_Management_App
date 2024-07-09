import { all } from 'redux-saga/effects';
import { watchCreateCustomer } from './create';

export default function* form(){
    yield all([
        watchCreateCustomer(),
    ]);
}