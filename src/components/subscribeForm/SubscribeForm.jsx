import { Component } from "react";
import "./SubscribeForm.scss";

export default class SubscribeForm extends Component {
	render() {
		return (
			<form action="#" method="POST" className="subscribeForm" id="subscribeForm">
				<fieldset>
					<legend>Subscribe</legend>
					<p>To get special offers and VIP treatment:</p>
					<input type="text" name="userEmail" placeholder="Enter e-mail" />
					<input type="submit" value="Subscribe" />
				</fieldset>
			</form>
		);
	}
}
