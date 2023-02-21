import React from "react";
import { Route, Routes, Navigate, NavLink } from "react-router-dom";
import Game from "./Game";
import Profile from "./Profile";
import Manual from "./Manual";
import navbarLogo from "../../images/anees-images/navbar-logo.png";
import { ReactComponent as HomeIcon } from "./images/home-icon.svg";
import { ReactComponent as ProfileIcon } from "./images/profile-icon.svg";
import { ReactComponent as ManualIcon } from "./images/manual-icon.svg";
import "./style.css";

export default function Dashboard() {
	return (
		<div className="dashboard">
			<div className="sidebar">
				<img src={navbarLogo} />
				<nav>
					<ul>
                        <li>
                            <HomeIcon />
							<NavLink to="/dashboard/game" className="nav-link">
								الرئيسية
							</NavLink>
						</li>
                        <li>
                            <ProfileIcon />
							<NavLink to="/dashboard/profile" className="nav-link">
								الملف الشخصي
							</NavLink>
						</li>
                        <li>
                            <ManualIcon />
							<NavLink to="/dashboard/manual" className="nav-link">
								دليل الإرشادات
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<main className="main-content">
				<Routes>
					<Route index element={<Navigate to="/dashboard/game" />} />
					<Route path="/game" element={<Game />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/manual" element={<Manual />} />
				</Routes>
			</main>
		</div>
	);
}
