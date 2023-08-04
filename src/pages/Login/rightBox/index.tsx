import React from "react"
import {Form,Button,Checkbox,Input} from "antd"
import {useNavigate} from 'react-router-dom'
import styles from  "./index.module.less"
import arrow from "@/assets/images/arrow.png"
import {Link} from "react-router-dom"

export default function RightBox(){
  const navigate = useNavigate();
  const onFinish = (values: any) => {
    console.log("jieshu");
    return navigate("/home/dashboard")
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
    

  }
  return (
    <div className={styles.loginBox}>
    <span className={styles.title}>Sign In to Woorkroom</span>
    <Form
    name="login"
    className={styles.loginForm}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
    >
    <Form.Item
      className={styles.inputContent}
      label="Email Address"
      name="email"
      rules={[{ required: true, message: 'Please input your email address!' }]}
    >
      <Input placeholder="youremail@gmail.com" style={{width:"403px",height:'48px'}}/>
    </Form.Item>

    <Form.Item
      className={styles.inputContent2}
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password style={{width:"403px",height:'48px'}}/>
    </Form.Item>

    <Form.Item className={styles.spaceAround}>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox className={styles.remember}>Remember me</Checkbox>
        </Form.Item>
        <span className={styles.loginFormForgot}>
            Forgot password?
        </span>
    </Form.Item>

    <Form.Item className={styles.signIn}>
        <Button type="primary" htmlType="submit" className={styles.loginFormButton}>
          <span>Sign In</span>
          <img src={arrow}/>
        </Button>
        <span className={styles.noAccount}>
          <Link to="/signup">Don’t have an account?</Link>
        </span>
    </Form.Item>
  </Form>
  </div>
  )
}