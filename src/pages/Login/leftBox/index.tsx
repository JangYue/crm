import React from "react"
import logo from "@/assets/images/white.png"
import illustration from "@/assets/images/Illustration.png"
import styles from "./index.module.less"
export default function LeftBox(){
  return (
    <div className={styles.box}>
      <div className={styles.topTitle}>
        <img src={logo}></img>
        <span>Woorkroom</span>
      </div>
      <div className={styles.middleContent}>
        <span>Your place to work</span>
        <span>Plan. Create. Control.</span>
      </div>
      <div className={styles.bottomImg}>
        <img src={illustration}></img>
      </div>
    </div>
  )
}