import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //1No.
//   var person= {
//            name:"Anufa Yasmin",
//        address : "Dashuria"
// }

// var person2= {
//              name:'kona',
//           address: "Dashuria"
//         }
//         var style = {
//           color:"red",
//           backgroundColor:"white"
//         }

// No:5
const Products =[
  {name:'PhotoShop', price: '$0.90'},
  {name:'Illautrator', price:'$0.99'},
  {name:'PDF Reader', price:'$0.79'}
]
// No:6
const nayoks = ['Abdul Razzak', 'Rubel','Salman shah','Omorsani']
  return (
    <div className="App">
      <header className="App-header">
        {/* Primary */}
       {/* <h2>my heading:{(2+5)*25+32}</h2>
       <p>My first react</p> */}

       {/* No:1 */}
  {/* <h3>my heading: {person.name + " " + person.address}</h3>
  <h3 style = {style}>my wife : {person2.name + " " + person.address}</h3>
  <h2 style= {{backgroundColor:"pink", color: 'black'}}>My wife Another name :{person2.name + " " + person2.address}</h2> */}
   

        {/* No.2 */}
        {/* <Names></Names> */}



      {/* No.3 */}
        {/* <Famous name = 'Rubel' Food = 'Pasta'></Famous>
        <Famous name = 'Rasel' Food = "Burgar"></Famous>
        <Famous name = 'Kona' Food = 'Chicken'></Famous> */}


{/* No:4 */}

        {/* <Product name = 'SoundBox' price= '$200'></Product> 
       <Product name = 'Refrigarator' price ="$490"></Product>
       <Product name = 'Television' price ="$300"></Product>
        
   */}

   {/* No:5 */}
   {/* <Product product = {Products[0]} ></Product>
    <Product product={Products[1]}></Product>
   <Product product={Products[2]}></Product>  */}
                  {/* OR, */}
                  
     {Products.map(product => <Product product ={product}></Product>)}

    {/* No:6  */}
   <ul>
     {nayoks.map(nayok => <li>{ nayok}</li>)}
     { Products.map(product => <li>{product.name}</li>)}
   </ul>

   {/* No:7 */}
   <Counter></Counter>
   <Users></Users>
   
      </header>
    </div>
  );
}


// 2 No:
// function Names(){
//   return ( 
//   <div style= {{color:'pink', backgroundColor:"blue", marginTop:"30px", padding:"40px"}}>
//     <h1>Name: Rais U ahmed</h1>
//     <h2 style = {{color:'green', border:"4px solid red", padding:'4px', backgroundColor:"white", borderRadius:"14px 4px 13px "}}>Hero of the year</h2>
//   </div>
//   )
// }


// No:3
// function Famous(props){
//   const famousStyle = {
//     color:'red',
//     border: '3px solid red',
//     margin:"14px",
    
//   }
//   return(
//     <div style = {famousStyle}>
//       <h1>Name:{props.name}</h1>
//   <h2>Food:{props.Food}</h2>

//     </div>
//   )
// }

// No:4
// function Product(props){
//   const productStyle = {
//     border:'2px solid gray',
//     borderRadius:'5px 4px 7px gray',
//     boxShadow: "2px 1px  5px gray",
//     backgroundColor:'red',
//     height:'200px',
//     width:'300px',
//     margin:'20px'
  
//   }
//   return (
//     <div style = {productStyle}>
//       <h2>Name: {props.name}</h2>
//       <h3> Price: {props.price}</h3>
      
//       <h1></h1>
//       <button style = {{padding:'10px', borderRadius:'14px'}}>Buy Now</button>
//     </div>
//   )
// }

// no.5

function Product (props){
  const productStyle ={
    border:'2px solid gray',
    borderRadius:'5px 4px 7px gray',
    boxShadow: "2px 1px  5px gray",
    backgroundColor:'green',
    height:'160px',
    width:'165px',
    float:'left',
    fontSize:'13px',
    margin:'10px'
    
  }
  return (
  <div style = {productStyle}>
    <h2>{props.product.name} </h2>
  <h1>Price:{props.product.price}</h1>
  <button>Buy Now</button>
  </div>
  )
}

// No:7                                           OR
function Counter(){                         //function Counter(){
  const [counter, setCounter]  = useState(0);  // const [count, setCount] = useState(0);
  const handleIncrease = ()=>{              // const handleIncrease = () =>{
    const newCount = counter + 1;            // setCount(count + 1)
    setCounter(newCount) ;                     //}
  }                                          //return(
    const handleDecrease = ()=>{              //<div>      
      const newsCount = counter -1;                                     
 setCounter(newsCount);                        // </div>
 
    };                                        
  return(
    <div>
      <h1>count: {counter}</h1>
      <button onMouseMove = {handleDecrease}>Decrease</button>
      <button onClick = {handleIncrease}>Increase </button>
      
    </div>
  )
}

//No: 8
 function Users(){
   const[users,setUsers] = useState([]);
   useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data =>setUsers (data))
     }) 
   return(
     <div>
       <h3 >Dynamic users:{users.length}</h3>
      {/* {console.log(users)} */}
      <ul>
        {
          users.map(user =><li>{user.name + " " + user.phone}</li>)
        }
      </ul>
     </div>
   )
 }
export default App;
