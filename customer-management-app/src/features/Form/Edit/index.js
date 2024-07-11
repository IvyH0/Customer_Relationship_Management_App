import React from 'react';
import { useRoute } from '@react-navigation/native';
import { useEditCustomer, useEditCustomerStatus} from '../hooks';

import Form from '../Form';

const EditForm = () => {
    const { params } = useRoute();
    const { customerID } = params;
    const { status, onSubmit} = useEditCustomer(customerID); 

    return (
        <Form customerID={customerID} handleSubmit={onSubmit} status={status} isEditing={true}/>
    );
}

export default EditForm; 