import React,{useState} from "react"
import { Form, Input, Select,Radio} from 'antd';
import type { RadioChangeEvent } from 'antd';
import styles from "../index.module.less"
import arrow from "@/assets/images/arrow.png"
import {useNavigate} from "react-router-dom"
import mobxStore from "@/store"

import myStyles from "./index.module.less"

const TellYourself = ()=>{
    const navigate = useNavigate();
    const [form] = Form.useForm<{ name: string; age: number }>();
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const changeProgress = mobxStore.changeSignupProgress;
    const next = ()=>{
        navigate("/signup/tellCompany");
        changeProgress(2)
    }
    const preview = ()=>{
        navigate("/signup/vaildPhone")
        changeProgress(0);
    }
    return (
        <div className={styles.box}>
            <div className={styles.top}>
                <span className={styles.dep}>步骤2/4</span>
                <p className={styles.vaild}>说说你自己吧</p>
            </div>
            <div className={styles.content}>
            <Form form={form} layout="vertical" autoComplete="off" className={myStyles.form}>
                <Form.Item name="service" label="why will you use the service?">
                    <Select
                        defaultValue="work"
                        style={{ width: 403 }}
                        onChange={handleChange}
                        options={[
                            { value: 'work', label: 'Work' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </Form.Item>
                <Form.Item name="yourself" label="what describes you best?">
                    <Select
                        defaultValue="bussiness owner"
                        style={{ width: 403 }}
                        onChange={handleChange}
                        options={[
                            { value: 'bussiness owner', label: 'Bussiness Owner' },
                            { value: 'disabled', label: 'Disabled', disabled: true },
                        ]}
                    />
                </Form.Item>
                <Form.Item name="best" className={myStyles.yes}>
                    <label>what describes you best?</label>
                    <Radio.Group onChange={onChange} value={value}>
                        <Radio value={1}>yes</Radio>
                        <Radio value={2}>no</Radio>
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
export default TellYourself;