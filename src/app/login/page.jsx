import classes from '../components/login/login.module.css'
const Login = () => {
  return (
    <div className={classes.container}>
      <form action='' className={classes.form}>
        <h1>Login</h1>
        <input type='text' placeholder='username'/>
        <input type="password" placeholder='password'/>  
        <button type='submit'>Login</button>
      </form>
      
    </div>
  )
}

export default Login