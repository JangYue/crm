import React from "react"
import styles from "./index.module.less"
import {Routes,Route} from "react-router-dom"
import VaildPhone from "@/components/SignUpProgress/VaildPhone"
import TellCompany from "@/components/SignUpProgress/TellCompany"
import TellYourself from "@/components/SignUpProgress/TellYourself"
import InviteTeam from "@/components/SignUpProgress/InviteTeam"

const rightLayout = ()=>{
  return (
    <Routes>
      <Route path="/vaildPhone" Component={()=><VaildPhone/>}></Route>
      <Route path="/tellYourself" Component={()=><TellYourself/>}></Route>
      <Route path="/tellCompany" Component={()=><TellCompany/>}></Route>
      <Route path="/inviteTeam" Component={()=><InviteTeam/>}></Route>
    </Routes>
  )
}

export default rightLayout;