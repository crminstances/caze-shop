import React from 'react';
import MenuBar from './components/MenuBar'

export default function App() {
  return(
    <div>
      <MenuBar siteTitle={process.env.REACT_APP_SITE_TITLE} />
    </div>
  );
}

