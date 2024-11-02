import React from 'react'

const Event = () => {

    const handleBtn=()=>{
        console.log('data');
    }

    const add=(x,y)=>{
        console.log(x+y);

    }
  return (
    <div>Hello
    <button onClick={handleBtn}>RESET</button>
    <button onClick={()=>add(5,4)}> SUBMIT</button>
    </div>
  )
}

export default Event