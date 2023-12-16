import React, { useState,useRef,useEffect } from 'react'

import {Route, Router, Routes,useParams} from 'react-router-dom';
import 'rc-slider/assets/index.css'; // Import the styles for rc-slider
import Slider from 'rc-slider'; // Import the rc-slider component

import Insertion from './Insertion'
import Selection from './Selection';
import Learn from './Learn';
import { isValidInputTimeValue } from '@testing-library/user-event/dist/utils';



export default function Sorting(props) {

  const ComponentMap={
   
    selection : Selection,
    insertion : Insertion,
    bubble : Learn,
  }


  const inital = null;

  const [slider,Setslider]=useState(100)
  const [sliderSpeed , SetSliderSpeed] = useState(10)
  const [submit,Setsubmit]=useState(false)
  const [sorted , SetSorted] = useState(false);
  //for size slider
  const buttonRef = useRef(inital);
  const buttonRefSlider = useRef(inital)
  const buttonRefSlider2=useRef(inital);

  

 

  const handleslider=(event)=>{
      Setslider(event.target.value)

  }
  const handleslider2 = (e)=>{
    SetSliderSpeed(e.target.value)
  }

  const HandleStart = ()=>{
    window.location.reload();
  }

 
  
  let SelectedComponent = ComponentMap[props.name];
console.log(SelectedComponent)
return (
  
  <>
  <h1>{props.name} sort visualization</h1>
  <div className="slidercontainer-title">
  <h4>Adjust the size of the array</h4> 
  <h4>Adjust the delay of visualization</h4> 
  </div>


  <div className="slidercontainer">
    <div className="slidercontainer-sub1">
      <h6>too small</h6>

    <input type="range" min="10" max="200" step="1" className="slider" id="slider" value={slider} onChange={handleslider} ref={buttonRefSlider} /> <br/>
    <h6>too big</h6>
    </div>
  
  

  <div className="slidercontainer-sub1">
  <h6>too fast</h6>
  <input type = "range" min ="0.5" max ="200" step = "1" value = {sliderSpeed} className='slider' id='slider2' onChange={handleslider2} ref={buttonRefSlider2} />
  <h6>too slow</h6>
  </div>
  
  </div>

        
        
          <button id="btn" ref = {buttonRef} onClick={(e) => {
            buttonRef.current.disabled = true
            buttonRefSlider.current.disabled = true;
            buttonRefSlider2.current.disabled= true;
            
            Setsubmit(true);
          }}>Click to sort</button>

          <button id = "btn" onClick={HandleStart}>Start Again</button>
          
        
          <SelectedComponent slider={slider} sliderSpeed = {sliderSpeed} submit={submit} Setsubmit={Setsubmit} SetSorted={SetSorted} sort={sorted} />
  </>
)
}