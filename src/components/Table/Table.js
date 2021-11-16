import React from 'react';

import './Table.css';
import Collapsible from '../UI/Collapsible/Collapsible';

const Table = props => {
    const { name, data, setData } = props;

    const collapsiblesJSX = [];
    for (let property in data) {
        const value = data[property];
        let finalLabel = '';
        switch (property) {
            case 'urlParams':
                finalLabel = 'URL Parameters';
                break;
            case 'queryParams':
                finalLabel = 'Query Parameters';
                break;
            case 'headers':
                finalLabel = 'Headers';
                break;
            case 'body':
                finalLabel = 'Body';
                break;
            default:
        }

        collapsiblesJSX.push(<Collapsible key={`${name}-${property}`} label={finalLabel} data={value} path={[property]} setData={setData} rootName={name} numOfCells={4} />);
    }

    return (
        <table className='content-table'>
            <thead>
                <tr>
                    <th>NAME</th>
                    <th>PII</th>
                    <th>MASKING</th>
                    <th>TYPE</th>
                </tr>
            </thead>

            <tbody className='tbody-space'>
            </tbody>

            {collapsiblesJSX}
        </table>
    );
}

export default Table;