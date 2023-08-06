import { Component } from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import Aside from "../aside/Aside.jsx";

export default class Header extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<header>
				<h3>{this.props.text}</h3>
				<div>
					<MenuIcon onClick={this.props.handleAside} />
					<ShoppingCartIcon />
					<SearchIcon />
				</div>
				{this.props.asideIsOpen ? <Aside handleClick={this.props.handleClick} /> : null}
			</header>
		);
	}
}

Header.propTypes = {
	text: PropTypes.string,
	handleClick: PropTypes.func,
	handleAside: PropTypes.func,
	asideIsOpen: PropTypes.bool,
};
