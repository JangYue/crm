import React from "react"
import styles from "./index.module.less"
import calendar from "@/assets/images/calendar.png"
import Workload from "./Workload"
import Events from "./Events"
const Dashboard = ()=>{
  return (
    <div>
      <div className={styles.topBox}>
        <div className={styles.title}>DashBoard</div>
        <div className={styles.rightBox}>
          <span className={styles.img}><img src={calendar}/></span>
          <span>Nov 16,2020 - Dec 16,2020</span>
        </div>
      </div>
      <div className={styles.dashboard}>
        <Workload/>
        <Events/>
      </div>
     
    </div>
  
  )
  
}

export default Dashboard;