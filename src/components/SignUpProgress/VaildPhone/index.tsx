import  React,{useState} from "react"
import styles from "../index.module.less"
import arrow from "@/assets/images/arrow.png"
import {useNavigate} from "react-router-dom"
import mobxStore from "@/store"
import myStyles from "./index.module.less"
import {Form,Input} from "antd"
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import hint from "@/assets/images/hint.png"
const VaildPhone = ()=>{
    const [form] = Form.useForm<{ name: string; age: number }>();
    const [tagState,setTagState] = useState(false)
    const navigate = useNavigate();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const changeProgress = mobxStore.changeSignupProgress;
    const next = ()=>{
        navigate('/signup/tellYourself')
        changeProgress(1);
    }
    const tagDisplay = ()=>{
        setTagState(true);
    }
    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <span className={styles.dep}>步骤1/4</span>
                <p className={styles.vaild}>验证您的手机</p>
            </div>
            <div>
                <Form form={form} layout="vertical" autoComplete="off" className={myStyles.form}>
                    <Form.Item name="tel" 
                               className={myStyles.item} 
                               rules={[{ required: true, message: 'Please input your phone number!' }]}           
                    >
                        <Input placeholder="please enter the telphone" onClick={tagDisplay}/>
                    </Form.Item>
                    <Form.Item className={tagState?myStyles.display:myStyles.hide}>
                        <div  className={myStyles.tishi}>
                            <img src={hint}/>
                           <span>SMS was sent to your number +1 345 673-56-67 It will be valid for 01:25</span> 
                        </div>
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