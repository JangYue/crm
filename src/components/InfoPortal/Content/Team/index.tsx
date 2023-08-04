import React from "react"
import styles  from "./index.module.less"
import { Avatar,Button } from "antd"
import avatar from "@/assets/images/avatar.png"
const Team = ()=>{
  return (
    <div className={styles.box}>
       <div className={styles.list}>
        {
          [1,2,3,4,5,6,7].map((val,key)=>{
            return(
              <div className={styles.card} key={key}>
                <Avatar className={styles.avatar} size={58} src={avatar}/>
                <div className={styles.cont}>
                  <span className={styles.name}>Shawn Stone</span>
                  <span className={styles.zhiye}>UI/UX Designer</span>
                  <Button className={styles.btn}>Middle</Button>
                </div>
            </div>
            )
          })
        }
       
      </div>
    </div>
  )
}

export default Team;