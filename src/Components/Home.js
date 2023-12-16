import React from 'react'
import {Link} from 'react-router-dom'
import image1 from '../images/git-hub.jpeg'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


export default function Home() {
  return (
    <div className='Home'>

 
    <div className = "container">
   
        <h1>Visualize sorting algorithms</h1>
        <p>Visualize your favourite algorithms online!! This project is made using react and currently supports 3 sorting algorithms Feel free to add your own implementations by sending a pull request! </p>
        
        <div className="grids">
          <div className='bubble'>
            <h1>O(n<sup>2</sup>)</h1>
            <Link to='/sorting/bubble' style={{textDecoration : 'none'}}><h4>Bubble sort </h4></Link>
     
            
          </div>
          <div className='selection'>
          <h1>O(n<sup>2</sup>)</h1>
              <Link to='/sorting/selection' style={{textDecoration : 'none'}}><h4>Selection sort </h4></Link>
          </div>
          <div className='insertion'>
          <h1>O(n<sup>2</sup>)</h1>
          <Link to='/sorting/insertion' style={{textDecoration : 'none'}}><h4>Insertion sort </h4></Link>
          </div>
        </div>
        <div className="reach-out">
          <Link to = 'https://github.com/vign2020'><FaGithub size={60} color='rgb(0, 255, 0)'/> </Link>
          <Link to = 'https://www.linkedin.com/in/vignesh-senthil-78b477209/'>  <FaLinkedin size = {60} color='rgb(0, 255, 0)'/> </Link>
     
        </div>
    

        
    </div>

   
    </div>
  )
}
