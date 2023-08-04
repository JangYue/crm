import React from "react"
import styles from "./index.module.less"
import medium from "@/assets/images/medium.png"
import avatar from "@/assets/images/avatar.png"
const Board = ()=>{
  return (
    <div className={styles.cont}>
    {
      [1,2,3,4,5,6,7,8,9,10,11,12].map((val,key)=>{
        return (
          <div key={key} className={styles.card}>
            <span className={styles.number}>TS001245</span>
            <span className={styles.zhiye}>UX sketches</span>
            <div className={styles.like}>
              <div className={styles.front}>
                <span className={styles.btn}>4d</span>
                <img src={medium}/>
              </div>
              <img className={styles.avatar} src={avatar}/>
            </div>
        </div>
        )
      })
    }
  </div>
  )
}
export default Board;