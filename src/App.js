import Input from './Component/Input';
import ListForm from './Component/ListForm';
import { useState, useEffect } from 'react';


function App() {

  const [inputValue, setInputValue] = useState([]);

  useEffect(() => {
    if(inputValue.length !== 0) {
      localStorage.setItem('todos', JSON.stringify(inputValue));
    }  
  }, [inputValue])
  
  useEffect(() => {
      setInputValue(JSON.parse(localStorage.getItem('todos') || '[]'));
  }, []);


  return (
    <div className='w-full h-screen'>
      <header className="header w-full shadow-md bg-light-red">
        <h1 className="text-3xl py-2 text-white ml-5 ">To do List</h1>
      </header>
      <Input
        setInputValue={setInputValue}
      />
      <ListForm
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
    </div>
  );
}

export default App;
