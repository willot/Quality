import React from 'react';
import './App.css';
import {Home} from "./pages/Home";


function App() {
        document.title = 'Quality';

  return (
    <div className="App bg-white-bg flex flex-row justify-center">
      <Home/>
    </div>
  );
}

export default App;
