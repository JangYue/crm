import React from "react"
import styles from "./index.modules.less"
import avatar from "@/assets/images/avatar.png"
import more from "@/assets/images/more.png"
import { Pagination } from 'antd';
const EmpList  = () => {
  return (
    <div className={styles.box}>
      {
        [1,2,3,4,5,6,7].map((val,key)=>{
          return (
            <div key={key} className={styles.list}>
              <div className={styles.avatar}>
                <img src={avatar}/>
              </div>
              <div className={styles.person}>
                <div className={styles.title}>EvanYates</div>
                <div className={styles.cont}>evanyates@gmail.com</div>
              </div>
              <div className={styles.gender}>
                <div className={styles.gray}>Gender</div>
                <div className={styles.black}>Male</div>
              </div>
              <div className={styles.brithday}>
                <div className={styles.gray}>Birthday</div>
                <div className={styles.black}>Apr 12, 1995</div>
              </div>
              <div className={styles.age}>
                <div className={styles.gray}>Full age</div>
                <div className={styles.black}>25</div>
              </div>
              <div className={styles.position}>
                <div className={styles.gray}>Position</div>
                <div className={styles.detail}>
                  <span className={styles.black}>UI/UX Designer</span>
                  <div>Middle</div>
                </div>
              </div>
              <div className={styles.icon}>
                <img src={more}/>
              </div>
          </div>
          )
        })
      }
      <Pagination
        total={28}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        defaultPageSize={8}
        defaultCurrent={1}
    />
    </div>
  )
}

export default EmpList;