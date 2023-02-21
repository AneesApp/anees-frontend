import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registration from "./pages/Authentication/RegistrationPage";
import Login from "./pages/Authentication/LoginPage";
import ForgotPassword from "./pages/Authentication/ForgotPassword";
import Dashboard from "./pages/Dashboard";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/register" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/forgot-password" element={<ForgotPassword />} />
				<Route path="/dashboard/*" element={<Dashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
