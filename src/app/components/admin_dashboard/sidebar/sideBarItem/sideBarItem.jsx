"use client"
import Link from 'next/link'
import classes from './sideBarItem.module.css'
import { usePathname } from 'next/navigation'

const SideBarItem = ({item}) => {
    const pathname = usePathname();
  return (
    <Link href={item.path} className={`${classes.container} ${pathname === item.path && classes.active}`}>
        <div>
            {item.icon}
        </div>
        <div>
            {item.title}
        </div>
    </Link>
  )
}

export default SideBarItem