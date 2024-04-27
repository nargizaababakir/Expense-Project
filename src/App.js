import { useState } from 'react';
import './App.css';
import Test from './components/Test';

function App() {

const [date , func] = useState('Hello')

console.log(date);
console.log(func);


  return (
    <div className="App">
      <Test/>
      <h1>hello</h1>
    </div>
  );
}

export default App;
