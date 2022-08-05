import React from "react";
import { Typography, Row, Col } from 'antd'
import { FaLinkedinIn } from 'react-icons/fa'
const { Title, Text } = Typography

const AppWhoWeAre = () => {
    const team = [
        {name: 'Danilo Keiiti', img: './assets/images/Danilo.png', linkedin:'https://www.linkedin.com/in/dkeiiti/'},
        {name: 'Eliabel Barreto', img: './assets/images/Eliabel.png', linkedin:'https://www.linkedin.com/in/eliabelbarreto/'},
    ]
    return (
		<div id='ourteam' className='bg-FFFFFF'>
			<div className='container-fluid'>
				<div className='ourteam'>
					<Title level={4} style={{ color: '#664c4c' }}>
						Team
					</Title>
					<div className='line-43B9AA' />
					<div className='ourteam-text'>
						<Text>
							We combine entrepreneurial endeavors in IOTA, as
							well as management consulting and automation
							experience in the mobility industry
						</Text>
					</div>
				</div>
				<Row justify='center'>
					{team.map((person) => (
						<Col md={{ span: 8 }}>
							<a
								href={person.linkedin}
								target='_blank'
								rel='noreferrer'
								className="cardA"
							>
								<div className='card'>
									<img src={person.img} alt={person.name} />
									<Text className='card-text'>
										{person.name}{' '}
									</Text>
									<FaLinkedinIn />
								</div>
							</a>
						</Col>
					))}
				</Row>
			</div>
		</div>
	);
}

export default AppWhoWeAre