import { Component } from "react";
import "./Aside.scss";
import { prodCategories, navCategories } from "../../_DATA.js";
import PropTypes from "prop-types";

export default class Aside extends Component {
	constructor(props) {
		super(props);

		this.handleClick = props.handleClick
	}

	render() {
		return (
			<aside>
				<h2>LOGO</h2>
				<nav>
					<ul>
						{prodCategories.map((productTitle) => {
							return (
								<li key={crypto.randomUUID()} onClick={this.handleClick}>
									{productTitle}
								</li>
							);
						})}
					</ul>
					<ul>
						{navCategories.map((navItem) => {
							return (
								<li key={crypto.randomUUID()}>
									<a href={navItem.href}>{navItem.title}</a>
								</li>
							);
						})}
					</ul>
				</nav>
			</aside>
		);
	}
}

Aside.propTypes = {
	handleClick: PropTypes.func
}
