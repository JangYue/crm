import React from "react"
import styles  from "../index.module.less"
import arrow from "@/assets/images/arrow.png"
import myStyles from "./index.module.less"
import {useNavigate} from "react-router-dom"
import type { RadioChangeEvent } from 'antd';
import mobxStore from "@/store"
import {Form,Input,Select,Radio} from "antd"
const TellCompany= ()=>{
    const navigate  = useNavigate();
    const changeProgress = mobxStore.changeSignupProgress;
    const [form] = Form.useForm<{ name: string; age: number }>();
    const next = ()=>{
        navigate("/signup/inviteTeam");
        changeProgress(3);
    }
    const preview = ()=>{
        navigate("/signup/tellYourself");
        changeProgress(1)
    }
    const onChange = (e: RadioChangeEvent) => {
        console.log(`radio checked:${e.target.value}`);
      };
    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <span className={styles.dep}>步骤3/4</span>
                <p className={styles.vaild}>说说你的公司</p>
            </div>
            <div>
                <Form form={form} layout="vertical" autoComplete="off" className={myStyles.form}>
                    <Form.Item name="companyName" label="Your Companys Name">
                        <Input placeholder="Companys Name"/>
                    </Form.Item>
                    <Form.Item name="direction" label="Bussiness Direction">
                    <Select
                        defaultValue="IT and programing"
                        style={{ width: 403 }}
                        // onChange={handleChange}
                        options={[
                            { value: 'IT and programming', label: 'it' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                    </Form.Item>
                    <Form.Item name="peopleNumber" label="How many people in your team?" className={myStyles.choose}>
                        <Radio.Group  onChange={onChange} defaultValue="0" style={{ marginTop: 16,marginRight:16 }} className={myStyles.box}>
                            <div>
                                <Radio.Button value="0">Only me</Radio.Button>
                                <Radio.Button value="1">2-5</Radio.Button>
                                <Radio.Button value="2">6-10</Radio.Button>
                                <Radio.Button value="3">11-20</Radio.Button>
                            </div>
                            <div>
                                <Radio.Button value="4">21-40</Radio.Button>
                                <Radio.Button value="5">41-50</Radio.Button>
                                <Radio.Button value="6">51-100</Radio.Button>
                                <Radio.Button value="7">101-500</Radio.Button>
                            </div>
                        </Radio.Group>
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
export default TellCompany;