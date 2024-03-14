import React from 'react'
import classes from "./style/Posts.module.css"
import { CardPost } from '../../UI_Components'

const Posts = () => {
  return (
	  <div className={classes.posts}>
		  <div className={classes.postsHeader}>
			  <div className={classes.postsHeaderNew}>Recent posts</div>
			  <div className={classes.postsHeaderAll}>View all</div>
		  </div>
		  <div className={classes.postsWrapper}><CardPost /><CardPost /></div>
	  </div>
  )
}

export default Posts
