import React, { useState } from "react";
import { ReactComponent as EmailIcon } from "../images/email-icon.svg";
import { ReactComponent as ShowHidePassword } from "../images/show_hide_password.svg";
import { ReactComponent as PasswordIcon } from "../images/password-icon.svg";
import "./style.css";

export default function ForgotPassword() {
	const [step, setStep] = useState(0);
	function getNextStep() {
		setStep((level) => level + 1);
	}
	return (
		<div className="forgot-password">
			<div className="card">
				<div className="progress-bar-container">
					<span className={`progress-bar${step === 0 ? " active" : ""}`}></span>
					<span className={`progress-bar${step === 1 ? " active" : ""}`}></span>
					<span className={`progress-bar${step === 2 ? " active" : ""}`}></span>
				</div>
				<div className="card-content">
					{step === 0 ? <Forgot getNextStep={getNextStep} /> : null}
					{step === 1 ? <OTP getNextStep={getNextStep} /> : null}
					{step === 2 ? <Reset /> : null}
				</div>
			</div>
		</div>
	);
}

function Forgot({ getNextStep }) {
	return (
		<>
			<EmailIcon />
			<h1>نسيت كلمة السر</h1>
			<p>أدخل عنوان بريدك الإلكتروني لإعادة تعيين كلمة المرور</p>
			<div className="input-container">
				<label htmlFor="email">البريد الإلكتروني</label>
				<input id="email" name="email" type="email" required />
			</div>
			<button className="btn-pink" onClick={getNextStep}>
				استمرار
			</button>
		</>
	);
}

function OTP({ getNextStep }) {
	const [otp, setOTP] = useState(["", "", "", "", "", ""]);
	function handlePaste(e) {
		e.stopPropagation();
		e.preventDefault();
		let pastedOTP = e.clipboardData.getData("Text").trim();
		if (!isNaN(pastedOTP)) setOTP(pastedOTP.split(""));
		document.querySelector("input#digit-6").focus();
	}
	function handleChange(e) {
		e.preventDefault();
		let value = e.target.value;
		if (!isNaN(value)) {
			value = value.at(-1) ?? value.trim() ?? value;
			let index = Number(e.target.id.at(-1)) - 1;
			setOTP((otp) => {
				let newOTP = [...otp];
				newOTP[index] = value;
				return newOTP;
			});
			if (index + 2 <= 6 && value !== "") document.querySelector(`input#digit-${index + 2}`).focus();
		}
	}
	return (
		<>
			<EmailIcon />
			<h1>أدخل رمز التحقق</h1>
			<p>أدخل رمز التحقق الذي أرسلناه الآن على بريدك الإلكتروني</p>
			<div className="input-container otp-container" onPaste={handlePaste}>
				<input type="number" id="digit-1" value={otp[0]} maxlength="1" onChange={handleChange} />
				<input type="number" id="digit-2" value={otp[1]} maxlength="1" onChange={handleChange} />
				<input type="number" id="digit-3" value={otp[2]} maxlength="1" onChange={handleChange} />
				<input type="number" id="digit-4" value={otp[3]} maxlength="1" onChange={handleChange} />
				<input type="number" id="digit-5" value={otp[4]} maxlength="1" onChange={handleChange} />
				<input type="number" id="digit-6" value={otp[5]} maxlength="1" onChange={handleChange} />
			</div>
			<button className="btn-pink" onClick={getNextStep}>
				استمرار
			</button>
			<p>
				لم تحصل على رمز التحقق؟ <a>إعادة إرسال</a>
			</p>
		</>
	);
}

function Reset() {
	const [isPasswordVisible, setPasswordVisibility] = useState(false);
	function togglePasswordVisibility() {
		setPasswordVisibility((visible) => !visible);
	}
	return (
		<>
			<PasswordIcon />
			<h1>إعادة تعيين كلمة السر</h1>
			<p>قم بإنشاء كلمة السر الجديدة لتسجيل الدخول</p>
			<div className="input-container">
				<label htmlFor="password">الرقم السري</label>
				<input id="password" name="password" type={isPasswordVisible ? "text" : "password"} />
				<ShowHidePassword className="show-password-icon" onClick={togglePasswordVisibility} />
			</div>
			<div className="input-container">
				<label htmlFor="password-confirm">تأكيد الرقم السري</label>
				<input id="password-confirm" name="password-confirm" type={isPasswordVisible ? "text" : "password"} />
				<ShowHidePassword className="show-password-icon" onClick={togglePasswordVisibility} />
			</div>
			<button className="btn-pink">تأكيد</button>
		</>
	);
}
