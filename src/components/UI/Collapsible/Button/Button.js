import React from 'react';

import './Button.css';

const Button = props => {
    const { label, color, value, path, setData } = props;

    const toggleHandler = () => {
        setData(prevState => {
            const stateClone = { ...prevState };

            /* Aquire the parent object (ie banana) of the target field (ie a) */
            const nestedObject = path
                .slice(0, -1)
                .reduce((object, part) => (object === undefined ? undefined : object[part]), stateClone)

            if (nestedObject !== undefined) {

                /* Obtain last key in path */
                const [pathTail] = path.slice(-1);

                /* Update value of last key on target object to new value */
                nestedObject[pathTail] = !value;
            }

            return {
                ...stateClone,
            };
        });
    }

    let classes = '';
    let buttonStyle = {
        border: `2px solid ${color}`
    };

    if (value === true) {
        classes += 'active';
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: color,
            color: 'white',
        };
    } else {
        buttonStyle = {
            ...buttonStyle,
            backgroundColor: 'white',
            color: color,
        };
    }

    return (
        <td className='collapsible-button-container'>
            <div className={`collapsible-button ${classes}`} style={{ ...buttonStyle }} onClick={toggleHandler}>
                {label}
            </div>
        </td>
    );
}

export default Button;