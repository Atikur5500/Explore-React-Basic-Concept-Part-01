import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Map from './Map'
import President from './President';
import BookStore from './BookStore';


function App() {
  const friends = ['Trump', 'Obama', 'Biden', 'Clinton', 'Kamala', 'Alexander']
  const president = [
    {id: 1, name: 'Donald J Trump', age: 84},
    {id: 2, name: 'Barack Obama', age: 56},
    {id: 3, name: 'Joe Biden', age: 89},
    {id: 4, name: 'Hilary Clinton', age: 54},
  ]
  const books = [
    {name: 'Physics', price: 280},
    {name: 'Chemistry', price: 220},
    {name: 'Math', price: 380},
    {name: 'Biology', price: 270},
  ]
  return (
    <>
    <BookStore books={books}></BookStore>
    {/* <Map name={'Donald'}></Map>
    {
      friends.map(item => <Map name={item}></Map>)
    } */}

    {/* {
      president.map(item => <President president={item}></President>)
    } */}

      {/* <Todo task='learn React' isDone={true}></Todo>
      <Todo task='Core Concept' isDone={false}></Todo>
      <Todo task='Try JSX' isDone={true}></Todo> */}
      {/* <Developer name='Alex' dob='1995'></Developer>
      <Developer name='Barack' dob='1999'></Developer>
      <Person></Person>
      <Person></Person>
      <Student firstName='Donald' lastName='Trump' age='87'></Student> */}
     
    </>
  )
}

function Developer(props) {
  console.log(props)
  return (
    <div className='person'>
      <p>I am {props.name}.My DOB is {props.dob} </p>
    </div>
  )
}

function Person() {
  const name = 'Badhon';
  const age = 24;
  const member = {
    passion: 'Programmer',
    city: 'Dhaka',
  }
  return <p className='person'>Hi I am {name}.I am {age} years old. I am from {member.city} I am learning React. I want to be a {member.passion}</p>
}

const { firstName, lastName, age } = { firstName: 'Donald', lastName: 'Trump', age: 72 };

function Student({firstName, lastName, age}) {
 
  return (
    <div className='person'>
      <h2 className='heading'>Hey! I am {firstName} {lastName}</h2>
      <h4>I am {age} years old</h4>
    </div>
  )
}








export default App
