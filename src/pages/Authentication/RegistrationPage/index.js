import React, {useState} from "react";
import fullLogo from "../../../images/anees-images/full-logo.png";
import { ReactComponent as Wave } from "../images/wave.svg";
import { ReactComponent as ShowHidePassword } from "../images/show_hide_password.svg";
import { ReactComponent as FacebookIcon } from "../images/facebook-icon.svg";
import { ReactComponent as GoogleIcon } from "../images/google-icon.svg";
import { Link } from "react-router-dom";

import "../common-auth.css";

export default function Registration() {
	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	function togglePasswordVisibility() {
		setPasswordVisibility((visible) => !visible);
	}
	return (
		<div className="registration-page authentication-page">
			<main>
				<Wave />
				<h1>إنشاء حساب جديد</h1>
				<form>
					<div className="input-container">
						<label htmlFor="email">البريد الإلكتروني</label>
						<input id="email" name="email" type="email" required></input>
					</div>
					<div className="input-container">
						<label>الرقم السري</label>
						<input id="password" name="password" type={isPasswordVisible ? "text" : "password"} required></input>
						<ShowHidePassword className="show-password-icon" onClick={togglePasswordVisibility} />
					</div>
					<button className="btn-register btn-pink">إنشاء حساب</button>
					<p className="or-line">أو</p>
				</form>
				<div className="social-btns-container">
					<GoogleIcon />
					<FacebookIcon />
				</div>
				<p>
					هل لديك حساب بالفعل؟ <Link to="/login">دخول</Link>
				</p>
			</main>
			<aside className="side-header">
				<img src={fullLogo} alt="Anees"/>
			</aside>
		</div>
	);
}
