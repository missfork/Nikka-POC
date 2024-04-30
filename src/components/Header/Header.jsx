import React from 'react'
import style from './Header.module.scss'

function Header() {
  return (
    <div className={style.wrapper}>
        <div className={style.left}>NI<span>K</span>AA</div>
        <div className={style.right}>
            <button id={style.firstBtn}>career</button>
            <button>contact</button>
        </div>
    </div>
  )
}

export default Header