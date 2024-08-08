// src/App.jsx
import React from 'react';
import Dash from './components/Dash/Dash.jsx';
import Features from './components/Features/Features.jsx';
import Info from './components/Info/Info.jsx'
import New from './components/New/New.jsx'
import Call from './components/Call/Call.jsx'
import Pricing from './components/Pricing/Pricing.jsx';
import Fotter from './components/Fotter/Fotter.jsx'
import Bot from './components/Bot/Bot.jsx'

const App = () => {
  return (
   <>
   
    <Dash />
      <Features />
      <Info />
      <New />
      <Bot/>
      <Call />
      <Pricing/>
      <Fotter/>
   </>
     
      
    
  );
};

export default App;
