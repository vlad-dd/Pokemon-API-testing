import React from 'react'
import Leaders from './Leaders'
import './Type.css';

const Type = (props) => {

    let leadersData = props.leaders.map((el) => {
        return (<Leaders name = {el.name} url = {el.url}/>)
    })


    return (
        <div>
         <div className={props.header}>
         <div className='title_span '><span>{props.name}</span></div>
         <div className='title_img'><img className='village_icons' src = {props.img} /></div></div>

        <div className={props.theme}>
            <div className='about_current_type'>
            <div className='description_block'>{props.description}</div>
            <div className='gif'><img className='type_gif' src={props.gif} /></div>
            </div>
          <div className='leaders_title'><h2>Leaders</h2></div>
          <div className='leaders_block'>
              {leadersData}
          </div>
        </div>
        </div>
    )
}

export default Type
