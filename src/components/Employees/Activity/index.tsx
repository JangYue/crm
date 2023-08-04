import React from "react"
import styles from "./index.module.less"
import photo from "@/assets/images/photo.png"
import { Button,Pagination } from "antd"
 const Activity = ()=>{
  return (
    <div className={styles.employ}>
      <div className={styles.box}>
        {
          [1,2,3,4,5,6,7,8].map((val,key)=>{
            return (
              <div key={key} className={styles.card}>
              <div className={styles.intro}>
                <div className={styles.avatar}>
                  <img src={photo}/>
                </div>
                <div className={styles.person}>
                  <div className={styles.name}>Shawn Stone</div>
                  <div className={styles.des}>UI/UX Designer</div>
                </div>
                <Button className={styles.btn}>Middle</Button>
              </div>
              <div className={styles.count}>
                <div className={styles.item}>
                  <div className={styles.number}>0</div>
                  <div className={styles.task}>BackLog tasks</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.number}>16</div>
                  <div className={styles.task}>Tasks In Progress</div>
                </div>
                <div className={styles.item}>
                  <div className={styles.number}>6</div>
                  <span className={styles.task}>Tasks In Review</span>
                </div>
              </div>
            </div>
            )
          })
        }
       
      </div>
      <Pagination
        total={28}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={8}
        defaultCurrent={1}
    />
    </div>
  )
 }

 export default Activity;