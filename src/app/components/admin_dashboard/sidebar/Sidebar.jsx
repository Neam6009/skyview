import classes from './sidebar.module.css'
import { MdDashboard } from "react-icons/md";   
import { MdSupervisedUserCircle } from "react-icons/md";
import { MdShoppingBag } from "react-icons/md";
import { MdAttachMoney } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { MdAnalytics } from "react-icons/md";
import { MdPeople } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { MdHelpCenter } from "react-icons/md";
import { MdLogout } from "react-icons/md";
import SideBarItem from './sideBarItem/sideBarItem';
import Image from 'next/image';

const sidebarConent = [
    {
        title: "Pages",
        list:[
            {
                title: "Admin Dashboard",
                path:"/admin_dashboard",
                icon: <MdDashboard/>
            },
            {
                title: "Users",
                path:"/admin_dashboard/users",
                icon:<MdSupervisedUserCircle/>
            },
            {
                title: "Products",
                path:"/admin_dashboard/products",
                icon:<MdShoppingBag/>
            },
            {
                title: "Transactions",
                path:"/admin_dashboard/transactions",
                icon:<MdAttachMoney/>
            },
        ]
    },
    {
        title: "Analytics",
        list: [
          {
            title: "Revenue",
            path: "/dashboard/revenue",
            icon: <MdWork />,
          },
          {
            title: "Reports",
            path: "/dashboard/reports",
            icon: <MdAnalytics />,
          },
          {
            title: "Teams",
            path: "/dashboard/teams",
            icon: <MdPeople />,
          },
        ],
      },
      {
        title: "User",
        list: [
          {
            title: "Settings",
            path: "/dashboard/settings",
            icon: <MdOutlineSettings />,
          },
          {
            title: "Help",
            path: "/dashboard/help",
            icon: <MdHelpCenter />,
          },
        ],
      },
]

const Sidebar = () => {
  return (
    <div className={classes.container}>
        <div className={classes.user}>
            <Image className={classes.userImage} src="/noUserImage.png" alt='user' width="50" height="50" />
            <div className={classes.userData}>
                <span className={classes.username}>Neelesh</span>
                <span className={classes.userTitle}>Admin</span>
            </div>
        </div>
        <ul className={classes.list}>
        {sidebarConent.map(c => (
            <li key={c.title}>
                <span className={classes.category}>{c.title}</span>
                {c.list.map(i => (<SideBarItem item={i} key={i.title}/>))}
            </li>
        ))}

        </ul>
    </div>
  )
}

export default Sidebar