import React from 'react';
import { Typography, Row, Col } from 'antd';
const { Title, Text } = Typography;

const AppOurGoal = () => {
	return (
		<div id='ourgoal' className='bg-43B9AA'>
			<div className='container-fluid'>
				<div className='whoweare'>
					<div className='goal'>
						<Title level={4} style={{ color: 'white' }}>
							The goal
						</Title>
						<div className='line-555555' />
						<Title
							level={1}
							style={{ color: 'white', marginTop: 20 }}
						>
							Enter the machine-to-machine economy
						</Title>
						<Text style={{ color: 'white' }}>
							CarIOTA explores the possibilities of interactions
							among vehicle and smart-city use-cases, with none or
							minimal human interference. With time, the goal is
							to extend it beyond the vehicle.{' '}
						</Text>
						<Row gutter={[24, 16]}>
							<Col
								lg={{ span: 12 }}
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<img
									src='./assets/images/GoalLeft.svg'
									alt='Goal left'
								/>
								<Text style={{ color: 'white' }}>
									Example 1: vehicle pays its electric charge
									by itself, and also receives for reporting
									holes on the street to the municipality
								</Text>
							</Col>
							<Col
								lg={{ span: 12 }}
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}
							>
								<img
									src='./assets/images/GoalRight.svg'
									alt='Goal right'
								/>
								<Text style={{ color: 'white' }}>
									Example 2: in the near future, with an
									adapted CarIOTA version, your
									smart-refrigerator at home will inform the
									dairy industry about the milk that is
									running out, and have more of it delivered
									by your favorite supermarket
								</Text>
							</Col>
						</Row>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AppOurGoal;
