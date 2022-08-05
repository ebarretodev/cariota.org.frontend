import { LoadingOutlined } from '@ant-design/icons';
import { Form, Layout, Typography, Button, Input } from 'antd';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { auth } from '../helpers/firebase';
import localApi from '../helpers/localApi';

const { Content } = Layout;
const { Title } = Typography;

const Signin = () => {
	const navigate = useNavigate();
	const api = localApi();
	const [user, setUser] = useState<any | null>();
	const [loading, setLoading] = useState(false);

	const handleLogin = (values: any) => {
		api.signin(values);

	};

	const handleLoginAnonymously = () => {
		api.loginAnonymously()
	}

	return (
		<Content
			style={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100vh',
				backgroundColor: '#00BCAD',
			}}
		>
			<div
				style={{
					width: '800px',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
					height: '550px',
					boxShadow: '0px 4px 12px 3px rgba(0, 0, 0, 0.32)',
					borderRadius: '5px',
					backgroundColor: 'white',
				}}
			>
				<img
					src='./CariotaLogoCorreto.svg'
					alt='logo cariota'
					style={{ width: '60%' }}
				/>
				<Title
					level={1}
					style={{ margin: '10px', marginBottom: '30px' }}
				>
					{' '}
					Sign in{' '}
				</Title>
				<Form onFinish={handleLogin}>
					<Form.Item
						name='email'
						label='Email'
						rules={[
							{
								required: true,
								message: 'Insert your email',
							},
						]}
					>
						<Input placeholder='Email' type='email' />
					</Form.Item>
					<Form.Item
						name='password'
						label='Password'
						rules={[
							{
								required: true,
								message: 'Please insert your password.',
							},
						]}
					>
						<Input
							placeholder='At least 6 characters'
							type='password'
						/>
					</Form.Item>
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							height: '40%',
							justifyContent: 'space-between',
						}}
					>
						<Button
							style={{ marginBottom: '5px' }}
							type='primary'
							htmlType='submit'
						>
							Sign in {loading ? <LoadingOutlined /> : ''}
						</Button>
						<Button
							type='default'
							style={{ marginBottom: '5px' }}
							onClick={() => {
								navigate('/signup');
							}}
						>
							Sign up
						</Button>
						<Button
							type='primary'
							style={{
								backgroundColor: '#000',
								marginBottom: '5px',
							}}
							onClick={handleLoginAnonymously}
						>
							Log in Anonymously
						</Button>
						<Button
							type='link'
							style={{ marginBottom: '5px' }}
							onClick={() => {
								navigate('/');
							}}
						>
							Back Home
						</Button>
					</div>
				</Form>
			</div>
		</Content>
	);
};

export default Signin;
