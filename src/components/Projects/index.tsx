import React from "react"
import styles from "./index.module.less"
import {Button } from 'antd';
import {PlusOutlined} from  "@ant-design/icons"
import List from "./List/index";
import Tasks from "./Tasks";
const Projects = ()=>{
  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <div className={styles.title}>Projects</div>
        <Button
            className={styles.button} 
            type='primary' 
            icon={<PlusOutlined />}
        >Add Event</Button>
      </div>
      <div className={styles.cont}>
        <List/>
        <div  className={styles.task}>
          <Tasks/>
        </div>
      </div>
    </div>
  )
}

export default Projects;