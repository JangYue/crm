import React from "react"
import {Row,Col,Layout} from "antd";
import styles from "./index.module.less"

const layoutStyle={
  minHeight:'100vh',
  width:"1440px",
  backgroundColor:"rgb(244,249,253)",
  padding:"25px 40px",
  boxSizeing:"border-box"
}

export default function LoginLayout (props:any){
  const LeftBox = props.LeftBox
  const RightBox = props.RightBox;
  return (
    <Layout style={layoutStyle}>
      <Row className={styles.content}>
        <Col span={12} className={styles.left}>
          <LeftBox></LeftBox>
        </Col>
        <Col span={12} className={styles.right}>
          <RightBox></RightBox>
        </Col>
      </Row>
    </Layout>
  )
}
