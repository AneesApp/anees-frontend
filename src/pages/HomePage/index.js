import React, { useState, Suspense } from "react";
import navbarLogo from "../../images/anees-images/navbar-logo.png";
import victoryIcon from "../../images/anees-images/victory.webp";
import { ReactComponent as MenuIcon } from "../../images/misc/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../images/misc/close-icon.svg";
import { ReactComponent as CloudIcon } from "../../images/misc/cloud.svg";
import { Link } from "react-router-dom";
import "./style.css";

const Main = React.lazy(() => import("./Main"));
const Footer = React.lazy(() => import("./Footer"));

export default function HomePage() {
	const [menuDisplay, setMenuDisplay] = useState(false);
	return (
		<div className="home-page">
			{menuDisplay ? <Menu setMenuDisplay={setMenuDisplay} /> : null}
			<AppHeader menuDisplay={menuDisplay} setMenuDisplay={setMenuDisplay} />
			<Suspense>
				<Main />
				<Footer />
			</Suspense>
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
				<Link to="/login" className="btn-login">
					<button className="btn-pink">دخول</button>
				</Link>
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
					<Link to="/register">
						<button className="btn-grey">جرب الآن</button>
					</Link>
				</div>
				<img src={victoryIcon} />
				<div class="cloud-container">
					<CloudIcon />
				</div>
			</div>
		</header>
	);
}

export function NavItems() {
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
