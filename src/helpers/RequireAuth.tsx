import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import {
	setAddress,
	setEmail,
	setToken,
	setUsername,
	setPhotoURL,
} from '../redux/reducers/userReducer';

import {
	setBalance,
	setPrice,
	setIncoming,
	setOutgoing,
	setDetailedTransaction,
} from '../redux/reducers/tangleDataReducer';

import { getIotaUsd } from './coins';

import { auth, db } from './firebase';

const RequireAuth = () => {
	const dispatch = useDispatch();
	const [updatePriceBol, setUpdatePriceBol] = useState(false);
	const [fromIdTransactions, setFromIdTransactions] = useState<any>([]);
	const [toIdTransactions, setToIdTransactions] = useState<any>([]);
	const [user, setUser] = useState<any | null>();

	useEffect(() => {
		auth.onAuthStateChanged((userData) => {
			setUser(userData);
		});
	}, []);

	useEffect(() => {
		if (user) {
			db.collection('users')
				.doc(auth.currentUser?.uid)
				.onSnapshot((doc) => {
					dispatch(setUsername(doc.data()?.username));
					dispatch(setEmail(doc.data()?.email));
					dispatch(setPhotoURL(doc.data()?.photoURL));
					dispatch(setToken(auth.currentUser?.uid));
					// dispatch(setAddress(doc.data()?.address))
					dispatch(setBalance(doc.data()?.balance));
				});
		}
	}, [user]);

	useEffect(() => {
		if (user) {
			db.collection('transactions')
				.where('fromId', '==', auth.currentUser?.uid)
				.onSnapshot((snapshot) => {
					setFromIdTransactions(
						snapshot.docs.map((l) => {
							return l.data();
						})
					);
				});
		}
	}, [user]);

	useEffect(() => {
		if (user) {
			db.collection('transactions')
				.where('toId', '==', auth.currentUser?.uid)
				.onSnapshot((snapshot) => {
					setToIdTransactions(
						snapshot.docs.map((l) => {
							return l.data();
						})
					);
				});
		}
	}, [user]);

	useEffect(() => {
		let transactions = [...toIdTransactions, ...fromIdTransactions];
		const lastDay = (Date.now() - 24 * 60 * 60 * 1000) / 1000;
		let outGoingPreview = 0;
		let inComingPreview = 0;
		dispatch(
			setDetailedTransaction(
				transactions.map((l) => {
					if (l.attachedTimestamp > lastDay) {
						if (auth.currentUser?.uid === l.fromId) {
							outGoingPreview += l.value;
						}
						if (auth.currentUser?.uid === l.toId) {
							inComingPreview += l.value;
						}
					}

					return l;
				})
			)
		);
		dispatch(setOutgoing(outGoingPreview));
		dispatch(setIncoming(inComingPreview));
	}, [toIdTransactions, fromIdTransactions]);

	useEffect(() => {
		const updatePrice = async () => {
			dispatch(setPrice(await getIotaUsd()));
		};
		updatePrice();
		setTimeout(() => {
			setUpdatePriceBol(!updatePriceBol);
		}, 5000);
	}, [updatePriceBol]);

	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		message.error('Application is not supported on mobile devices');
		return <Navigate to='/' />;
	}

	return <Outlet />;
};

export default RequireAuth;
