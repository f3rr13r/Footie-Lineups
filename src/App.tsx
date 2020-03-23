import React from 'react';

/*-- components --*/
import NavigationHeader from './Components/NavigationHeader';
import ContentView from './Containers/Content';
import PlayerTab from './Containers/PlayerTab';

/*-- styles --*/
import './App.css';

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
