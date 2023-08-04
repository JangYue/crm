import React from "react";
import styles from "./index.module.less"
import {RightOutlined } from "@ant-design/icons"
import {Avatar,Button} from "antd"
import avatar from "@/assets/images/avatar.png"
const Workload = () =>{
  return (
    <div className={styles.box}>
      <div className={styles.title}>
        <span className={styles.left}>Workload</span>
        <div className={styles.right}>
          <span className={styles.cont}>view all</span>
          <RightOutlined style={{fontSize:"10px"}}/>
        </div>
      </div>
      <div className={styles.list}>
        {
          [1,2,3,4,5,6,7,8].map((val,key)=>{
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

export default Workload;