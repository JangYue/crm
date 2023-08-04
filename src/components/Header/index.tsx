import React from "react"
import {Layout,Input,Avatar} from "antd"
import search from "@/assets/images/search.png"
import notification from "@/assets/images/notifications.png"
import photo from "@/assets/images/photo.png"
import right from "@/assets/images/right.png"
import styles from "./index.module.less"
const HeaderLayout = Layout.Header;

const Header = ()=>{
  return (
    <HeaderLayout className={styles.header}>
      <div className={styles.search}>
          <img src={search}/>
          <Input className={styles.input} bordered={false} placeholder="Search"/>
      </div>
      <div className={styles.tixin}>
        <img src={notification}/>
      </div>
      <div className={styles.person}>
        <Avatar style={{width:"30px",height:"30px"}} src={photo}/>
        <span className={styles.name}>Evan Yates</span>
        <img style={{width:"24px",height:"24px"}}src={right}/>
      </div>
    </HeaderLayout>
  )
  
}

export default Header;