import React from "react";
import styles from "./index.module.less"
import calendar from "@/assets/images/calendar.png"
import {RightOutlined } from "@ant-design/icons"
import time from "@/assets/images/time.png"
import medium from "@/assets/images/medium.png"
const Events = ()=>{
  return (
    <div className={styles.box}>
       <div className={styles.title}>
        <span className={styles.left}>Nearest Events</span>
        <div className={styles.right}>
          <span className={styles.cont}>view all</span>
          <RightOutlined style={{fontSize:"10px"}}/>
        </div>
      </div>
      <div className={styles.list}>
        {
          [1,2,3].map((val,key)=>{
            return (
              <div className={styles.item} key={key}>
                <div className={styles.detail}>
                  <div>Presentation of the new department</div>
                  <img src={medium}/>
                </div>
                <div className={styles.time}>
                  <div>Today | 5:00 PM</div>
                  <div className={styles.btn}>
                    <img src={time}/>
                    <span>4h</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
  
    </div>
  )
}

export default Events