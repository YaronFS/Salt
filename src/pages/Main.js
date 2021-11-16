import React from 'react';
import { Tab } from 'semantic-ui-react';

import './Main.css';

import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
// import { HttpMessagesContext } from '../shared/contexts/http-messages-context';

const Main = () => {
    // const httpMessagesContext = useContext(HttpMessagesContext);

    const panes = [
        {
            menuItem: 'Request',
            render: () => <Tab.Pane attached={false}><Content key='request' name='request' /></Tab.Pane>
        },
        {
            menuItem: 'Response',
             render: () => <Tab.Pane attached={false}><Content key='response' name='response' /></Tab.Pane>
        },
    ];

    return (
        <div className='main-section'>
            <Header />
            <div className='tabs-section'>
                <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
            </div>

        </div>
    );
}

export default Main;