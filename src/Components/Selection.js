import React, { useEffect, useState } from 'react'

export default function Selection(props) {

    let arr = [] 
    let maxi = 100;

    const [array, SetArray] = useState([100 , 90 ,33 ,  80 , 23, 67, 12, 91 , 89 , 33, 21 , 70 , 60 , 50   ]);
    const [i , SetI] = useState(0);
    const [j , SetJ] = useState(0);
    const [minptr , SetMinptr] = useState(0);

    // const [sort , SetSort] = useState(false);
    const submit = props.submit
    const SetSubmit = props.Setsubmit

    const sorted = props.SetSorted
    const sort = props.sort;
    


    useEffect(()=>{
        // console.log(props.slider)
        // console.log(array)
        
        for(let i = 0 ; i < props.slider ; ++i){
            arr[i] = Math.floor(Math.random() * 100);
            if(arr[i] > maxi) maxi = arr[i];
        }
        SetArray(arr)


    },[props.slider])

    useEffect(()=>{
        // alert(sort);
        // console.log(`submit value is ${submit}`)

        if(submit === true ){

        const interval= setInterval(() => {
            console.log(` minptr is ${minptr} i is ${i} and j is ${j} `)
       
            if(i < array.length ){
                
                
                // console.log(`minptr is ${minptr}`)

                if(j < array.length   ){

                   
                    SetArray(prev => {
                        let newArray = [...prev]
                        //perform operations
                        if(newArray[minptr] > newArray[j]){
                            SetMinptr(j)
                        }
                        return newArray
                    })
                    SetJ(prev => prev + 1);
                    
                    
                    
                    // SetMinptr(j);

                    
                }
                else{

                    SetArray(prev =>{
                        let newArray = [...prev]
    
                       let temp = newArray[i];
                        newArray[i] = newArray[minptr];
                        newArray[minptr] = temp;
    
                        // console.log(newArray);
    
                        return newArray
                    })
               
                    
                   SetI(prev =>  prev + 1)
                   SetJ(i+1)
                   SetMinptr(i+1)
                }
                     
               

            }
            else{
                clearInterval(interval)

       
            }

         }, props.sliderSpeed);
         
         return ()=>{clearInterval(interval)}
        
        }
    },[submit , i , j , array])
        
  

  return (
    <>


<div className="bars-container" >
        {
             
            array.map((item , index)=>{
                const height = (item / 70) * 200;
                return(
                    <div key={index} className="bar" 
                    style={{
                        height : `${height}px`,
                        backgroundColor : item === array[minptr] ? 'red' : item === array[j] ? 'blue' : ''}}>

                    </div>
                )
            })
            
        }
        
    </div>
    {/* <button onClick={()=>{ submit === false ? SetSubmit(!submit) : SetSubmit(false) }}>Sort </button> */}
    <h1>minptr is at {minptr} and i is at {i} and j is {j}</h1>
   
    </>
  
  )
}
