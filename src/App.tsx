import React from 'react';

/*-- components --*/
import NavigationHeader from './Components/NavigationHeader';
import ContentView from './Containers/Content';
import PlayerTab from './Containers/PlayerTab';

/*-- styles --*/
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationHeader />
      <ContentView />
      <PlayerTab />
    </div>
  );
}

export default App;
