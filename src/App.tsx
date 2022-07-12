import { useEffect, useState } from 'react';
import { auth } from './helpers/firebase';
import './styles/css/antd.css';
import './App.css';

import Home from './Pages/Home';
import Layout from './components/common/internal/Layout';
import Manual from './Pages/Manual';
import Simulator from './Pages/Simulator';
import {
	Routes,
	Route,
	Navigate,
	useNavigate,
	useLocation,
} from 'react-router-dom';
import RequireAuth from './helpers/RequireAuth';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';

const App = () => {
	const navigate = useNavigate();
	let location = useLocation();
	const [user, setUser] = useState<any | null>();

	useEffect(() => {
		auth.onAuthStateChanged((userData) => {
				setUser(userData);
			})
	}, []);

	useEffect(() => {
		if (
			(location.pathname === '/simulator' ||
				location.pathname === '/manual') &&
			!user
		) {
			navigate('/signin');
		}
		if (
			(location.pathname === '/signin' ||
				location.pathname === '/signup') &&
			user
		) {
			navigate('/simulator');
		}
	}, [location, user]);

	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/signin' element={<Signin />} />
			<Route path='/signup' element={<Signup />} />
			<Route element={<RequireAuth />}>
				<Route element={<Layout />}>
					<Route path='/manual' element={<Manual />} />
					<Route path='/simulator' element={<Simulator />} />
				</Route>
			</Route>
			<Route path='' element={<Navigate to='/' />} />
			<Route path='*' element={<Navigate to='/' />} />
		</Routes>
	);
};

export default App;
