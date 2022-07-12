import React from 'react';
import { Typography, Row, Col } from 'antd';
const { Title, Text } = Typography;

const AppWhoWeAre = () => {
	return (
		<div id='whoweare' className='bg-FFFFFF'>
			<div className='container-fluid'>
				<Row gutter={[24, 16]}>
					<Col lg={{ span: 12 }}>
						<Title level={4} style={{ color: '#664c4c' }}>
							The sandbox for mobility solutions
						</Title>
						<div className='line-43B9AA' />
						<Title
							level={1}
							style={{ color: '#664c4c', marginTop: '20px' }}
						>
							What is CarIOTA?
						</Title>
						<Text>
							Virtual interactive ecosystem from{' '}
							<span style={{ fontWeight: 'bold' }}>
								vehicle-as-economic-agent
							</span>{' '}
							point of view. It takes the painful and
							cost-intensive struggle of assessing mobility
							solutions and business models to the virtual world
							by making use of the IOTA Tangle technology.
						</Text>
					</Col>
					<Col lg={{ span: 12 }} style={{ width: '100%' }}>
						<img
							style={{ width: '100%', alignItems: 'center' }}
							src='./assets/images/whoweare.svg'
							alt='Who we are'
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default AppWhoWeAre;
