import  React,{useState} from "react";
import styles from "./index.module.less"
import {Button} from "antd"
import {PlusOutlined} from  "@ant-design/icons"
import add from "@/assets/images/add.png"
import EmpList from "./List";
import {Link,Routes,Route} from "react-router-dom"
import Activity from "./Activity/index"
const Employees = ()=>{
  const [menu,setMenu] = useState("list");
  const menuData = [
    {key:"list",content:"List"},
    {key:"activity",content:"Activity"}
  ]
  const menuChange = (key:string)=>{
    setMenu(key);
  }
  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <div className={styles.title}>Employees(28)</div>
        <div className={styles.category}>
          {
              menuData.map((obj)=>{
                return (
                  <div key={obj.key} className={`${menu===obj.key?styles.active:styles.noactive}`} onClick={()=>menuChange(obj.key)}>
                <Link to={obj.key}>{obj.content}</Link>
              </div>
                )
              })
            }          
        </div>
        <div className={styles.btn}>
          <div className={styles.right}>
            <img src={add}/>
          </div>
          <Button
            className={styles.button} 
            type='primary' 
            icon={<PlusOutlined />}
        >Add Event</Button>
        </div>
      </div>
      <Routes>
        <Route path="/list" Component={()=><EmpList/>}></Route>
        <Route path="/activity" Component={()=><Activity/>}></Route>
      </Routes>
    </div>
  )
}

export default Employees;