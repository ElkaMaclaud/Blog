import React from 'react'
import classes from "./style/CardPost.module.css"

export const CardPost = () => {
	return (
		<div className={classes.wrapperCard}>
			<div className={classes.postHeader}>Making a design system from scratch</div>
			<div className={classes.postDate}><span>12 Feb 2020</span><span>{"|"}</span><span>Design, Pattern</span></div>
			<div className={classes.postText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
				Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
		</div>
	)
}


