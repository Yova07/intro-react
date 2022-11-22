import Input from './Component/Input';
import ListForm from './Component/ListForm';
// import NavBar from './Component/NavBar';
import { useState, useEffect } from 'react';


function App() {

  const [inputValue, setInputValue] = useState([]);
  const [localData, setLocalData] = useState('');


  //Remove Items from the local Storage
  useEffect(() => {
    localStorage.removeItem(localData);
  }, [localData])

  //Save Data
  useEffect(() => {
    for (let data of inputValue) {
      localStorage.setItem(data.id, JSON.stringify(data));
    }
  }, [inputValue])

  //Get Data
  useEffect(() => {
    const getData = [];
    for (let i = 0; i < localStorage.length; i++) {
      getData.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
    }
    setInputValue(getData);
  }, []);


  return (
    <div className='w-full h-screen'>
      <header className="header sticky z-10 top-0 w-full shadow-md bg-light-red">
        <h1 className="text-3xl py-2 text-white ml-5 ">To do List</h1>
      </header>

      <main className='flex'>
        {/* <NavBar /> */}
        <div className='w-full'>
          <ListForm
            inputValue={inputValue}
            setLocalData={setLocalData}
            setInputValue={setInputValue}
          />
          <Input
            setInputValue={setInputValue}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
