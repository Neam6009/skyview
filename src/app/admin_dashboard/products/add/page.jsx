import classes from "../../../components/admin_dashboard/products/add/addProduct.module.css"

const AddProductPage = () => {
  return (
    <div className={classes.container}>
      <form action="" className={classes.form} >
        <input type="text" placeholder="title" name="title" required/>
        <select name="cat" id="cat">
        <option value="general">Select Category</option>
          <option value="Electronics">Electronics</option>
          <option value="Smartphone">Smartphone</option>
          <option value="Laptop">Laptop</option>
        </select> 
        <input type="number" placeholder="price" name="price"/>
        <input type="number" placeholder="stock" name="stock"/>
        <input type="text" placeholder="color" name="color"/>
        <input type="text" placeholder="size" name="size"/>
        <textarea name="desc" id="desc" cols={30} rows={10} placeholder="product description"/>
        <button type="submit">Add product</button>

      </form>
    </div>
  )
}

export default AddProductPage