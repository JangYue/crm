import React,{useState} from "react"
import {Menu,Modal} from "antd"
import type { MenuProps} from 'antd';
import styles from "./index.module.less"
import {DashBoardIcon,ProjectsSvgIcon,CalendarIcon,VactionsIcon,EmployeesIcon,MessengerIcon,InfoPortalIcon}  from "@/icon/index"
import logo from "@/assets/images/logo.png"
import logout from "@/assets/images/logout.png"
import support from "@/assets/images/Support.png"
import { useNavigate } from "react-router-dom";
import Support from "../Support";
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  theme?: 'light' | 'dark',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    theme,
  } as MenuItem;
}


export default function SiderBar(){
  const navigate = useNavigate();
  const items:MenuItem[] = [
    getItem("Dashboard","dashboard",<DashBoardIcon/>),
    getItem("Projects","projects",<ProjectsSvgIcon/>),
    getItem("Calendar","calendar",<CalendarIcon/>),
    getItem("Vacations","vacations",<VactionsIcon/>),
    getItem("Employees","employees",<EmployeesIcon/>),
    getItem("Messenger","messenger",<MessengerIcon/>),
    getItem("Info Portal","infoPortal",<InfoPortalIcon/>)
  ]

  const menuClick = (e:any)=>{
    if(e.key === "projects"){
      navigate(`/home/${e.key}/list`)
    }else if(e.key === "employees"){
      navigate(`/home/${e.key}/list`)
    }else if(e.key === 'vacations'){
      navigate(`/home/${e.key}/list`)
    }else if(e.key === "infoPortal"){
      navigate(`/home/${e.key}/list`)
    }
    else{
      navigate(`/home/${e.key}`);
    }
    
  }
  const [modal1Open, setModal1Open] = useState(false);
  const [modal2Open, setModal2Open] = useState(false);
  return (
    <div className={styles.boxes}>
      <div className={styles.logo}>
        <img src={logo}/>
      </div>
      <div className={styles.box}>
        <Menu 
          items={items}
          onClick={(e:any)=>menuClick(e)}
        > 
        </Menu>
      </div>
      <div className = {styles.support}>
          <img src={support} onClick={() => setModal1Open(true)}/>
          <Modal
            title="Need some help"
            style={{ top: 64,width:584}}
            okText="Send Request"
            open={modal1Open}
            width={584}
            onOk={() => setModal1Open(false)}
            onCancel={() => setModal1Open(false)}
            maskStyle={{background:' rgba(33, 85, 163, 0.16)'}}
          >
            <Support/>
         </Modal>
        </div>
      <div className={styles.logout}>
          <div><img src={logout}/></div>
          <div className={styles.out}>Logout</div>
       </div>
    </div>
   
  )
} 