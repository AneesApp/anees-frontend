import React from "react";
import contact from "../../images/children/contact.webp";
import { NavItems } from "./index.js";

export default function Footer() {
	return (
		<footer>
			<ContactFooter />
			<LinksFooter />
		</footer>
	);
}
function ContactFooter() {
	return (
		<div id="contact">
			<img src={contact} />
			<div className="contact-form-container">
				<h1>تواصل معنا</h1>
				<form>
					<div className="input-container">
						<label htmlFor="name">الاسم</label>
						<input id="name" name="name" type="text" />
					</div>
					<div className="input-container">
						<label htmlFor="email">البريد الإلكتروني</label>
						<input id="email" name="email" type="email" />
					</div>
					<div className="input-container">
						<label htmlFor="message">الرسالة</label>
						<textarea id="message" rows="6" />
					</div>
					<button className="btn-submit btn-pink">إرسال</button>
				</form>
			</div>
		</div>
	);
}

function LinksFooter() {
	return (
		<div className="links-footer">
			<NavItems />
			<p>جميع الحقوق محفوظة لموقع أنيس © 2023</p>
		</div>
	);
}
