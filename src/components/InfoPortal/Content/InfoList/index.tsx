import React from "react"
import styles from "./index.module.less"
import photo from "@/assets/images/Image.png"
import calendar from "@/assets/images/calendar.png"
import medium from "@/assets/images/medium.png"
import photos from "@/assets/images/photo.png"
const InfoList = ()=>{
  return(
    <div className={styles.box}>
      {
        [1,2,3].map((val,item)=>{
          return (
            <div key={item} className={styles.item}>
              <div className={styles.left}>
                <div className={styles.top}>
                  <div className={styles.img}>
                    <img src={photo}/>
                  </div>
                  <div className={styles.detail}>
                    <span className={styles.gray}>PNOOO1265</span>
                    <span className={styles.black}>Medical App(IOS native)</span>
                  </div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.icon}>
                    <img src={calendar}/>
                    <span>Created Sep 12,2020</span>
                  </div>
                  <div className={styles.arrow}>
                    <img src={medium}/>
                    <span>Medium</span>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.title}>Project Data</div>
                <div className={styles.detail}>
                  <div className={styles.items}>
                    <span className={styles.gray}>All tasks</span>
                    <span className={styles.black}>34</span>
                  </div>
                  <div className={styles.items}>
                    <span className={styles.gray}>Active tasks</span>
                    <span className={styles.black}>13</span>
                  </div>
                  <div className={styles.items}>
                    <span className={styles.gray}>Assignees</span>
                    <div className={styles.black}>
                      <img src={photos}/>
                      <img src={photos}/>
                      <img src={photos}/>
                      <span className={styles.more}>+2</span>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          )
        })
      }
    </div>
  )
}

export default InfoList;