import React,{useState,useRef} from "react"
import styles from "./index.module.less"
import add from "@/assets/images/add.png"
import {useNavigate,Link} from "react-router-dom"
import {
  UpOutlined,
  DownOutlined
} from '@ant-design/icons';
const Menu = ()=>{
  const [collapsed, setCollapsed] = useState(false);
  const [state,setState] = useState("list");
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const menu = [
    {
      key:"list",
      content:"List"
    },
    {
      key:"team",
      content:"Team"
    },
    {
      key:"infoVacations",
      content:"InfoVacations"
    }
  ]
  const menuChange = (key:string)=>{
   setState(key)
  }
  return (
   
    <div className={styles.box}>
      <div   className={styles.menu}>
        {
          menu.map((obj)=>{
            return (
              <div key={obj.key} className={`${state===obj.key?styles.active:''}`} onClick={()=>menuChange(obj.key)}>
                <Link to={obj.key}>{obj.content}</Link>
              </div>
            )
          })
        }
      </div>
      <div className={styles.setting}>
        <div className={styles.add}>
          <img src={add}/>
        </div>
        <div className={styles.down}>
          <div className={styles.title} onClick={toggleCollapsed}>
            <span className={styles.name}>Current Projects</span>
            <div className={styles.icon}>
              {!collapsed ? <DownOutlined /> : <UpOutlined />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu;