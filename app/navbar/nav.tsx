import React from 'react'
import styles from '@/app/page.module.css'   
import Image from 'next/image' 
import milestone from '../../public/milestone.svg'
import tyre from '../../public/tyre.png'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className={styles.cont}> 
            <Link href="/" className={styles.icon}>
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
       </Link>
    
    <nav className={styles.cont1}>  
       <Link href="/">
          Home
        </Link>   
        <Link href="/calculate">
          Calculate
        </Link>
        <Link href="/about">
          About
        </Link>
          <Link href="/signin" className={styles.loginBtn}>
            Login
          </Link>
    </nav>
  </div>  
  )
}