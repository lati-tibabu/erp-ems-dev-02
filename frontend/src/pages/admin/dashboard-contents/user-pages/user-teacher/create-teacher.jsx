import { Heading3 } from '../../../../../components/Typography';
import ColumnWrapper from '../../../../../components/column_wrapper';

import { Outlet } from 'react-router-dom';

function CreateTeacher (){

    return (
        <ColumnWrapper style={{
                borderRadius: '30px', 
                padding: '30px',
                background: 'white',
                boxShadow: '3px 3px 5px 0px #0088ff23',
                border: 'none'
            }}>
            <Heading3 text="Create Teacher"/>
            <Outlet />
        </ColumnWrapper>   
    );
}

export default CreateTeacher
