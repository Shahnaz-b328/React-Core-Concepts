import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // var person = {
  //   name: "Dr.Mahfuz",
  //   job: "singer"
  // }
  // var person2 = {
  //   name: "Suma Rahman",
  //   Profession: "Software-Engineer",
  //   age: 26,
  // }
  // var style = {
  //   color: 'green'
  // }
  const products = [
    {name: 'Photoshop', price:'$70.99'},
    {name: 'AdobeReader', price:'$6.45'}
  ]
  const friends = ['suma', 'juma', 'ruma']
  const vegetables = [
    {names: 'cabbage', prices:'20tk'},
    {names:'apple', prices: '30tk'},
    {names:'banana', prices: '10tk'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
       <h1 style = {style}>My Heading {10+20}</h1>
        <h2>{person.name + " " + person.job}</h2>
        <h3 style = {{backgroundColor : "navy", color: "yellow"}}>Singer: {person2.name + " " + person2.Profession + " " +"Age:"+ person2.age}</h3>
        <p>My First React Application</p>   */}
        {/* <Products name={products[0].name}></Products> */}
        <Counter></Counter>
        <Users></Users>
        <ul>
          {
            friends.map(friend => <li>{friend}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>

          {
            vegetables.map(fd => <Foods food={fd}></Foods>)
          }

        <Products product={products[0]}></Products>
        <Products product={products[1]}></Products>

        <Person id="45" name="Sumaiya Begum"></Person>
        <Person id="49" name="Anika Iman"></Person>
        <Person id="63" name="Fahmida Afrin"></Person>
        <Person id="75" name="Sweety Islam"></Person>
      </header>
    </div>
  );
}
function Person(props){
  const personStyle = {
    color: "tomato",
    fontSize: "25px",
    border : "2px solid pink",
    margin: '20px'
    
  }
  return (
    <div>
    <h1 style = {{backgroundColor: 'navy'}}>North East University Bangladesh</h1>
    <h2 style = {personStyle}>Department: CSE</h2>
    <h3>Name: {props.name}</h3>
    <h3>Reg: {props.id}</h3>
  </div>
  )
}
function Products(props) {
  const productStyle = {
    border: '2px solid grey',
    backgroundColor: 'lightGray',
    borderRadius: '3px',
    height: '300px',
    width: '300px',
    color: 'navy',
    margin : '30px'
  }
  const {name, price} = props.product;
  return(
    <div style = {productStyle}>
      {/* <h2>{props.name}</h2> */}
      {/* <h2>{props.product.name}</h2>
      <h2>{props.product.price}</h2> */}
      <h2>{name}</h2>
      <h2>{price}</h2>
      <button>Buy Now</button>
    </div>
  )

}
function Foods(props) {
  const foodsStyle = {
    height : '300px',
    width: '300px',
    backgroundColor: 'tomato',
    borderRadius: '3px',
    boxShadow: '10px 10px 35px white',
    margin: '20px',
    float:'left'
  }
  const {names, prices} = props.food
  return (
    <div style={foodsStyle}>
      <h2>{names}</h2>
      <h3>{prices}</h3>
      <button>Buy Now</button>
    </div>
  )
}
function Counter() {
  const [count, setCount] = useState(10);
  const handleIncrease = () => setCount(count + 1);
  // {
  //    const newCount = count + 1;
  //    setCount(newCount)
  //   setCount(count + 1)
  // }
  return (
    <div>
      <h1>Count: {count}</h1>
    <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
  
}
function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  })
  return(
    <div>
      <h1>Dynamic:{users.length}</h1>
      <ul>
        {
          users.map(user => <li>{user.email}</li>)
        }
      </ul>
    </div>
  )
}
export default App;
