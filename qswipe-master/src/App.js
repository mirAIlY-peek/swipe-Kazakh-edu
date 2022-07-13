import './App.css';
import React, { Component } from "react";
import {useState} from 'react';
import { useTransition, animated } from 'react-spring';
import Deck from "./components/Deck";

class App extends Component {
  render() {
    return <Deck />;
  }
}
/*
const App = () => {
  const [items, setItems] = useState([]);
  const transition = useTransition(items, {
    from: { x: -100, y: 800, opacity: 0 },
    enter: {x: 0, y: 0, opacity: 1 },
    leave: { x: 100, y: 800, opacity: 0 },

  });

  return (
    <div className="App">
      <button onClick={() => {
        setItems(v => v.length ? [] : [{}, {}, {}] );
      }}>{items.length  ? 'un-mount': 'mount'} </button>

      <div className="container">
        
        {transition((style, item) =>
        item ? <animated.div style={style} className="item" /> : '')}
      </div>
    </div>
  );
}
*/
export default App;
