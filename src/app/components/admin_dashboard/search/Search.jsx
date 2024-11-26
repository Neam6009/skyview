import { MdSearch } from 'react-icons/md'
import classes from './search.module.css'

const Search = ({text}) => {
  return (
    <div className={classes.container}>
        <MdSearch/>
        <input type='text' placeholder={"search "+text+"..."} className={classes.input}/>
    </div>
  )
}

export default Search