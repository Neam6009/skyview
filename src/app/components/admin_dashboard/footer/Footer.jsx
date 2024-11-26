import classes from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.logo}>
        Neam
        </div>
        <div className={classes.text}>© All rights reserved</div>
    </div>
  )
}

export default Footer