import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag= () => {
  const[tag, setTag] = useState('car');
  const [gif, setgif] = useState('');
  const[loading, setloading] = useState(false);

  async function fetchData(){
    setloading(true);
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    const {data} = await axios.get(url);
    const imagesource = data.data.images.downsized_large.url;
    setgif(imagesource);
    setloading(false);
  }
  useEffect (() =>{
fetchData();
  }, [])

  function baje(){
    fetchData();
  }
  function changehandler(event){
  setTag(event.target.value);
  }
  return (
    <div className='w-1/2 bg-zinc-950 items-center rounded-md border border-black flex flex-col gap-y-3.5'>
      <h1 className='text-2xl underline uppercase font-semibold text-pink-500' >CUSTOM GIF</h1>
      {
        loading ? (<Spinner></Spinner>) : ( <img src = {gif} width = "450"></img>)
      }
     <input className='w-10/12 text-lg rounded-xl font-bold py-2 mb-[20px] bg-red-200' onChange={changehandler} value={tag}></input>
      <button  className = 'w-10/12 bg-pink-800 text-lg rounded-xl font-bold py-2 mb-[20px]'onClick={baje}>Generate</button>
    </div>
  )
}

export default Tag

