import React from 'react'
import Sidebar from '../components/admin_dashboard/sidebar/Sidebar'
import Navbar from '../components/admin_dashboard/navbar/Navbar'
import classes from '../components/admin_dashboard/admin_dashboard.module.css'

const layout = ({children}) => {
  return (
    <div className={classes.container}>
        <div className={classes.menu}>
            <Sidebar/>
        </div>
        <div className={classes.Content}>
            <Navbar/>
            {children}
        </div>

    </div>
  )
}

export default layout