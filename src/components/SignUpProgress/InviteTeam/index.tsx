import React, {useState}from "react"
import styles from "../index.module.less"
import arrow from "@/assets/images/arrow.png"
import { Form, Input, Select,Radio} from 'antd';
import myStyles from "./index.module.less"
import {useNavigate} from "react-router-dom"
import mobxStore from "@/store";
const InviteTeam = ()=>{
    const [form] = Form.useForm<{ name: string; age: number }>();
    const changProgress = mobxStore.changeSignupProgress;
    const [value, setValue] = useState(1);
    const navigate = useNavigate();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
    const preview = ()=>{
        navigate("/signup/tellCompany")
        changProgress(2);
    }
    const next = ()=>{
        navigate("/signup/signUpSucess");
    }
    return (
        <div className={styles.box}>
        <div className={styles.top}>
            <span className={styles.dep}>步骤4/4</span>
            <p className={styles.vaild}>邀请团队成员</p>
        </div>
        <div>
        <Form form={form} layout="vertical" autoComplete="off" className={myStyles.form}>
                <Form.Item name="member" label="Members Email">
                   <Input placeholder="member email@gmail.com"/>
                </Form.Item>
                <Form.Item name="add" className={myStyles.add}>
                    + Add another Member
                </Form.Item>
        </Form>
        </div> 
        <div className={styles.foot}>
            <div className={styles.left} onClick={preview}>
                <img src={arrow}/>
                <span>Previous</span>
            </div>
            <div className={styles.right} onClick={next}>
                <span>下一步</span>
                <img src={arrow}/>
            </div>
        </div>
    </div>
    )
}
export default InviteTeam;