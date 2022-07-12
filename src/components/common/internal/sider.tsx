import Card from "./card";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { UpCircleTwoTone, DownCircleTwoTone } from "@ant-design/icons";
import { Typography, List, Divider } from "antd"
import './sider.css'

const {Text} = Typography

const InternalSider = () => {
    const tangleData = useAppSelector((state) => state.tangleData)
    const user = useAppSelector((state)=> state.user)

    return(
        <>
            <Card title="Tangle Transactions" height={'250px'} scroll>
                <List
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
                            date = new Date(attachedTimestamp * 1000).toLocaleString();
						}
                        if (value) {

                         }
                        return (
							<>
								<a
									href={`https://explorer.iota.org/devnet/message/${messageID}`}
									target='_blank'
									rel='noreferrer'
								>
									<List.Item style={{ padding: 0 }}>
										<Text
											style={{
												display: 'flex',
												alignItems: 'center',
												justifyContent: 'space-between',
												width: '100%',
                                                fontSize: '12px',
                                            }}
										>
											<div style={{ textAlign: 'left' }}>
												<b>
													{fromId === user.token
														? `To: ${to.toUpperCase()}`
														: `From: ${from.toUpperCase()}`}
													<br />
													Value:{' '}
												</b>
												{(value / 1000000).toFixed(0)}Mi (USD {(value * tangleData.price / 1000000).toFixed(2)})
												<br />
												<b>
													Status:{' '}
													{approvedTimestamp
														? `Approved in ${
																(approvedTimestamp -
																	attachedTimestamp) /
																1000
														  }s`
														: `Waiting Approval`}
												</b>
											</div>
											{fromId === user.token ? (
												<DownCircleTwoTone
													twoToneColor={'#F44708'}
													style={{
														height: '20px',
														fontSize: '20px',
													}}
												/>
											) : (
												<UpCircleTwoTone
													twoToneColor={'#00BFB0'}
													style={{
														height: '20px',
														fontSize: '20px',
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
            </Card>

            <Card title="Incoming (last 24h)" >
                <Text > <UpCircleTwoTone twoToneColor={'#00BFB0'}  /> {(tangleData.incoming/1000000).toFixed(2)+' Miota' } </Text>
            </Card>

            <Card title="Outgoing (last 24h)">
                <Text > <DownCircleTwoTone twoToneColor={'#F44708'}  /> {(tangleData.outgoing/1000000).toFixed(2)+' Miota' } </Text>
            </Card>
        </>
    )
}

export default InternalSider