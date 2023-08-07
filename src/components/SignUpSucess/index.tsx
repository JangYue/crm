import React from "react"
import bg from "@/assets/images/Illustration.png"
import arrow from "@/assets/images/arrow.png"
import styles from "./index.module.less"
import {useNavigate} from "react-router-dom"

const SignUpSucess = ()=>{
    const navigate = useNavigate();
    const next = ()=>{
        navigate("/home/dashboard")
    }
    return (
        <div className={styles.layout}>
            <div className={styles.box}>
                <div className={styles.bg}>
                    <img src={bg}/>
                </div>
                <div className={styles.title}>You are sucessfully registerd!</div>
                <div className={styles.btn} onClick={next}>
                    <div>Lets start</div>
                    <div className={styles.arrow}>
                        <img src={arrow}/>
                    </div>
                </div>
            </div>
        </div>
       
    )
}

export default SignUpSucess;