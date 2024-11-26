import Card from "../components/admin_dashboard/card/Card"
import classes from '../components/admin_dashboard/admin_dashboard.module.css'
import RightColumn from "../components/admin_dashboard/rightColumn/RightColumn"
import { MdSupervisedUserCircle,MdCurrencyExchange,MdShoppingBag } from "react-icons/md"
import Transactions from "../components/admin_dashboard/Transactions/Transactions"
import Chart from "../components/admin_dashboard/chart/Chart"
const adminDashboard = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.main}>
        <div className={classes.cards}>
          <Card icon={1} title="Transactions" content="100" delta="15" />
          <Card icon={2} title="Products" content="100" delta="15" />
          <Card icon={3} title="Users" content="100" delta="15" />
        </div>
        <Transactions/>
        <Chart/>
      </div>
      <div className={classes.rightColumn}>
        <RightColumn/>
      </div>
    </div>
  )
}

export default adminDashboard