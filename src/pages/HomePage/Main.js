import React from "react";
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

export default function Main() {
	return (
		<main>
			<About />
			<Programs />
			<Advantages />
			<AppPreview />
		</main>
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
