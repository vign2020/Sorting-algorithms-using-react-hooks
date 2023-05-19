import React, { useState,useRef,useEffect } from 'react'
import Learn from './Learn';

export default function Sorting() {

    const [slider,Setslider]=useState(100)
    const [submit,Setsubmit]=useState(false)

    const handleslider=(event)=>{
        Setslider(event.target.value)
        console.log(slider)
    }

    useEffect(()=>{
        const button=document.querySelector('#btn')
        if(submit===true){
            
        button.disabled=true
        }
        else{
            button.disabled=false
        }
        

    },[submit])
  return (

    <>

    <h1>Bubble sort visualization</h1>
    <h4>Adjust the size of the array</h4> 



            <input type="range" min="10" max="200" step="1" value={slider} class="slider" id="mySlider" onChange={handleslider} /> <br/>

            <button id="btn" onClick={()=>{
      Setsubmit(true)
    }}>Click to sort</button>


        <Learn slider={slider} submit={submit} Setsubmit={Setsubmit} />

    </>

  )

  
}
