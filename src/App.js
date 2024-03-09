import React from 'react';
import './App.css';
import Navbar from './componets/Navbar.js';
import Hero from './componets/Hero.js';
import Card from './componets/Card.js';
import data from './data.js'

function App() {
  const cards = data.map(item => {
    return (
        <Card 
            key={item.id}
            item={item}
        />
    )
}) 

return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <section className='card--container'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;
