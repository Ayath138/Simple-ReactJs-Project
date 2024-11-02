import React, { useState } from 'react'

const Form = () => {
   const [user, setUser] =useState('');
   const [pass,setPass]= useState('');
   const [email, setEmail] = useState('');
//    console.log('user', user);
//    console.log('pass', pass);
//    console.log('email', email);
   const handleUser = (e) =>{
    setUser(e.target.value);
   }
   const handlePass = (e) =>{
    setPass(e.target.value);
   }

   const handleEmail = (e) => {
    setEmail(e.target.value);
   }

   const handleSubmit = (e) =>{
    e.preventDefault();
    let userObj = {
        userName: user,
        passWord: pass,
        email: email
    }
    console.log('userObj', userObj);

   }



  return (
    <form onSubmit={handleSubmit}> 
        <div>
        <div>
            <input type="text" placeholder="username" value={user} onChange={handleUser} />
         </div>
         <div>
            <input type="text" placeholder="password" value={pass} onChange={handlePass} />
         </div>
         <div>
            <input type="email" placeholder="enter email" value={email} onChange={handleEmail} />
         </div>
         <div>
            <button>Sumbit</button>
         </div>

    </div>
     </form>
    
  )
}

export default Form;