import React from 'react'
import styles from '@/app/page.module.css'   
import Image from 'next/image' 
import milestone from '../../public/milestone.svg'
import tyre from '../../public/tyre.png'

export const Navbar = () => {
  return (
    <div className={styles.cont}> 
    <a className={styles.icon}>
      <h2>MileS</h2> 
      <Image 
        src={milestone} 
        alt='not found'  
        className={styles.iconimg} 
      />  
      <Image 
        src={tyre} 
        alt='not found'  
        className={styles.iconimg} 
      />  
      <h2>NE</h2>
    </a> 
    <nav className={styles.cont1}>  
        <a>Home</a>    
        <a>Calculate</a>
        <a>About</a>
        <a>Login</a>
    </nav>
  </div>  
  )
}