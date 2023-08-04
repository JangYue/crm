import React,{useState} from "react"
import {Routes,Route,useNavigate,Link} from "react-router-dom"
import styles from "./index.module.less"
import list from "@/assets/images/list.png"
import board from "@/assets/images/board.png"
import timeline from "@/assets/images/timeline.png"
import add from "@/assets/images/add.png"
import medium from "@/assets/images/medium.png"
import avatar from "@/assets/images/avatar.png"
import Board from "./Board/index"
import List from "./List/index"
import TimeLine from  "./TimeLine"
import noBoard from "@/assets/images/noBoard.png"
import TimeLineActive from "@/assets/images/timelineActive.png"
import ListActive from "@/assets/images/listActive.png"

const menuData = [
  {
    key:"list",
    icon:list,
    active:ListActive
  },
  {
    key:"board",
    icon:noBoard,
    active:board
  },
  {
    key:"timeline",
    icon:timeline,
    active:TimeLineActive
  }
]

const subRoute = [
  {
    key:"/list",
    element:<List/>
  },
  {
    key:"/board",
    element:<Board/>
  },
  {
    key:"/timeline",
    element:<TimeLine/>
  }
]


const Tasks = ()=>{
  const [menu,setMenu] = useState("list");
  const menuChange = (icon:string)=>{
    setMenu(icon);
  }
  
  return (
    <div>
      <div className={styles.topBox}>
        <span className={styles.title}>Tasks</span>
        <div className={styles.menu}>
          {
            menuData.map((obj)=>{
              return(
                <Link to={obj.key} onClick={()=>menuChange(obj.key)}>
                   <div><img src={menu === obj.key?obj.active:obj.icon} alt=""/></div>
                </Link>
              )
            })
          }
        </div>
        <div className={styles.right}>
          <img src={add}/>
        </div>
      </div>
      <div className={styles.status}>
        <div className={styles.bar}>
          <div>To Do</div>
          <div>In Progress</div>
          <div>In Review</div>
          <div>Done</div>
        </div>
        <div className={styles.active}>
          Active Tasks
        </div>
      </div>
      <Routes>
        {
          subRoute.map((item,key)=>{
              return (
                <Route key={key} path={item.key} Component={() => item.element} ></Route>
              )
           
          })
        }
      </Routes>
      <div className={styles.backlog}>
        <div className={styles.title}>Backlog</div>
        <div className={styles.cont}>
          {
            [1,2,3].map((val,key)=>{
              return (
                <div className={styles.card}>
                  <span className={styles.number}>TS001245</span>
                  <span className={styles.zhiye}>UX sketches</span>
                  <div className={styles.like}>
                    <div className={styles.front}>
                      <span className={styles.btn}>4d</span>
                      <img src={medium}/>
                    </div>
                    <img className={styles.avatar} src={avatar}/>
                  </div>
              </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
export  default Tasks;