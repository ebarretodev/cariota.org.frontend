import React, { useState, useEffect } from 'react';
import Unity, { UnityContext } from 'react-unity-webgl';
import { Button, Divider, Modal, Space, Typography } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import { useAppSelector } from '../redux/hooks/useAppSelector';
import { useNavigate } from 'react-router-dom';
import FormFeedback from './FormFeedback';
const { Title, Text } = Typography;

const unityContext = new UnityContext({
	loaderUrl: 'build/build.loader.js',
	dataUrl: 'build/build.data',
	frameworkUrl: 'build/build.framework.js',
	codeUrl: 'build/build.wasm',
});

const Simulator = () => {
	const [visible, setVisible] = useState(false);
	const navigate = useNavigate();
	const user = useAppSelector((state) => state.user);
	const tangleData = useAppSelector((state) => state.tangleData);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isInitializedGame, setIsInitializedGame] = useState(false);
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		unityContext.on('finishQuest', function () {
			setVisible(true);
		});
	}, []);

	useEffect(() => {
		unityContext.on('loaded', function () {
			setIsLoaded(true);
		});
	}, []);

	useEffect(() => {
		unityContext.on('initialized', function () {
			setIsInitializedGame(true)
		});
	}, []);

	useEffect(() => {
		unityContext.on('finishedQuest', function () {
			setVisible(true);
			console.log('Finish Quest')
		});
	}, []);

	useEffect(() => {
		unityContext.on('progress', function (progression) {
			setProgress(progression);
		});
	}, []);

	useEffect(() => {
		if (isInitializedGame) {
			unityContext.send('GameConnections', 'GetBalance', tangleData.balance/1000000);
		}

		if (isInitializedGame && user.address != '') {
			unityContext.send('GameConnections', 'GetAddress', user.address);
		}
		if (isInitializedGame && user.token != '') {
			unityContext.send('GameConnections', 'GetToken', user.token);
		}
		if (isInitializedGame && user.username != '') {
			unityContext.send('GameConnections', 'GetUsername', user.username);
		}

	});

	useEffect(() => {
		unityContext.on('debug', (message) =>
			console.log(`Unity said: ${message}`)
		);
	}, []);

	return (
		<>
			<FormFeedback visible={visible} setVisible={setVisible} />

			<Title
				level={1}
				style={{
					display: isLoaded ? 'none' : 'flex',
					marginTop: '30px',
				}}
			>
				Loading {(progress * 100).toFixed(0)}% ... <LoadingOutlined />{' '}
			</Title>
			<Unity
				unityContext={unityContext}
				style={{
					width: '100%',
					height: '490px',
					marginTop: '30px',
					display: isLoaded ? 'flex' : 'none',
				}}
			/>
		</>
	);
};

export default Simulator;
