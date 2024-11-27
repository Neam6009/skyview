import Image from "next/image"
import classes from "./Transactions.module.css"

const transactionsContent = [{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "pending",
  date:"21.11.2024",
  amount:"400"
},
{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "done",
  date:"21.11.2024",
  amount:"400"
},
{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "cancelled",
  date:"21.11.2024",
  amount:"400"
},
{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "pending",
  date:"21.11.2024",
  amount:"400"
},
{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "done",
  date:"21.11.2024",
  amount:"400"
},{
  src : "/noUserImage.png",
  name: "Neelesh",
  status: "cancelled",
  date:"21.11.2024",
  amount:"400"
}]


const Transactions = () => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>Latest Transactions</h2>
      <table className={classes.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          {transactionsContent.map(t  => (
            <tr key={t.name}>
            <td>
            <div className={classes.user}>
              <Image 
              src={t.src}
               alt="nouser" 
               width={40} 
               height={40} 
               className={classes.userImage} />
            <div>
              {t.name}
            </div>
            </div>
            </td>
            <td><span className={`${classes.status} ${classes[t.status]}`}>
              {t.status}
              </span></td>
            <td>{t.date}</td>
            <td>${t.amount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transactions