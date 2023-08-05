import { Component } from "react";
import Header from "./components/header/Header.jsx";
import Section from "./components/section/Section.jsx";
import Article from "./components/article/Article.jsx";
import SubscribeForm from "./components/subscribeForm/SubscribeForm.jsx";
import Footer from "./components/footer/Footer.jsx";
import Aside from "./components/aside/Aside.jsx";
import { jeansList } from "./_DATA.js";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			products: null,
			title: "Please click on ' Jeans '",
		};

		this.handleClick = function (e) {
			switch (e.target.textContent) {
				case "Jeans":
					this.setState({ products: jeansList, title: "Jeans" });
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
					<Header text={this.state.title} />
					<Section />
					{this.state.products && <Article products={this.state.products} />}
					<SubscribeForm />
					<Footer />
				</div>
			</>
		);
	}
}
