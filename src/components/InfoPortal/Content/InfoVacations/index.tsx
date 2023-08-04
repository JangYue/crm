import React  from "react"
import styles from "./index.module.less"
import {Progress} from "antd"
import photo from "@/assets/images/photo.png"
import arrow from "@/assets/images/arrow.png"
import {Button} from "antd"

const InfoVacations = ()=>{
  const vacTest = 12;
  return (
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.item}>
          <div className={styles.count}>
          <Progress type="circle" percent={75}  strokeColor={'#15C0E6'} format={(percent)=>`${vacTest}`} />
          </div>
          <span className={styles.vac}>Vacations</span>
          <span className={styles.date}>12/16 days availble</span>
        </div>
        <div className={styles.item}>
          <div className={styles.count}>
          <Progress type="circle" percent={50} strokeColor={'#F65160'} format={(percent)=>`${6}`} />
          </div>
            <span className={styles.vac}>Vacations</span>
            <span className={styles.date}>12/16 days availble</span>
          </div>
        <div className={styles.item}>
          <div className={styles.count}>
          <Progress type="circle" percent={75} strokeColor={'#6D5DD3'} format={(percent)=>`${12}`} />
          </div>
            <span className={styles.vac}>Vacations</span>
            <span className={styles.date}>12/16 days availble</span>
          </div>
      </div>
      <div className={styles.title}>My Requests</div>
      {[1,2,3].map((val,key)=>{
        return (
        <div key={key} className={styles.list}>
          <div className={styles.type}>
            <div className={styles.gray}>Request Type</div>
            <div className={styles.detail}>
              <div className={styles.circle}></div>
              <div className={styles.bold}>Sick Leave</div>
            </div>
          </div>
          <div className={styles.duration}>
            <div className={styles.gray}>Duration</div>
            <div className={styles.black}>3 days</div>
          </div>
          <div className={styles.start}>
            <div className={styles.gray}>Start Day</div>
            <div className={styles.black}>Sep 12,2020</div>
          </div>
          <div className={styles.end}>
            <div className={styles.gray}>End Day</div>
            <div className={styles.black}>Sep 16,2020</div>
          </div>
          <div className={styles.icon}>
            Pending
          </div>
        </div>
        )
      })} 
    </div>
  )
}

export default InfoVacations;