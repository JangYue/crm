import React from "react"
import styles from "./index.module.less"
import avatar from "@/assets/images/avatar.png"
import more from "@/assets/images/more.png"
const EmployList  = () => {
  return (
    <div className={styles.box}>
      {
        [1,2,3,4,5,6,7].map((val,key)=>{
          return (
            <div key={key} className={styles.list}>
              <div className={styles.avatar}>
                <img src={avatar}/>
              </div>
              <div className={styles.person}>
                <div className={styles.title}>Ryan Thompson</div>
                <div className={styles.cont}>ryanthom@gmail.com</div>
              </div>
              <div className={styles.right}>
                <div className={styles.vacations}>
                  <div className={styles.gray}>Vactions</div>
                  <div className={styles.black}>15</div>
                </div>
                <div className={styles.sick}>
                  <div className={styles.gray}>Sick Leave</div>
                  <div className={styles.black}>3</div>
                </div>
                <div className={styles.work}>
                  <div className={styles.gray}>Work remotely</div>
                  <div className={styles.black}>50</div>
                </div>
              </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default EmployList;