import React from 'react'
import classes from "./style/CardWorks.module.css"

export const CardWorks = () => {
  return (
	  <div className={classes.wrapperCard}>
		  <div className={classes.wrapperCardImg}>
			<img src="https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=N4XPPxJBpolBdEXET-euW~irtYzVg8pMeAzFJ7t5BBPzzsVE0XjesI8u7kxF7XgIx5zqOVrdrSSdLfxNJolsStjyNlCic8GDsyUcjzsfqwYYb54svlZuLWOB3e6SfhCgIm3n61tyibU4W4TZJtYZO5IkkoIZoQ~Ueq8uRDFZPmbdTANaEt3IhrfFQlzCvyy2aSF9VljmGCDufCoheKGNY2GazznWHz7tvlxQnH9ulaIdFz3itmkFd9MMFfvUfDAK2IuBzl9Un~wF01mX9yUvYZo37VQVoyhk98eSps9~ohvIv3f0Sage3ecRS1Vcq-brPDg2woQymZmiah4olzoFDA__" alt="" /></div>
		  <div className={classes.worksDescription}>
			  <div className={classes.worksHeader}>Making a design system from scratch</div>
			  <div className={classes.worksDate}><span className={classes.worksYear}>2020</span><span className={classes.worksLabel}>Design, Pattern</span></div>
			  <div className={classes.worksText}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
				  Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</div>
		  </div>
	  </div>
  )
}

