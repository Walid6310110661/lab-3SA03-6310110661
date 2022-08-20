import React from 'react';
import './App.css';
import WordCard from './WordCard';


const word1 = "Hello";
const word2 = "World";
const word3 = "Computer";
const word4 = "Engineering";

function App() {
  return (
    <div className='black'>
        <h1 className='header'>Welcome to card game</h1>

        <WordCard value={word1}/>
        <WordCard value={word2}/>
        <WordCard value={word3}/>
        <WordCard value={word4}/>
    </div>
  );
}

export default App;
