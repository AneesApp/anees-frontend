import React, { useState } from "react";
import navbarLogo from "../../images/anees-images/navbar-logo.png";
import victoryIcon from "../../images/anees-images/victory.webp";
import { ReactComponent as MenuIcon } from "../../images/misc/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../images/misc/close-icon.svg";
import { ReactComponent as CloudIcon } from "../../images/misc/cloud.svg";
import social from "../../images/children/social-about.webp";
import social2 from "../../images/children/social-program.webp";
import reception from "../../images/children/reception.webp";
import expression from "../../images/children/expression.webp";
import smileyBoy from "../../images/children/smiley-boy.png";
import arabicIcon from "../../images/advantages/arabic.svg";
import interactiveIcon from "../../images/advantages/interactive.svg";
import qualityIcon from "../../images/advantages/quality.svg";
import monitoringIcon from "../../images/advantages/monitoring.svg";
import mobilePreview from "../../images/misc/mobile-preview.png";
import googlePlay from "../../images/misc/google-play.png";
import contact from "../../images/children/contact.webp";

import "./style.css";

export default function HomePage() {
	const [menuDisplay, setMenuDisplay] = useState(false);
	return (
		<div className="home-page">
			{menuDisplay ? <Menu setMenuDisplay={setMenuDisplay} /> : null}
			<AppHeader menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
			<main>
				<About />
				<Programs />
				<Advantages />
				<AppPreview />
			</main>
			<footer>
				<ContactFooter />
				<LinksFooter />
			</footer>
		</div>
	);
}
function Menu(props) {
	return (
		<div className="menu">
			<div className="menu-header">
				<img href="#main" src={navbarLogo} alt="Anees" />
				<CloseIcon className="close-icon" onClick={() => props.setMenuDisplay(false)} />
			</div>
			<ul onClick={() => props.setMenuDisplay(false)}>
				<li>
					<a href="#">الرئيسية</a>
				</li>
				<li>
					<a href="#about">من نحن</a>
				</li>
				<li>
					<a href="#programs">برامجنا</a>
				</li>
				<li>
					<a href="#advantages">مميزاتنا</a>
				</li>
				<li>
					<a href="#contact">تواصل معنا</a>
				</li>
			</ul>
		</div>
	);
}

function AppHeader(props) {
	return (
		<header className="header">
			<nav>
				<img src={navbarLogo} alt="Anees" />
				<NavItems />
				<button className="btn-login btn-pink">دخول</button>
				<MenuIcon className="menu-icon" onClick={() => props.setMenuDisplay(true)} />
			</nav>
			<div className="hero-section">
				<div className="hero-section-details details">
					<h1>تطبيق أنيس</h1>
					<p>
						وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة
						للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
						الانتقادات للتصميم الاساسي.
					</p>
					<button className="btn-grey">جرب الآن</button>
				</div>
				<img src={victoryIcon} />
				<div class="cloud-container">
					<CloudIcon />
				</div>
			</div>
		</header>
	);
}

function NavItems() {
	return (
		<ul>
			<li>
				<a href="#">الرئيسية</a>
			</li>
			<li>
				<a href="#about">من نحن</a>
			</li>
			<li>
				<a href="#programs">برامجنا</a>
			</li>
			<li>
				<a href="#advantages">مميزاتنا</a>
			</li>
			<li>
				<a href="#contact">تواصل معنا</a>
			</li>
		</ul>
	);
}

function About() {
	return (
		<div id="about">
			<div className="details">
				<h2>من نحن</h2>
				<h1>تطبيق أنيس</h1>
				<p>
					وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة
					للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
					الانتقادات للتصميم الاساسي.
				</p>
				<button className="btn-register btn-pink">دخول</button>
			</div>
			<img src={social} />
		</div>
	);
}

function Programs() {
	return (
		<div id="programs">
			<h2>صديقك أنيس</h2>
			<h1>برامجنا</h1>
			<p>
				وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة
				للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
				الانتقادات
			</p>
			<div className="programs-container">
				<div className="program">
					<img src={reception} />
					<h2>اللغة الاستقبالية</h2>
					<p>وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع</p>
				</div>
				<div className="program">
					<img src={expression} />
					<h2>اللغة التعبيرية</h2>
					<p>وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع</p>
				</div>
				<div className="program">
					<img src={social2} />
					<h2>المواقف الاجتماعية</h2>
					<p>وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع</p>
				</div>
			</div>
		</div>
	);
}

function Advantages() {
	return (
		<div id="advantages">
			<div className="advantages-dummy-container">
				<img src={smileyBoy} />
				<div className="advantages-container">
					<h2>صديقك أنيس</h2>
					<h1>مميزاتنا</h1>
					<div className="advantages-details">
						<div className="advantage">
							<img src={arabicIcon} />
							<p>مدعم باللغة العربية</p>
						</div>
						<div className="advantage">
							<img src={interactiveIcon} />
							<p>تفاعلي</p>
						</div>
						<div className="advantage">
							<img src={qualityIcon} />
							<p>مبني على النهج العلمي المتبع في المراكز المتخصصة</p>
						</div>
						<div className="advantage">
							<img src={monitoringIcon} />
							<p>متابعة مستمرة للطفل</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

function AppPreview() {
	return (
		<div id="app-preview">
			<div className="app-preview-details">
				<h1>تطبيق الجوال</h1>
				<p>
					وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع النصوص النهائية المطلوبة
					للتصميم ويقول البعض ان وضع النصوص التجريبية بالتصميم قد تشغل المشاهد عن وضع الكثير من الملاحظات او
					الانتقادات للتصميم الاساسي.وعند موافقه العميل المبدئيه على التصميم يتم ازالة هذا النص من التصميم ويتم وضع
				</p>
				<img src={googlePlay} alt="Get it on google play" />
			</div>
			<img src={mobilePreview} alt="Anees App" />
		</div>
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
