

import React, { useState,useEffect } from 'react'
import '../App.css'

export default function Learn(props) {


  const [numbers, setNumbers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexOuter,setCurrentIndexOuter]=useState(0);
  const [swap,Setswap]=useState(false)
  const maxBarHeight = 200; // Maximum height of a bar
  const maxArrayValue = Math.max(...numbers);

    
let arr=[]


  useEffect(()=>{


      for (let i = 0; i < props.slider; i++) {
       
        const randomNumber = Math.floor(Math.random() * 100);
      arr[i]=randomNumber;
      

        }
        setNumbers(arr)
        props.Setsubmit(false)
},[props.slider])

  
  useEffect(() => {

if(props.submit===true){

  console.log(currentIndex)
      const interval = setInterval(() => {

      
        if(currentIndex<numbers.length-1){
          Setswap(false)
          if(currentIndexOuter<numbers.length-currentIndex-1){
  
            setNumbers(prev => {
              const newNumbers = [...prev];
              if(newNumbers[currentIndexOuter] > newNumbers[currentIndexOuter+1]){
                [newNumbers[currentIndexOuter],newNumbers[currentIndexOuter+1]]=[newNumbers[currentIndexOuter+1],newNumbers[currentIndexOuter]]
                Setswap(true)
              }
  
              return newNumbers;
                });
                setCurrentIndexOuter(currentIndexOuter+1);
  
  
          }
         else{
            setCurrentIndex(currentIndex+1)
            
            setCurrentIndexOuter(0)
         }
        }
        else {
          clearInterval(interval)
          setCurrentIndex(0)
          setCurrentIndexOuter(0)
          props.Setsubmit(false)
        }
      }, 0.5);

      
    return () => {
      clearInterval(interval);
    };

}

  }, [numbers,currentIndex,currentIndexOuter,props.submit]);

  return (

    <div className="bars-container">
     

    {numbers.map((value, index) => {
      const barHeight = (value / maxArrayValue) * maxBarHeight; // Calculate the height of the bar

      return (
        <div
          key={index}
          className="bar"

          style={{ height: `${barHeight}px` }}
        ></div>
      );
    })}


  </div>

  )
}

