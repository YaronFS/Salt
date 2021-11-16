import React from 'react';
import { FiSearch } from 'react-icons/fi';

import './Filters.css';

const Filters = props => {
    const {searchInputValue, setSearchInputValue, piiCheckboxValue, setPiiCheckboxValue, onApplyChangesHandler, resetFilters} = props;

    const onSearchInputChange = event => {
        event.preventDefault();
        const newValue = event.target.value;
        setSearchInputValue(newValue);
    }

    const onPiiCheckboxChange = event => {
        setPiiCheckboxValue(prevState => {
            return !prevState;
        });
    }

    return (
        <div className='filters-container'>
            <div className='filters-first-row'>
                <div className='search-container'>
                    <div className='search-icon-container'>
                        <FiSearch className='search-icon' />
                    </div>

                    <div>
                        <input type='text' className='search-input' placeholder='Search' value={searchInputValue} onChange={onSearchInputChange} />
                    </div>
                </div>


                <div className='checkbox-container'>
                    <input id='pii' type='checkbox' className='pii-checkbox' checked={piiCheckboxValue} onChange={onPiiCheckboxChange} />
                    <label htmlFor='pii'>Show PII Only</label>
                </div>

                <div className='button-container'>
                    <button type='button' onClick={onApplyChangesHandler}>Apply</button>
                </div>

            </div>
            <div className='filters-second-row'>
                <label onClick={resetFilters}>Reset Filter</label>
            </div>
        </div>
    );
}

export default Filters;