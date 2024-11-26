import Search from '@/app/components/admin_dashboard/search/Search'
import classes from '../../components/admin_dashboard/products/products.module.css'
import Link from 'next/link'
import Image from 'next/image'
import Pagination from '@/app/components/admin_dashboard/pagination/Pagination'


const ProductsPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <Search text = "products"/>
        <Link href="/admin_dashboard/products/add">
          <button className={classes.addButton}>Add new</button>
        </Link>
      </div>
      <table className={classes.table}>
        <thead>
        <tr>
          <td>Title</td>
          <td>Description</td>
          <td>Price</td>
          <td>Created At</td>
          <td>Stock</td>
          <td>Action</td>
        </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={classes.product}>
                <Image 
                src="/noProduct.png" 
                alt="no product" 
                width={40} 
                height={40} 
                className={classes.productImage}/>
                Asus laptop
              </div>
            </td>
            <td>
              description
            </td>
            <td>$500</td>
            <td>12.11.2024</td>
            <td>33</td>
            <td>
              <div className={classes.buttons}>
              <Link href="/admin_dashboard/products/id">
                <button className={`${classes.button} ${classes.view}`}>View</button>
                <button className={`${classes.button} ${classes.delete}`}>Delete</button>

              </Link>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination/>
    </div>
  )
}

export default ProductsPage