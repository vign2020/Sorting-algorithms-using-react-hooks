import React, { useEffect, useState } from 'react'

export default function Insertion(props) {
   

   
    const [array , SetArray] = useState([])
    const [i , SetI] = useState(1);
    const [j , SetJ] = useState(0);

  

    

    const maxi = Math.max(...array);
    
    let arr = []
    const [key , SetKey] = useState(0);

    const submit = props.submit
    const SetSubmit = props.Setsubmit
    const sorted = props.SetSorted
    const sort = props.sort;

   

    useEffect(()=>{
        // console.log(props.slider)
        // console.log(array)
        
        for(let i = 0 ; i < props.slider ; ++i){
            arr[i] = Math.floor(Math.random() * 100);
        }
        SetArray(arr)
        SetKey(arr[1])



    },[props.slider])

    //insertion sort algorithm

    useEffect(()=>{
        console.log(`submit is ${submit} `)
        if(submit === true){
            
           const interval = setInterval(() => {
                
        
            if(i < array.length){
                

                SetJ(i)

                if(j >= 0 && array[j] > key){
                
                    SetArray(prev =>{
                        const newArray = [...prev]
                        newArray[j+1] = newArray[j]
                        return newArray;
                    })
                    SetJ( j - 1);
                   
                }

                else{
                    
                    SetArray(prev =>{
                        const newArray = [...prev]
                        newArray[j+1] = key;
                        return newArray
                    })
                    SetKey(array[i+1]);
                    SetI(i + 1);
                    
                    
                }
            }
            else{ 
                clearInterval(interval)
            }
            console.log(array)
        }, props.sliderSpeed);
        return ()=>{clearInterval(interval)}
            
        }
    },[array , submit , i , j])
  
  return (
    <>
        <div div className="bars-container" >
        {array.map((item, index) => {
        const height = (item / maxi) * 200;
        

        return (
          <div
            key={index}
            className="bar"
            style={{
              height: `${height}px`,
              backgroundColor: key === item ? 'red' : array[j] === item ? 'blue' :'',
            }}
          ></div>
        );
      })}
       
        </div>
        <h1>key's value : {key} ,  ith value :  {i} and jth value : {j}</h1>
       
    </>
  )
}
