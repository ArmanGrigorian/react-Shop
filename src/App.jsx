import { Component } from "react";
import Header from "./components/header/Header.jsx";
import Section from "./components/section/Section.jsx";
import Article from "./components/article/Article.jsx";
import SubscribeForm from "./components/subscribeForm/SubscribeForm.jsx";
import Footer from "./components/footer/Footer.jsx";
import Aside from "./components/aside/Aside.jsx";
import {
	dressesList,
	gymwearList,
	jacketList,
	jeansList,
	shirtsList,
	shoesList,
} from "./_DATA/index.js";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: null,
			title: "Welcome",
			asideIsOpen: false,
		};

		this.handleAside = function () {
			this.state.asideIsOpen === true
				? this.setState({ asideIsOpen: false })
				: this.setState({ asideIsOpen: true });
		}.bind(this);

		this.handleClick = function (e) {
			switch (e.target.textContent) {
				case "Shirts":
					this.setState({ products: shirtsList, title: "Shirts" });
					break;
				case "Dresses":
					this.setState({ products: dressesList, title: "Dresses" });
					break;
				case "Jeans":
					this.setState({ products: jeansList, title: "Jeans" });
					break;
				case "Jackets":
					this.setState({ products: jacketList, title: "Jackets" });
					break;
				case "Gymwear":
					this.setState({ products: gymwearList, title: "Gymwear" });
					break;
				case "Shoes":
					this.setState({ products: shoesList, title: "Shoes" });
					break;
				default:
					break;
			}
		}.bind(this);
	}

	render() {
		return (
			<>
				<Aside handleClick={this.handleClick} />
				<div className="mainContainer">
					<Header
						text={this.state.title}
						handleClick={this.handleClick}
						handleAside={this.handleAside}
						asideIsOpen={this.state.asideIsOpen}
					/>
					<Section />
					{this.state.products && <Article products={this.state.products} />}
					<SubscribeForm />
					<Footer />
				</div>
			</>
		);
	}
}
