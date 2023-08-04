import React from "react"
import {Layout} from "antd"
import styles from "./index.module.less"
import Dashboard from "@/components/DashBoard/index";
import Projects from "../Projects";
import MyCalendar from "../Calendar";
import Vactions from "../Vacations";
import Employees from "../Employees";
import Messenger from "../Messenger";
import InfoPortal from "../InfoPortal";
import { Route, Routes } from "react-router-dom";

const ContentLayout = Layout.Content;

const Content = ()=>{
  const subroute = [
    {
      path:"/dashboard",
      element:<Dashboard/>
    },
    {
      path:"/projects/*",
      element:<Projects/>
    },
    {
      path:"/calendar",
      element:<MyCalendar/>
    },
    {
      path:"/vacations/*",
      element:<Vactions/>
    },
    {
      path:"/employees/*",
      element:<Employees/>
    },
    {
      path:"/messenger",
      element:<Messenger/>
    },
    {
      path:"/infoPortal/*",
      element:<InfoPortal/>
    }

  ];
  return (
    <ContentLayout className={styles.contentBox}>
      <div className={styles.name}>Welcome EvanYates</div>
      <Routes>
        {
          subroute.map((item,key) => {
            return(
              <Route key={key} path={item.path} Component={() => item.element} />
            )
          }) 
        }
      </Routes>
    </ContentLayout>
  )
}
export default Content;