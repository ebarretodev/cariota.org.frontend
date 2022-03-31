import Card from "./card";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { UpCircleTwoTone, DownCircleTwoTone, LoadingOutlined } from "@ant-design/icons";
import { Empty, Typography, List } from "antd"
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setIncoming, setOutgoing, setBalance, setDetailedTransaction} from "../../../redux/reducers/tangleDataReducer";
import localApi, { http } from '../../../helpers/localApi'
import { setAddress, setEmail, setToken, setUsername } from "../../../redux/reducers/userReducer";

const {Text} = Typography

const InternalSider = () => {
    const tangleData = useAppSelector((state)=>state.tangleData)
    const dispatch = useDispatch()
    const useApi = localApi()
    const [updates, setUpdates] = useState(0)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const checkTangle = async () => {
            setLoading(true)
            const userData = await useApi.userInfo()
            dispatch(setUsername(userData.username))
            dispatch(setEmail(userData.email))
            dispatch(setAddress(userData.address))
            dispatch(setToken(userData.token))
            dispatch(setDetailedTransaction(await useApi.detailedTransactions()))
            setLoading(false)
            setUpdates(updates+1)
        }
        if(http.defaults.headers.common['Authorization']){
            if(updates === 0){
                checkTangle()
            } else {
                setTimeout(()=>{
                    checkTangle()
                }, 30000)
            }}

    },[updates])

    useEffect(()=>{
        let newInconming = 0
        let newOutgoing = 0
        const oldValue = (new Date().getTime()/1000) - (24*60*60)
        tangleData.detailedTransactions.map((item)=>{
            if(!item.error && item.amount){
                if( item.timestamp > oldValue){
                    item.type === 'receive' ? newInconming += item.amount : newOutgoing += item.amount
                }
            }
        })
        dispatch(setIncoming(newInconming))
        dispatch(setOutgoing(newOutgoing))
    },[ tangleData.detailedTransactions ])

    return(
        <>
            <Card title="Tangle Transactions" height={'250px'} scroll>
                {loading && <LoadingOutlined />}
                { tangleData.detailedTransactions.length === 0 && <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />}
                <List
                    dataSource={tangleData.detailedTransactions}
                    renderItem={(item)=> {
                        const { type, messageId, timestamp, error, amount } = item
                        let date = ''
                        if(error){
                            return null
                        }
                        if(timestamp){
                            date = new Date(timestamp*1000).toLocaleString()
                        }
                        if (amount){
                            return (

                                <a href={`https://explorer.iota.org/devnet/message/${messageId}`} target='_blank' rel="noreferrer" >
                                    <List.Item style={{padding: 0}}>
                                        <Text style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                            {type === 'send' ? <DownCircleTwoTone twoToneColor={'#F44708'} style={{height: '20px'}} />: <UpCircleTwoTone twoToneColor={'#00BFB0'}  />}
                                            <div>
                                                {type === 'send' ? ` Send: `: ` Receive `}
                                                {(amount / 1000000 ).toFixed(2)} Miota <br />
                                                {date}
                                            </div>
                                            </Text>
                                    </List.Item>
                                </a>
                        )}
                    }}
                />
            </Card>

            <Card title="Incoming (last 24h)" >
                <Text > <UpCircleTwoTone twoToneColor={'#00BFB0'}  /> {(tangleData.incoming/1000000).toFixed(2)+' Miota' } {loading && <LoadingOutlined />}</Text>
            </Card>

            <Card title="Outgoing (last 24h)">
                <Text > <DownCircleTwoTone twoToneColor={'#F44708'}  /> {(tangleData.outgoing/1000000).toFixed(2)+' Miota' } {loading && <LoadingOutlined />} </Text>
            </Card>
        </>
    )
}

export default InternalSider