import { Component } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PropTypes from "prop-types";

export default class Header extends Component {
	constructor(props) {
		super(props)

	}

	render() {
		return (
			<header>
				<h3>{this.props.text}</h3>
				<div>
					<ShoppingCartIcon />
					<SearchIcon />
				</div>
			</header>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string
}
