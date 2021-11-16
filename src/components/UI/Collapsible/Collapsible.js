import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowDownCircleFill } from 'react-icons/bs';

import './Collapsible.css';
import ToggleButton from './Button/Button';

const Collapsible = props => {
    const { label, data, path, setData, rootName, numOfCells } = props;
    const [showContent, setShowContent] = useState(false);

    const toggleCollapsibleHandler = () => {
        setShowContent(prevState => {
            return !prevState;
        });
    }


    const contentJSX = [];
    if (showContent) {
        for (let i in data) {
            const cellsJSX = [];
            for (let property in data[i]) {
                const value = data[i][property];
                let cellJSX = null;
                const key = `${rootName}-${i}-${property}-${label}`;
                switch (property) {
                    case 'pii':
                        cellJSX = <ToggleButton key={key} label={property.toUpperCase()} color='#12296d' value={value} path={[...path, i, property]} setData={setData} />;
                        break;
                    case 'masked':
                        cellJSX = <ToggleButton key={key} label={property.toUpperCase()} color='#7b1fa2' value={value} path={[...path, i, property]} setData={setData} />;
                        break;
                    case 'type':
                        cellJSX = (
                            <td key={key}>
                                <div style={{ color: '#5ba9c1', backgroundColor: '#cee5ec', textAlign: 'center' }}>
                                    {data[i][property].toUpperCase()}
                                </div>
                            </td>);
                        break;
                    case 'name':
                    default:
                        cellJSX = (
                            <td key={key}>
                                <div style={{ paddingLeft: '30px', color: '#2d3762' }}>
                                    {data[i][property]}
                                </div>
                            </td>);

                }
                cellsJSX.push(cellJSX);
            }
            contentJSX.push((
                <tbody key={`${i}-${label}`} className='collapsible-content'>
                    <tr>
                        {cellsJSX}
                    </tr>
                </tbody>
            ));
        }
    }



    return (
        <React.Fragment>
            <tbody className='collapsible-title-container' onClick={toggleCollapsibleHandler}>
                <tr>
                    <td colSpan={numOfCells}>
                        <div>
                            {showContent ? <BsFillArrowDownCircleFill color='#9c5ab7' /> : <BsFillArrowRightCircleFill color='#9c5ab7' />}
                            <label>{label}</label>
                        </div>
                    </td>
                </tr>
            </tbody>

            {contentJSX}
        </React.Fragment>

    );
}

export default Collapsible;