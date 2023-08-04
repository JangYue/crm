import React from "react"
import styles from "./index.module.less"
import InfoList from "./InfoList"
import {Routes,Route} from "react-router-dom"
import Team from "./Team"
import InfoVacations from "./InfoVacations"
const Content = ()=>{
  return (
    <div className={styles.box}>
       <Routes>
          <Route path="/list" Component={()=><InfoList/>}></Route>
          <Route path="/team" Component={()=><Team/>}></Route>
          <Route path="/infoVacations" Component={()=><InfoVacations/>}></Route>
       </Routes>
    </div>
  )
}

export default Content;