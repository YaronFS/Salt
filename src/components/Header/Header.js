import React, { useContext } from 'react';

import './Header.css';

import { HttpMessagesContext } from '../../shared/contexts/http-messages-context';
import Breadcrumbs from '../UI/Breadcrumbs/Breadcrumbs';

const Header = () => {
    const httpMessagesContext = useContext(HttpMessagesContext);
    const { method, path, api } = httpMessagesContext;

    return (
        <div className='header-section'>
            <div>
                <span className='method-name'>{method.toUpperCase()}</span> <span className='path'>{path}</span>
            </div>
            <div>
                <Breadcrumbs values={['All APIs', api, path]} />
            </div>
        </div>
    );
}

export default Header;