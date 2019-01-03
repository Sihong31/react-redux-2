import React from 'react';

// implicit return
const Layout = (props) => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main>
      { props.children }
    </main>
  </>
);

export default Layout;