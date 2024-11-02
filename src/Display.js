import React, { useState } from 'react'

const Display = () => {
    const [disData, setdisData] =useState(false);

    const handleBtn2=()=>{
        console.log('data', handleBtn2);
        setdisData(!disData);
    }
  return (
    <div>
        <button onClick={handleBtn2}>{disData ? 'hide' : 'show'}</button>
        {disData ?(
      
            <p>Powerful, extensible, and feature-packed frontend toolkit. Build and customize with Sass, utilize prebuilt grid system and components, and bring projects to life with powerful JavaScript plugins.</p>
        ):(
       <h3></h3>
        )}
    </div>
  );
};

export default Display;