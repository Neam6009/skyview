import Image from 'next/image'
import classes from './rightcolumn.module.css'
import { MdPlayCircleFilled } from 'react-icons/md'

const RightColumn = () => {
  return (
    <div className={classes.container}>
      <div className={classes.item}>
        <div className={classes.bgContainer}>
          <Image src="/rocket.png" alt="rocket" fill className={classes.bg}/>
        </div>
        <div className={classes.texts}>
          <span className={classes.notification}>
          🔥Get it now!
          </span>
          <h3 className={classes.title}>New updates available on user montitoring, learn at getmont.com to get ahead</h3>
          <span className={classes.subtitle}>Takes 15min to learn</span>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium dolores minus, sapiente ullam molestiae rerum asperiores quibusdam nihil repellendus sequi sed expedita nobis saepe voluptatum, reiciendis quas deserunt nemo.
          </p>
          <button className={classes.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>
      <div className={classes.item}>
        <div className={classes.bgContainer}>
          <Image src="/rocket.png" alt="rocket" fill className={classes.bg}/>
        </div>
        <div className={classes.texts}>
          <span className={classes.notification}>
          Version 5 to be released soon!🚀
          </span>
          <h3 className={classes.title}>New updates available on user montitoring, learn at getmont.com to get ahead</h3>
          <span className={classes.subtitle}>Takes 15min to learn</span>
          <p className={classes.description}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis praesentium dolores minus, sapiente ullam molestiae rerum asperiores quibusdam nihil repellendus sequi sed expedita nobis saepe voluptatum, reiciendis quas deserunt nemo.
          </p>
          <button className={classes.button}>
            <MdPlayCircleFilled/>
            Watch
          </button>
        </div>
      </div>


    </div>
  )
}

export default RightColumn