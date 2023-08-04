import React from "react"
import styles from "./index.module.less"
import photo from "@/assets/images/photo.png"
import edit from "@/assets/images/edit.png"
import {Form,Input} from "antd"

const MyForm = ()=>{
  const [form] = Form.useForm<{ position: string; company: string,location:string,birthday:string }>();
  const nameValue = Form.useWatch('name', form);
  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <div className={styles.person}>
          <img src={photo}/>
          <span className={styles.name}>Evan Yates</span>
          <span className={styles.zhiye}>UI/UX Designer</span>
        </div>
        <div className={styles.setting}>
          <img src={edit}/>
        </div>
      </div>
      <div className={styles.info}>
        <div className={styles.title}>Main info</div>
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item name="position" label="Position">
            <Input placeholder="UI/UX Designer" />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <Input placeholder="Cadabra"/>
          </Form.Item>
          <Form.Item name="location" label="Location">
            <Input placeholder="NYC,New York,USA"/>
          </Form.Item>
          <Form.Item name="birthday" label="Birthday">
            <Input placeholder="May 19,1996"/>
          </Form.Item>
          <div className={styles.title}>Contact Info</div>
          <Form.Item name="email" label="Email">
            <Input placeholder="evanyates@gmail.com"/>
          </Form.Item>
          <Form.Item name="tel" label="Mobile Number">
            <Input placeholder="+ 1 675 346 23-10"/>
          </Form.Item>
          <Form.Item name="skype" label="Skype">
            <Input placeholder="Evan 2256"/>
          </Form.Item>
      </Form>
      </div>
    </div>
  )
}

export default MyForm;