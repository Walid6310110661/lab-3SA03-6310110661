import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word1 = "Hello";
const word2 = "World";

function App() {
  return (
    <div >
        
        <WordCard value={word1}/>
        <WordCard value={word2}/>
        
    </div>
  );
}

export default App;
