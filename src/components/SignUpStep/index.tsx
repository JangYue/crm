import React,{useEffect} from "react"
import styles from "./indx.module.less"
import logo from "@/assets/images/white.png"
import {Link,Route,Routes,useNavigate} from "react-router-dom"

import mobxStore from "@/store/index"

import {Steps} from "antd"
const SignUpStep = ()=>{
  const navigate = useNavigate();
  const progress = mobxStore.signupProgress;
  const changeProgress = mobxStore.changeSignupProgress;
  const menuRoute = [
    {
      path:"vaildPhone"
    },
    {
      path:"tellYourself"
    },
    {
      path:"tellCompany"
    },
    {
      path:"inviteTeam"
    }
  ]
  const onChange = (value: number) => {
    changeProgress(+value);
    navigate(`/signup/${menuRoute[+value].path}`)
  };
  const description = 'This is a description.';
  useEffect(()=>{
    navigate("/signUp/vaildPhone")
  },[])


  return (
    <div className={styles.box}>
      <div className={styles.topTitle}>
        <img src={logo}></img>
      </div>
      <div className={styles.title}>
        Get started
      </div>
      <div className={styles.step}> 
        <Steps
            current={progress}
            onChange={onChange}
            direction="vertical"
            items={[
              {
                title: 'Vaild ypur phone',
              },
              {
                title: 'Tell about ypurself',
              },
              {
                title: 'Tell about your company',
              },
              {
                title: 'Invite Team Members',
              },
            ]}
          />
      </div>
    </div>
  )
}

export default SignUpStep;