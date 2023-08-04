import React from "react"
import styles from "./index.module.less"
import photo from "@/assets/images/avatar.png"
import arrow from "@/assets/images/medium.png"
import { Button } from "antd"
 const List = ()=>{
  return (
    <div className={styles.box}>
      {[1,2,3,4,5,6].map((val,key)=>{
        return (
        <div key={key} className={styles.list}>
          <div className={styles.detail}>
            <div className={styles.title}>
              <span className={styles.name}>Task Name</span>
              <span className={styles.est}>Estimate</span>
              <span className={styles.time}>SpentTime</span>
              <span className={styles.asi}>Assignee</span>
              <span className={styles.pro}>Priority</span>
            </div>
            <div className={styles.cont}>
              <span className={styles.name}>Research</span>
              <span className={styles.est}>2d 4h</span>
              <span className={styles.time}>1d 2h</span>
              <img className={styles.asi} src={photo}/>
              <div className={styles.pro}>
                <img src={arrow}/>
                <span>Medium</span>
              </div>
            </div>
          </div>
          <div className={styles.status}>
            <Button color="yellow">Done</Button>
          </div>
          <div className={styles.icon}>
            <Button loading={true}></Button>
        </div>
      </div>
        )
      })} 
    </div>
  )
 }
 export default List;