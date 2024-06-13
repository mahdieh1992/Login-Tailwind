import React from 'react';
import './App.css'
import Nav from './Header';



export default class App extends React.Component {

  constructor() {
    super()
    this.state = {
      users: [
        { id: 1, name: 'ali', age: 32, img: 'image8.jpg' },
        { id: 2, name: 'fj', age: 33, img: 'image9.jpg' },
        { id: 3, name: 'mila', age: 75 }
      ],
      code: 12
    }
    

  }

  handel() {
    this.setState(prevState=>{
      return{code:prevState.code+4}
    })

  }
  render() {


    return (
      
        <div className='bg-primary w-full  px-20 py-20'>
       
         
            <Nav/>
        </div>


     
    )
  }

}