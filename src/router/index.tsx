import {RouteObject, useRoutes} from "react-router-dom"
import Login from "@/pages/Login/index"
import Home from "@/pages/Home/index"
import Dashboard from "@/components/DashBoard"
import Projects from "@/components/Projects"
import Calendar from "@/components/Calendar"
import Employees from "@/components/Employees"
import Messenger from "@/components/Messenger"
import InfoPortal from "@/components/InfoPortal"
import Board from "@/components/Projects/Tasks/Board/index"
import List from "@/components/Projects/Tasks/List"
import EmpList from "@/components/Employees/List"
import TimeLine from "@/components/Projects/Tasks/TimeLine"
import Activity from "@/components/Employees/Activity"
import Vacations from "@/components/Vacations"
import EmployList from "@/components/Vacations/List/index"
import VCalendar from "@/components/Vacations/Calendar"
import InfoList from "@/components/InfoPortal/Content/InfoList"
import Team from "@/components/InfoPortal/Content/Team"
import InfoVacations from "@/components/InfoPortal/Content/InfoVacations"
import SignUp from "@/pages/SignUp/index"
import VaildPhone from "@/components/SignUpProgress/VaildPhone"
import TellYourself from "@/components/SignUpProgress/TellYourself"
import TellCompany from "@/components/SignUpProgress/TellCompany"
import InviteTeam from "@/components/SignUpProgress/InviteTeam"
import SignUpSucess from "@/components/SignUpSucess"
export const routes: RouteObject[] = [
  {
    path:'/',
    element:<Login/>,
  },
  {
    path:"/signup/*",
    element:<SignUp/>,
    children:[
      {
        path:"vaildPhone",
        element:<VaildPhone/>
      },
      {
        path:"tellYourself",
        element:<TellYourself/>
      },
      {
        path:"tellCompany",
        element:<TellCompany/>
      },
      {
        path:"inviteTeam",
        element:<InviteTeam/>
      },
      {
        path:"signUpSucess",
        element:<SignUpSucess/>
      }
    ]
  },
  {
    path:'/home',
    element:<Home/>,
    children: [
      {
        path:"dashboard",
        element:<Dashboard/>
      },
      {
        path: 'projects/*',
        element: <Projects />,
        children:[
          {
            path:"board",
            element:<Board/>
          },
          {
            path:"list",
            element:<List/>
          },
          {
            path:"timeline",
            element:<TimeLine/>
          }
        ]
      },
      {
        path:"calendar",
        element:<Calendar/>
      },
      {
        path:"employees/*",
        element:<Employees/>,
        children:[
          {
            path:"list",
            element:<EmpList/>

          },
          {
            path:"activity",
            element:<Activity/>
          }
        ]
      },
      {
        path:"vacations/*",
        element:<Vacations/>,
        children:[
          {
            path:"list",
            element:<EmployList/>
          },
          {
            path:"calendar",
            element:<VCalendar/>
          }
        ]
      },
      {
        path:"messenger",
        element:<Messenger/>
      },
      {
        path:"infoPortal/*",
        element:<InfoPortal/>,
        children:[
          {
            path:"list",
            element:<InfoList/>
          },
          {
            path:"team",
            element:<Team/>
          },
          {
            path:"infoVacations",
            element:<InfoVacations/>
          }
        ]
      }
    ]
  }
]

const Routes = ()=>{
  const route = useRoutes(routes);
  return route;
}

export default Routes;