import React from 'react'
import Sample from './Sample';

const name= 'Ayath TEST';
const name1='test again'
const Home = () => {

  const handleBtn =()=>{
    console.log('data');
  }

  const add = (x, y)=>{
    console.log(x+y);
  }
  add();
  return (
    <div> Home
    <Sample test={name} />
    <Sample test1={name1}/>
    <button onClick= {handleBtn}>reset</button>
    <button onClick={() => add(2, 6)}>
      submit
    </button>
    
  
    </div>
  )
}

export default Home;