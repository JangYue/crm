import  React,{useState} from "react"
import styles from "../index.module.less"
import arrow from "@/assets/images/arrow.png"
import {useNavigate} from "react-router-dom"
import mobxStore from "@/store"
import myStyles from "./index.module.less"
import {Form,Input} from "antd"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
const VaildPhone = ()=>{
    const [form] = Form.useForm<{ name: string; age: number }>();
    const [passwordVisible, setPasswordVisible] = React.useState(false);
    const changProgress = mobxStore.changeSignupProgress;
    const navigate = useNavigate();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const changeProgress = mobxStore.changeSignupProgress;
    const next = ()=>{
        navigate('/signup/tellYourself')
        changeProgress(1);
    }
    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <span className={styles.dep}>步骤1/4</span>
                <p className={styles.vaild}>验证您的手机</p>
            </div>
            <div>
                <Form form={form} layout="vertical" autoComplete="off" className={myStyles.form}>
                    <Form.Item name="tel" className={myStyles.item} label="">
                        <Input placeholder="please enter the telphone"/>
                    </Form.Item>
                    <Form.Item name="email" className={myStyles.item} label="">
                        <Input placeholder="youremail@gmail.com"/>
                    </Form.Item>
                    <Form.Item name="password" className={myStyles.password} label="">
                        <Input.Password
                            placeholder="please enter the password"
                            iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                        />
                    </Form.Item>
                    
                </Form>
            </div>
            <div className={styles.foot}>
                <div className={styles.left} >
                </div>
                <div className={styles.right} onClick={next}>
                    <span>下一步</span>
                    <img src={arrow}/>
                </div>
            </div>
        </div>
    )
}

export default VaildPhone;