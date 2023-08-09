import React from "react"
import styles from "./index.module.less"
import bg from "@/assets/images/supportBg.png"
import {Form,Select,Input} from "antd"

const { TextArea } = Input;

const Support = ()=>{
    const [form] = Form.useForm<{ name: string; age: number }>();
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        console.log('Change:', e.target.value);
    };
    return (
        <div className={styles.box}>
            <div className={styles.img}>
                <img src={bg}/>
            </div>
            <div className={styles.font}>
                <p>Describe your question and our specialists will answer you within 24 hours.</p>
            </div>
            <Form form={form} layout="vertical" autoComplete="off" className={styles.form}>
                    <Form.Item name="subject" label="Request Subject">
                        <Select
                            defaultValue="Technical difficulites"
                            style={{ width: '100%'}}
                            // onChange={handleChange}
                            options={[
                                { value: 'Technical difficulites', label: 'Technical difficulites' },
                                { value: 'disabled', label: 'Disabled', disabled: true },
                            ]}
                        />
                    </Form.Item>
                    <Form.Item name="textarea" label="Description">
                        <TextArea
                            // showCount
                            // maxLength={100}
                            className={styles.des}
                            style={{marginBottom: 24,width:'100%'}}
                            onChange={onChange}
                            placeholder="Add some description of the request"
                        />
                    </Form.Item>
                 </Form>
        </div>
    )
}

export default Support;