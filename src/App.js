import Input from './Component/Input';
import ListForm from './Component/ListForm';
import { useEffect, useState } from 'react';


function App() {

  const [input, setInput] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);


  // useEffect(() => {
  //   if(input.length !== 0) {
  //     localStorage.setItem('todo', JSON.stringify(input));
  //   }  
  // }, [input])
  
  // useEffect(() => {
  //     setInput(JSON.parse(localStorage.getItem('todo') || '[]'));
  // }, []);


  return (
    <div className='w-full h-screen'>
      <header className="header w-full shadow-md bg-light-red">
        <h1 className="text-3xl py-2 text-white ml-5 ">To do List</h1>
      </header>
      <Input
        setInput={setInput}
      />
      <ListForm
        // setIsChecked={setIsChecked}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}

export default App;
