import React, { useState } from 'react'
import './GameMainMenu.css'
import MenuCard from './MenuCard'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function GameMainMenu() {
    const navvigation = useNavigate();
    const sport = () =>{
      navvigation("/sport")
    }
    
    const cloth = () =>{
      navvigation("/game")
    }
    const food = () =>{
      navvigation("/FoodGame")
  }
  return (
    <div className='container'>
      <div className='menu'>
        <div className='menu-container'>
            <div className='title black'>Выбери категорию</div>
            <div className='card-menu-container'>
                <MenuCard text="Спорт" classImage="imgBx sport" classContent="content-menu red" classPrice="price sprt" desc="В данной категории вы можете ознакомиться со словами в категории спорт" click={sport}></MenuCard>
                <MenuCard text="Еда" classImage="imgBx food" classContent="content-menu red" classPrice="price sprt" desc="В данной категории вы можете ознакомиться со словами в категории еда" click={food}></MenuCard>
                <MenuCard text="Одежда" classImage="imgBx cloth" classContent="content-menu red" classPrice="price sprt" desc="В данной категории вы ознакомитесь со словами в категории одежды" click={cloth}></MenuCard>
            </div>
        </div>
      </div>
    </div>
  )
}
