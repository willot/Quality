import React from 'react';
import './App.css';
import {Home} from "./pages/Home";


function App() {
        document.title = 'Home';

  return (
    <div className="App bg-white-bg">
      <Home/>
    </div>
  );
}

export default App;
