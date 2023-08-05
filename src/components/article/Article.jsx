import { Component } from "react";
import "./Article.scss";
import PropTypes from "prop-types";

export default class Article extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<article>
				<p>{this.props.products.length} items</p>
				{this.props.products.map((product) => {
					return (
						<figure key={crypto.randomUUID()}>
							<img src={product.imgSrc} alt={product.imgAlt} />
							<figcaption>{product.title}</figcaption>
							<strong>{`$ ${product.price}`}</strong>
						</figure>
					);
				})}
			</article>
		);
	}
}

Article.propTypes = {
	products: PropTypes.arrayOf(PropTypes.object),
};
