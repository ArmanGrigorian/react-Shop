import { Component } from "react";
import "./Footer.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { aboutCategories, paymentInfo, storeContacts } from "../../_DATA.js";

export default class Footer extends Component {
	render() {
		return (
			<footer id="footer">
				<div className="footerTop">
					<form action="#" method="POST" className="contactForm" id="contactForm">
						<fieldset>
							<legend>Contact</legend>
							<p>Questions? Go ahead.</p>
							<input type="text" name="userName" placeholder="Name" />
							<input type="text" name="userEmail" placeholder="Email" />
							<input type="text" name="messageSubject" placeholder="Subject" />
							<input type="text" name="messageText" placeholder="Message" />
							<input type="submit" value="Send" />
						</fieldset>
					</form>

					<div>
						<h3>About</h3>
						<ul>
							{aboutCategories.map((info) => {
								return <li key={crypto.randomUUID()}>{info}</li>;
							})}
						</ul>
					</div>

					<div>
						<h3>Store</h3>
						<address>
							<ul>
								{storeContacts.map((contact) => {
									return <li key={crypto.randomUUID()}>{contact}</li>;
								})}
							</ul>
						</address>
						<h3>We accept</h3>
						<ul>
							{paymentInfo.map((method) => {
								return <li key={crypto.randomUUID()}>{method}</li>;
							})}
						</ul>
						<div>
							<a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
								<FacebookIcon />
							</a>
							<a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
								<InstagramIcon />
							</a>
							<a href="https://www.pinterest.com/" target="_blank" rel="noreferrer">
								<PinterestIcon />
							</a>
							<a href="https://twitter.com/" target="_blank" rel="noreferrer">
								<TwitterIcon />
							</a>
							<a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
								<LinkedInIcon />
							</a>
						</div>
					</div>
				</div>

				<div className="footerBottom">
					<p>
						<strong>Powered by me</strong>
					</p>
				</div>
			</footer>
		);
	}
}
