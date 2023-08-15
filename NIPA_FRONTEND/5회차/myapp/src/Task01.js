import React, { useEffect, useState } from 'react';
import axios from 'axios'


const App = () => {
  const [images, setImages] =  useState([])
  const [number, setNumber] = useState(1)
  
  return (
    <>
       <input type="number" name="Number" min="1" max="50" 
       onChange={(e)=>{
        setNumber(e.target.value)
       }}
       style={{ margin: '0.4rem',
                width:'200px', height:'30px', fontSize:'30px' }}/>
       <button onClick={
        async () => {
        try{
          const response = await axios.get(`https://dog.ceo/api/breeds/image/random/${number}`)
          setImages(response.data.message)
        }catch(error){
          console.log(error)
        }
        }}>이미지가져오기</button> <br /> 
        {images.map((item, index)=>{
        return <img src={item} key={index} width="300" height="300"/>
         })} 

    </>
  );
}

export default App