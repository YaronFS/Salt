import React from 'react';

import './Breadcrumbs.css';
import Breadcrumb from './Breadcrumb/Breadcrumb';

const Breadcrumbs = props => {
    const { values } = props;

    const valuesJSX = values.map((value, index) => {
        let isLast = false;
        if (index === values.length - 1) {
            isLast = true;
        }
        return <Breadcrumb key={index} value={value} isLast={isLast} />;
    });

    return (
        <div className='breadcrumbs'>
            {valuesJSX}
        </div>
    );
}

export default Breadcrumbs;