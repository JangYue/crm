import  React from "react";
import styles from "./index.module.less"
import settings from "@/assets/images/settings.png"
import MyForm from "./MyForm/index";
import Menu from "./Menu/index"
import Content from "./Content/index";
const InfoPortal = ()=>{
  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <div className={styles.title}>My Profile</div>
        <div className={styles.rightBox}>
          <span className={styles.img}><img src={settings}/></span>
        </div>
      </div> 
      <div className={styles.cont}>
        <div className={styles.leftForm}>
            <MyForm/>
        </div>
        <div className={styles.content}>
          <Menu/>
          <Content/>
        </div>
      </div>
     
    </div>

  )
}

export default InfoPortal;