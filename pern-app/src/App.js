import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // "useState" is a function that returns an array with two items in it.
  // The first item (here called greeting) is the value that you pass as 
  // an argument to use state, in this case an empty string ("").
  // The second item is a function (here called setGreeting) that we can use 
  // to change the value of the first item (greeting).
  // Whenever we call this function the App function will be called and the view 
  // will be updated with the new value
  const [yuleladsList, setYuleladsList] = useState([]);

  // "useEffect" is a function that takes a function and an array as arguments. 
  // The function runs once when the component loads and then again if any of 
  // the state variables in the array are changed. 
  // What matters most here is that if you leave the array empty the code in the 
  // function will only run once but not every time we call setGreeting (like the App function).
  useEffect(() => {
    // To be able to use async and await in useEffect we need to create an async function.
    const getList = async() => {
      // We fetch from our api server running on port 5001
      const response = await fetch('http://localhost:5001');
      // We get the json data
      const data = await response.json();

      setYuleladsList(data);
    }

    getList();
  }, []);

  console.log(yuleladsList);

  return (
    <div className="App">

      <h1>Yule Lads</h1>

      <div className="list">
        <div className="list-heading">
          <div className="list-heading-column list-heading__title">Name</div>
          <div className="list-heading-column list-heading__author">EN attribute</div>
          <div className="list-heading-column list-heading__length">Description</div>
          <div className="list-heading-column list-heading__date">Date</div>
        </div>
        {yuleladsList.map((item) => (
          <div key={item.id} className="list-item">
            <div className="list-item-column list-item__title">{item.name}</div>
            <div className="list-item-column list-item__author">{item.attribute}</div>
            <div className="list-item-column list-item__length">{item.description}</div>
            <div className="list-item-column list-item__date">{item.date}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
