// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import { useEffect } from 'react';

function App() {
  return (
    <div className="App">
      {/* Component Call */}
      {/* < Phone />  */}
      < PhoneList />
    </div>
  );
}

function PhoneList(){
  // const mobiles = [
  //   {
  //     model: "OnePlus 9 5G",
  //     img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //     company: "Oneplus"
  //   },
  //   {
  //     model: "Iphone 13 mini",
  //     img:
  //       "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-mini-blue-select-2021?wid=470&hei=556&fmt=jpeg&qlt=95&.v=1645572315986",
  //     company: "Apple"
  //   },
  //   {
  //     model: "Samsung s21 ultra",
  //     img: "https://m.media-amazon.com/images/I/81kfA-GtWwL._SY606_.jpg",
  //     company: "Samsung"
  //   },
  //   {
  //     model: "Xiomi mi 11",
  //     img: "https://m.media-amazon.com/images/I/51K4vNxMAhS._AC_SX522_.jpg",
  //     company: "Xiomi"
  //   }
  // ];
  
  // const mobiles = []; 
  const [mobiles, setMobiles] = useState([]); // Applying useState hook.


  // fetch("http://localhost:4000/mobiles")
  // .then((data) => data.json())
  // .then((mbs) => console.log(mbs));

  useEffect(() => {
    fetch("http://localhost:4000/mobiles")
    .then((data) => data.json())
    // .then((mbs) => console.log(mbs));
    .then((mbs) => setMobiles(mbs)); // Applying useState hook.
  }, []); // Applying useEffect hook.

  return (
    <div className="phone-list-container">
      {/* {mobiles.map((mb) => (
        < Phone mobile={mb}/> 
        // props
      ))} */}
      {mobiles.map((mb, index) => (
        < Phone key={index} mobile={mb}/> 
        // props
      ))}
    </div>
  );
}

// Component declaration
function Phone({mobile}){ // props // Object destructuring
  // const mobile = {
  //   model: "OnePlus 9 5G",
  //   img: "https://m.media-amazon.com/images/I/61fy+u9uqPL._SX679_.jpg",
  //   company: "Oneplus"
  // };
  return(
    <div className="phone-container">
      <img src={mobile.img} alt={mobile.model} className="phone-picture"/>
      <h2 className="phone-name">{mobile.model}</h2>
      <p className="phone-company">{mobile.company}</p>
    </div>
  )
}
export default App;
