import React from 'react';

import NavigationHeader from './Components/NavigationHeader';
import ContentView from './Containers/Content';

import './App.css';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <ContentView />
    </div>
  );
}

export default App;
