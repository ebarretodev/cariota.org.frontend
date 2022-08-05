import { Button, Typography, Tooltip } from 'antd'
import { useNavigate, useLocation } from "react-router-dom";
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { auth, db } from '../../../helpers/firebase';

import { useDispatch } from 'react-redux';
import { setBlankData } from '../../../redux/reducers/userReducer';
import { setBlankDataTangle } from '../../../redux/reducers/tangleDataReducer';
import localApi from '../../../helpers/localApi';


const { Text } = Typography


const AppHeader = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const tangleData = useAppSelector((state) => state.tangleData)
    const user = useAppSelector((state) => state.user)
    const dispatch = useDispatch()
    const api = localApi()



    //Check data from user
    const content = (
        <div>
            <Text style={{color: 'white'}}>username: {user.username}</Text><br />
            <Text style={{color: 'white'}}>email: {user.email}</Text><br />
            <Text style={{color: 'white'}}>
                <a
                    href={`https://explorer.iota.org/devnet/addr/${user.address}`}
                    target='_blank'
                    rel="noreferrer"
                    >
                    address: {`${user.address.slice(0, 20)}...`}
                </a>
            </Text><br />
        </div>
    )

    const handleLogout = () => {
        if (auth.currentUser?.isAnonymous) {
            let data = {
                token: user.token,
                amount: tangleData.balance
            }
			api.sendFromAnonymousAccount(data)
				.then(() => {
					db.collection('users').doc(user.token).delete();
				})

        }
        auth.signOut()
        dispatch(setBlankData())
        dispatch(setBlankDataTangle())
        navigate('/')
    }

    const handleInternalScreen = () => {
        if(location.pathname === '/manual'){
            navigate('/simulator')
        }
        if(location.pathname === '/simulator'){
            navigate('/manual')
        }
    }

    return (
		<>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 0,
					textAlign: 'center',
					borderRadius: '20px',
					backgroundColor: 'white',
				}}
			>
				<Text
					style={{
						fontWeight: 'bold',
						lineHeight: '18px',
						fontSize: '16px',
						padding: '7px 40px',
						color: '#555555',
					}}
				>
					Balance <br />
					{tangleData.balance / 1000000} MIOTA (USD{' '}
					{(
						(tangleData.balance * tangleData.price) /
						1000000
					).toFixed(2)}
					)
				</Text>
			</div>

			<Button
				onClick={handleInternalScreen}
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 0,
					textAlign: 'center',
					borderRadius: '20px',
					backgroundColor: '#00BCAD',
					border: 'none',
					height: '50px',
				}}
			>
				<Text
					style={{
						fontWeight: 'bold',
						lineHeight: '18px',
						fontSize: '16px',
						padding: '7px 80px',
						color: 'white',
					}}
				>
					{location.pathname === '/manual' && (
						<>
							Game
							<br />
							Simulation{' '}
						</>
					)}
					{location.pathname === '/simulator' && (
						<>
							Manual
							<br />
							Operations{' '}
						</>
					)}
				</Text>
			</Button>
			{false && (
				<Button
					style={{
						display: 'flex',
						flexDirection: 'column',
						padding: 0,
						textAlign: 'center',
						borderRadius: '20px',
						backgroundColor: 'white',
						border: 'none',
						height: '50px',
					}}
				>
					<Text
						style={{
							fontWeight: 'bold',
							lineHeight: '18px',
							fontSize: '16px',
							padding: '16px 40px',
							color: '#555',
						}}
					>
						Help!
					</Text>
				</Button>
			)}

			<Tooltip
				title={content}
				placement='bottomRight'
				trigger='hover'
				color={'#555'}
			>
				<img
					src={
							user.photoURL
							? user.photoURL
							: './assets/images/Foto.svg'
					}
					style={{ width: '50px', borderRadius: '50%' }}
					alt='logo cariota'
				/>
			</Tooltip>

			<Button
				onClick={handleLogout}
				style={{
					display: 'flex',
					flexDirection: 'column',
					padding: 0,
					textAlign: 'center',
					borderRadius: '20px',
					backgroundColor: '#00BCAD',
					border: 'none',
					height: '50px',
				}}
			>
				<Text
					style={{
						fontWeight: 'bold',
						lineHeight: '18px',
						fontSize: '16px',
						padding: '16px 40px',
						color: 'white',
					}}
				>
					Logout
				</Text>
			</Button>
		</>
	);
}
export default AppHeader