import React, { CSSProperties, FC } from 'react'
import classes from "./style/Links.module.css"
import { Link } from 'react-router-dom'
interface ILinksProps {
	list: Array<string>;
	style?: CSSProperties;
}
const Links: FC<ILinksProps> = ({ list, style }) => {
	return (
		<div className={classes.wrapperLink} style={style}>
			<Link to="/Works">Works</Link>
			<Link to="/Blog">Blog</Link>
			<Link to="/Contact">Contact</Link>
		</div>
	)
}

export default Links
