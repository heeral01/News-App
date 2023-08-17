import React from 'react'
import './card.css'
export default function card(props) {
  return (
    <div>
       <div className='card'>
        <div className='card-child-1'>
          <img className="card-img" src={props.image} alt="new image"/>
          </div>
          <div className='card-child-2'>
            <p className='card-title'>{props.title}</p>
            <p className='card-description'>{props.description}</p>
            <a className='card-link' href={props.url}>Read More</a>

          </div>
         </div>
    </div>
  )
}
