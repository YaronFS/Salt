import React from 'react';

import './Breadcrumb.css';

const Breadcrumb = props => {
    const { value, isLast } = props;
    
    let classes = 'bold';
    let finalValue = value + ' > ';
    if(isLast) {
        classes = '';
        finalValue = value;
    }

    return <span className={`breadcrumb ${classes}`}>{finalValue}</span>;
}

export default Breadcrumb;