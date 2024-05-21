import React from 'react'
import { AiFillHome } from "react-icons/ai";
import { BsChatDotsFill } from "react-icons/bs";
import { VscBook } from "react-icons/vsc";
import { BsCollectionPlayFill } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import './sidebar.css'
import SideButtons from './sidebuttons'
import useStateContext from '../../Components/LoginComponents/Hooks/useStateContext';
import { useNavigate } from 'react-router-dom';
import './sidebarbuttons.css'
import { IconContext } from 'react-icons';


export default function SideBar() {
  const {context, setContext}= useStateContext();
  const {resetContext} = useStateContext();
  const navigate = useNavigate();
  const logout = () =>{
    resetContext();
    navigate("/Login")
  }
  return (
    <div className='sidebar'>
      <div className='title'> {context.name} </div>
      <div className='navbar'>
        <SideButtons title="Главная" to="/home" icon={<AiFillHome />} />
        <SideButtons title="Чат" to="/chat" icon={<BsChatDotsFill />} />
        <SideButtons title="Изучать слова" to="/MainMenu" icon={<VscBook />} />
        <SideButtons
          title="Изучать грамматику"
          to="/videos"
          icon={<BsCollectionPlayFill />}
        />
        <div className='btn-body' onClick={logout}> 

          <IconContext.Provider value={{ size: "30px", className: "btn-icon" }}>
            <CiLogout />
            <p className="btn-title">Выйти</p>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  )
}
