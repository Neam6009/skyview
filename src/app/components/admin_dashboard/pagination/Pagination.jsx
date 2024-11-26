import classes from './pagination.module.css'

const Pagination = () => {
  return (
    <div className={classes.container}>
        <button className={classes.button}>Previous</button>
        <button className={classes.button} disabled>Next</button>
    </div>
  )
}

export default Pagination