import React from 'react';

import DrawerToggleButton from '../sideDrawer/drawerToggleButton.js';
import './toolbar.css';

const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div className="toolbar_toggle-button">
                <DrawerToggleButton click={props.DrawerClickHandler} />
            </div>
            <div className="toolbar_logo"><a href="/">The Logo</a></div>
            <div className="spacer" />
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">Sign In</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Emergency</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default toolbar;