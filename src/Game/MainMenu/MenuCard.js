import { Button } from 'bootstrap'
import React from 'react'
import './MenuCard.css'

export default function MenuCard(props) {

    return (
        <div className='card-body'>
            <div className={props.classImage} ></div>
            <div className={props.classContent}>
                <span className={props.classPrice}>
                    <p className='header-card'> {props.text} </p>
                    <p className='card-text'>
                        {props.desc}
                    </p>
                    <button className='card-btn' onClick={props.click}>Изучать!</button>
                </span>
            </div>
        </div>
      )
}
