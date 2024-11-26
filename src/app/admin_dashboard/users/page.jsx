import Search from '@/app/components/admin_dashboard/search/Search'
import classes from '../../components/admin_dashboard/users/users.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/components/admin_dashboard/pagination/Pagination'

const usersPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search text = "users"/>
        <Link href="/admin_dashboard/users/add">
          <button className={classes.addButton}>Add new</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Created At</td>
          <td>Role</td>
          <td>Status</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.user}>
                <Image 
                src="/noUserImage.png" 
                alt="no user" 
                width={40} 
                height={40} 
                className={classes.userImage}/>
                Neelesh
              </div>
            </td>
            <td>
              neelesh@gmail.com
            </td>
            <td>12.11.2024</td>
            <td>Admin</td>
            <td>active</td>
            <td>
              <div className={classes.buttons}>
              <Link href="/admin_dashboard/users/id">
                <button className={`${classes.button} ${classes.view}`}>View</button>
                <button className={`${classes.button} ${classes.delete}`}>Delete</button>

              </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default usersPage