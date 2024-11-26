import Image from 'next/image'
import classes from '../../../components/admin_dashboard/users/SingleUserPage.module.css'

const SingleUserPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.img}>
                    <Image src="/noUserImage.png" alt="no user" fill />
                </div>
                <p className={classes.name}>
                    Neelesh
                </p>
            </div>
            <form className={classes.form}>
                <label>Username</label>
                <input type='text' name='username' placeholder='name' />
                <label>Email</label>
                <input type='email' name='email' placeholder='example@gmail.com' />
                <label>Password</label>
                <input type='password' name='password' placeholder='testPass123' />
                <label>Phone</label>
                <input type='text' name='phone' placeholder='+91 21312312' />
                <label>Address</label>
                <input type='text' name='username' placeholder='India' />
                <label>Is Admin?</label>
                <select name='isAdmin' id="isAdmin">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <select name='isActive' id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>
                <button type='submit' >Update user</button>
            </form>
        </div>
    )
}

export default SingleUserPage