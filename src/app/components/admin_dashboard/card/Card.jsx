import classes from './card.module.css'
import { MdSupervisedUserCircle,MdCurrencyExchange,MdShoppingBag } from "react-icons/md"


const Card = ({icon,title,content,delta}) => {
  return (
    <div className={classes.container} >
        {
            icon==1 && <MdCurrencyExchange/>
        }
        {
            icon==2 && <MdShoppingBag/>
        }
        {
            icon==3 && <MdSupervisedUserCircle/>
        }
        <div className={classes.content}>
            <span className={classes.title}>{title}</span>
            <span className={classes.number}>{content}</span>
            <span className={classes.detail}>  
                <span className={classes.positive}>{delta}% </span>than last week
                </span>
        </div>
    </div>
  )
}

export default Card