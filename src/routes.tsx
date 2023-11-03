import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { SignUpPage } from 'pages/SignUpPage';
import { LoginPage } from 'pages/LoginPage';
import { RequisicoesPage } from 'pages/RequisicoesPage';

function App() {
	return (
		<Router>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					minHeight: '100vh',
					alignItems: 'center',
				}}
			>
				<Header />
				<div style={{ flex: 1 }}>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/signUp" element={<SignUpPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/requisicoes" element={<RequisicoesPage />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</Router>
	);
}
export default App;
