import React from "react"
import Layout from "../../layout/loginLayout/index"
import LeftBox from "./leftBox/index"
import RightBox from "./rightBox/index"
export default function Login(){
  return (
    <Layout LeftBox={LeftBox} RightBox={RightBox}></Layout>
  )
}