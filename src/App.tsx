import React from 'react';

import NavigationHeader from './Components/NavigationHeader';
import ContentView from './Containers/Content';

import './App.css';
import PlayerTab from './Containers/PlayerTab';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      // @ts-ignore
      <ContentView />
      // @ts-ignore
      <PlayerTab />
    </div>
  );
}

export default App;
