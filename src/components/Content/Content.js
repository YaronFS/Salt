import React, { useContext, useState } from 'react';
import { HttpMessagesContext } from '../../shared/contexts/http-messages-context';

import Filters from '../Filters/Filters';
import Table from '../Table/Table';

import './Content.css';

const Content = props => {
    const { name } = props;
    
    const httpMessagesContext = useContext(HttpMessagesContext);

    const [searchInputValue, setSearchInputValue] = useState('');
    const [piiCheckboxValue, setPiiCheckboxValue] = useState(false);
    const [myData, setMyData] = useState(httpMessagesContext[name]);
    const [filteredData, setFilteredData] = useState(myData);

    const onApplyChangesHandler = () => {

        let updatedfilteredData = {};

        if (!piiCheckboxValue && searchInputValue === '') {
            updatedfilteredData = myData;
        } else {
            if (piiCheckboxValue) {
                for (let property in myData) {
                    const filteredArr = myData[property].filter(obj => obj.pii === true);
                    updatedfilteredData[property] = filteredArr;
                }
            }

            if (searchInputValue !== '') {
                for (let property in myData) {
                    const filteredArr = myData[property].filter(obj => obj.name.includes(searchInputValue) || obj.type.includes(searchInputValue));
                    updatedfilteredData[property] = filteredArr;
                }
            }
        }

        setFilteredData(updatedfilteredData);
    }

    const resetFilters = () => {
        setPiiCheckboxValue(false);
        setSearchInputValue('');
        setFilteredData(myData);
    }

    return (
        <div className='content-section'>
            <Filters
                searchInputValue={searchInputValue}
                setSearchInputValue={setSearchInputValue}
                piiCheckboxValue={piiCheckboxValue}
                setPiiCheckboxValue={setPiiCheckboxValue}
                onApplyChangesHandler={onApplyChangesHandler}
                resetFilters={resetFilters}
            />
            <Table name={name} data={filteredData} setData={setMyData} />
        </div>
    );
}

export default Content;