import React from "react"
import {Layout} from "antd"
import SiderBar from "@/components/SiderBar/index"
import Header from "@/components/Header/index"
import Content from "@/components/Content/index"
import styles from "./index.module.less"

const { Sider} = Layout

export default function HomeLayout(){
  const layout = {
    minHeight:"100vh",
    minWeight:"100vw",
    backgroundColor:"rgb(244,249,253)",
    padding:"0px 40px 32px 26px",
    boxSizeing:"border-box"

  }
  const siderLayout={
    width:"200px",
    backgroundColor:"#fff",
    borderRadius:"24px",
    marginTop:"20px"
  }
  return (
    <Layout className={styles.layout} style={layout}>
      <Sider style={siderLayout} className={styles.siderBar}>
        <SiderBar/>
      </Sider>
      <Layout className={styles.content}>
        <Header/>
        <Content/>
      </Layout>
    </Layout>

  )
}