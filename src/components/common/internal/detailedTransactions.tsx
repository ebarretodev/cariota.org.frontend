import { CloseCircleTwoTone, DownCircleTwoTone, UpCircleTwoTone } from '@ant-design/icons';
import { Divider, List, Typography } from 'antd';
import React from 'react';
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
const { Text } = Typography;
const Transactions = () => {
    const tangleData = useAppSelector(state=>state.tangleData)
    const user = useAppSelector(state=>state.user)

    return (
		<List
			itemLayout='horizontal'
			dataSource={tangleData.detailedTransactions}
            renderItem={(item) => {

                const {
                    attachedTimestamp,
                    approvedTimestamp,
                    from,
                    fromId,
                    messageID,
                    text,
                    to,
                    toId,
                    value,
                } = item;
                let date = ''
                if (attachedTimestamp) {
                    date = new Date(attachedTimestamp * 1).toLocaleString();
                }
                return (
					<>
						<a
							href={
								messageID
									? `https://explorer.iota.org/devnet/message/${messageID}`
									: 'javascript:void(0);'
							}
							target={messageID ? '_blank' : ''}
							rel='noreferrer'
						>
							<List.Item style={{ padding: 0 }}>
								<Text
									style={{
										display: 'flex',
										alignItems: 'normal',
										justifyContent: 'space-between',
										width: '100%',
										fontSize: '12px',
									}}
								>
									<div style={{ textAlign: 'left', flex: .3 }}>
										<b>
											{fromId === user.token
												? `To: ${to.toUpperCase()}`
												: `From: ${from.toUpperCase()}`}
											<br />
											Value:{' '}
										</b>
										{(value / 1000000).toFixed(0)}Mi (USD{' '}
										{(
											(value * tangleData.price) /
											1000000
										).toFixed(2)}
										)
										<br />
										<b>
											Status:{' '}
											{approvedTimestamp < 0
												? 'Transaction error'
												: ''}
											{!approvedTimestamp ||
											approvedTimestamp == 0
												? `Waiting Approval`
												: ''}
											{approvedTimestamp > 0
												? `Approved in ${(
														(approvedTimestamp -
															attachedTimestamp) /
														1000
												  ).toFixed(0)}s`
												: ''}
										</b>
									</div>
									<div style={{ textAlign: 'left' , flex: 1}}>
										<b> Date: </b>
                                        {date}
                                        <br />
                                        <b>Message: </b>
                                        {text}
									</div>
									{approvedTimestamp < 0 ? (
										<CloseCircleTwoTone
											twoToneColor={'#AAA'}
											style={{
												height: '20px',
												fontSize: '30px',
											}}
										/>
									) : fromId === user.token ? (
										<DownCircleTwoTone
											twoToneColor={'#F44708'}
											style={{
												height: '20px',
												fontSize: '30px',
											}}
										/>
									) : (
										<UpCircleTwoTone
											twoToneColor={'#00BFB0'}
											style={{
												height: '20px',
												fontSize: '30px',
											}}
										/>
									)}
								</Text>
							</List.Item>
						</a>
						<Divider style={{ margin: '10px 0' }} />
					</>
				);
            }}
		/>
	);
};

export default Transactions;
