import  React,{useState} from "react";
import styles from "./index.module.less"
import {Button} from "antd"
import {PlusOutlined} from  "@ant-design/icons"
import add from "@/assets/images/add.png"
import EmployList from "./List";
import VCalendar from "./Calendar";
import {Link,Routes,Route} from "react-router-dom"
// import Activity from "./Activity/index"
const Vacations = ()=>{
  const [menuState,setMenuState] = useState("list");
  const menu = [
    {
      key:"list",
      content:"Employees vacations"
    },
    {
      key:"calendar",
      content:"Calendar"
    }
  ]
  const menuChange = (key:string)=>{
    setMenuState(key)
   }
  return (
    <div className={styles.box}>
      <div className={styles.topBox}>
        <div className={styles.title}>Vacations</div>
        <div className={styles.category}>
          {
            menu.map((obj)=>{
              return (
                <div key={obj.key} className={`${menuState===obj.key?styles.active:styles.noactive}`} onClick={()=>menuChange(obj.key)}>
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
        >Add Request</Button>
        </div>
      </div>
      <Routes>
        <Route path="/list" Component={()=><EmployList/>}></Route>
        <Route path="/calendar" Component={()=><VCalendar/>}></Route>
      </Routes>
    </div>
  )
}

export default Vacations;