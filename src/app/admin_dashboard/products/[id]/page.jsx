import Image from 'next/image'
import classes from '../../../components/admin_dashboard/products/SingleProductPage.module.css'

const SingleProductPage = () => {
    return (
        <div className={classes.container}>
            <div className={classes.info}>
                <div className={classes.img}>
                    <Image src="/noProduct.png" alt="no product" fill />
                </div>
                <p className={classes.name}>
                    Neelesh
                </p>
            </div>
            <form className={classes.form}>
                <label>Title</label>
                <input type='text' name='title' placeholder='name' />
                <label>Price</label>
                <input type='number' name='price' placeholder='500' />
                <label>Stock</label>
                <input type='number' name='stock' placeholder='33' />
                <label>Color</label>
                <input type='text' name='color' placeholder='blue' />
                <label>Size</label>
                <input type='text' name='size' placeholder='large' />
                <label>Category</label>
                <select name="cat" id="cat">
                    <option value="general">Select Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Laptop">Laptop</option>
                </select> 
                <label>Description</label>
                <textarea name='desc' rows={10} cols={10} placeholder='description' ></textarea>
                <button type='submit' >Update user</button>
            </form>
        </div>
    )
}

export default SingleProductPage