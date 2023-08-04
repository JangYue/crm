import React from "react"
import {Layout,Row,Col} from "antd"
import styles from "./index.module.less"
import SignUpStep from "@/components/SignUpStep"
import RightContent from "@/layout/signLayout/rightLayout"
const SignUpLayout = ()=>{
  return (
    <Layout  className={styles.layout}>
      <Row className={styles.box}>
        <Col className={styles.left}>
          <SignUpStep/>
        </Col>
        <Col className={styles.right}>
          <RightContent/>
        </Col>
      </Row>
    </Layout>
  )
}

export default SignUpLayout;