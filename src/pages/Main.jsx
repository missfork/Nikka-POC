import React from 'react'
import style from './Main.module.scss'
import Header from '../components/Header/Header'
import Home from './Home/Home'
function Main() {
  return (
<div className={style.wrapper}>
    <Header/>
    <Home/>
</div> 
  )
}

export default Main