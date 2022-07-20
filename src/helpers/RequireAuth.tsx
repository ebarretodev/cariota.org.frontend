import { message } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';

import {
	setAddress,
	setEmail,
	setToken,
	setUsername,
	setPhotoURL,
	setType,
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
import { useAppSelector } from '../redux/hooks/useAppSelector';

const RequireAuth = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate()
	const [updatePriceBol, setUpdatePriceBol] = useState(false);
	const [fromIdTransactions, setFromIdTransactions] = useState<any>([]);
	const [toIdTransactions, setToIdTransactions] = useState<any>([]);
	const [user, setUser] = useState<any | null>();
	const userData = useAppSelector(state => state.user)

	useEffect(() => {
		auth.onAuthStateChanged((userData) => {
			setUser(userData);
		});

	}, []);

	useEffect(() => {

		db.collection('users')
			.doc(auth.currentUser?.uid)
			.onSnapshot((doc) => {
				dispatch(setToken(auth.currentUser?.uid));
				if ( doc.data()?.username) {
					dispatch(setUsername(doc.data()?.username));
				}
				if (doc.data()?.email) {
					dispatch(setEmail(doc.data()?.email));
				}
				if (doc.data()?.type) {
					dispatch(setType(doc.data()?.type));
				}
				if (doc.data()?.photoURL) {
					dispatch(setPhotoURL(doc.data()?.photoURL));
				}
				if (doc.data()?.address) {
					dispatch(setAddress(doc.data()?.address));
				}
				if (doc.data()?.balance != null) {
					dispatch(setBalance(doc.data()?.balance));
				}

			});
	}, []);

	useEffect(() => {
			db.collection('transactions')
				.where('fromId', '==', auth.currentUser?.uid)
				.onSnapshot((snapshot) => {
					setFromIdTransactions(
						snapshot.docs.map((l) => {
							return l.data();
						})
					);
				});
	}, []);

	useEffect(() => {
			db.collection('transactions')
				.where('toId', '==', auth.currentUser?.uid)
				.onSnapshot((snapshot) => {
					setToIdTransactions(
						snapshot.docs.map((l) => {
							return l.data();
						})
					);
				});
	}, []);

	useEffect(() => {
		let transactions = [...toIdTransactions, ...fromIdTransactions];
		const lastDay = Date.now() - 24 * 60 * 60 * 1000;
		const last2min = Date.now() - 2 * 60 * 1000;
		let outGoingPreview = 0;
		let inComingPreview = 0;
		let transactionsSorted = transactions.sort((a, b) => {
			return b.attachedTimestamp - a.attachedTimestamp;
		});
		console.log(transactions);
		console.log(transactionsSorted);
		dispatch(
			setDetailedTransaction(
				transactionsSorted.map((a) => {
					if (
						a.attachedTimestamp > lastDay &&
						a.approvedTimestamp > 0
					) {
						if (auth.currentUser?.uid === a.fromId) {
							outGoingPreview += a.value;
						}
						if (auth.currentUser?.uid === a.toId) {
							inComingPreview += a.value;
						}
					}

					if (!a.approvedTimestamp && a.attachedTimestamp < last2min ) {
						a.approvedTimestamp= -1
					}

					return a;
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
		}, 10000);
	}, [updatePriceBol]);

	if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
		message.error('Application is not supported on mobile devices');
		return <Navigate to='/' />;
	}

	return <Outlet />;
};

export default RequireAuth;
