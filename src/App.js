import React, { useState } from 'react';
import Toolbar from './components/Toolbar/toolbar';
import SideDrawer from './components/sideDrawer/sideDrawer';
import Backdrop from './components/backdrop/backDrop';

function App() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState (false)


  const drawerToggleClickHandler = () => {
    setSideDrawerOpen (!sideDrawerOpen)
    
  };

  const backdropCLickHandler = () => {
    setSideDrawerOpen(false)
  };

    return (
      <div style={{height: '100%'}}>
        <Toolbar drawerClickHandler={drawerToggleClickHandler} />
        {sideDrawerOpen && <SideDrawer />}
        {sideDrawerOpen && <Backdrop click={backdropCLickHandler}/>}
        <SideDrawer show={sideDrawerOpen} />
        <Backdrop />
        <main style={{marginTop: '64px'}}>
          <p> Put your stuff here</p>
        </main>
      </div>
  );
  
}

export default App;
