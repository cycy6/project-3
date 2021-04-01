import React from 'react';

import './sideDrawer.css';

const sideDrawer = props => {
    let drawerClasses = ['side-drawer'];
    if (props.show) {
        drawerClasses = ['side-drawer', 'open'];
    }
    return (
        <nav className={drawerClasses.join(' ')}>
            <ul>
                <li>
                    <a href ="/">Sign In</a>
                </li>
                <li>
                    <a href ="/">Emergency</a>
                </li>
                <li>
                    <a href ="/">About us</a>
                </li>
            </ul>
        </nav>
    );

};
export default sideDrawer;