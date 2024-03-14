import React from 'react'
import classes from "./style/Resume.module.css"

const Resume = () => {
	return (
		<div className={classes.resume}>
			<div className={classes.description}>
				<div className={classes.descriptionHeader}>Hi, I am John,<br /> Creative Technologist </div>
				<div className={classes.descriptionText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
					Velit officia consequat duis enim velit mollit.
					Exercitation veniam consequat sunt nostrud amet.</div>
				<a href="" download className={classes.descriptionDownload}>Download Resume</a>
			</div>
			<div className={classes.resumeAvatar}>
				<img src="https://s3-alpha-sig.figma.com/img/c316/adc4/65a80990af3a0075303343f0d615c92a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VL0rnuUcAp2kkrLzNh7rcC43s93BCMO5tLqYp6wIYFJGUW3SLvWh3X4P6wfgYG9ADUBPEYRqevJNekq01Lj4RWuME0i9wyZUXsHEBqRNXHxbUaZAb5NgBwuBxYRfdZaWAkaVWwCVgvk2hpBhkhhkmXr7fmxTk16z0xOKaANQGp4eEafi5Nxpwr419NKlwWNBobzrvkPwAy3K8qeHSiMnPWydJ1we81OMfbO1-XNCtCSpMK5ad02MCccMCcv1MiJCB0QpfLuCKhFodU2pxriLmmGWYnsKY7AojaQ2yGtBIF18aAm2j58VtN5S25YKa9VrA4GUdfaRPZrXQBGcyTJNow__" alt="" />
			</div>
		</div>
	)
}

export default Resume
