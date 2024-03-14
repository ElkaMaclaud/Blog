import React from 'react'
import classes from "./style/Works.module.css"
import { CardWorks } from '../../UI_Components'

const Works = () => {
  return (
	  <div className={classes.works}>
		  <div className={classes.worksHeaderNew}>Recent posts</div>
		  <div className={classes.worksWrapper}><CardWorks /><CardWorks /><CardWorks /></div>
	  </div>
  )
}

export default Works
