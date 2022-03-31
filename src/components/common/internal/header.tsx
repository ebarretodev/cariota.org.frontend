import { Button, Typography, Tooltip } from 'antd'
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { LoadingOutlined } from '@ant-design/icons'
import { getIotaUsd } from '../../../helpers/coins'
import { useAppSelector } from '../../../redux/hooks/useAppSelector';
import { setBalance, setDetailedTransaction, setIncoming, setOutgoing, setPrice } from '../../../redux/reducers/tangleDataReducer';
import { useDispatch } from 'react-redux';
import localApi, { deleteToken } from '../../../helpers/localApi';
import { setAddress, setEmail, setToken, setUsername } from '../../../redux/reducers/userReducer';

const { Text } = Typography


const AppHeader = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const useApi = localApi()
    const dispatch = useDispatch()
    const tangleData = useAppSelector((state) => state.tangleData)
    const user = useAppSelector((state)=> state.user)
    //check values on Market
    const [loading, setLoading] = useState(false)
    const [tangleDataUpdates, setTangleDataUpdates] = useState(0)

    useEffect(()=>{
        const checkMarket  = async () => {
            setLoading(true)
            dispatch(setBalance(await useApi.balance()))
            dispatch(setPrice(await getIotaUsd()))
            setLoading(false)
            setTangleDataUpdates(tangleDataUpdates + 1)
        }
        if(tangleDataUpdates === 0){
            checkMarket()
        } else {
            setTimeout(()=>{
                checkMarket()
            }, 3000)
        }
    },[ tangleDataUpdates ])

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

    useEffect(()=>{
        if(user.username == "") {
            handleLogout()
        }
    },[])

    const handleLogout = () => {
        deleteToken()
        dispatch(setUsername(''))
        dispatch(setToken(''))
        dispatch(setEmail(''))
        dispatch(setAddress(''))
        dispatch(setBalance(0))
        dispatch(setIncoming(0))
        dispatch(setOutgoing(0))
        dispatch(setDetailedTransaction([]))
        navigate('/signin')
    }

    const handleInternalScreen = () => {
        if(location.pathname === '/manual'){
            navigate('/simulator')
        }
        if(location.pathname === '/simulator'){
            navigate('/manual')
        }
    }

    return(
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
                textAlign: 'center',
                borderRadius: '20px',
                backgroundColor:'white',
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    lineHeight: '18px',
                    fontSize:'16px',
                    padding: '7px 40px',
                    color: '#555555'
                    }}>
                    Balance {loading && <LoadingOutlined />}<br/>
                    {tangleData.balance / 1000000} MIOTA (USD {(tangleData.balance*tangleData.price/1000000).toFixed(2)})
                </Text>
            </div>

            <Button onClick={handleInternalScreen}
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    textAlign: 'center',
                    borderRadius: '20px',
                    backgroundColor:'#00BCAD',
                    border:'none',
                    height: '50px'
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    lineHeight: '18px',
                    fontSize:'16px',
                    padding: '7px 80px',
                    color: 'white'
                }}>
                    { location.pathname === '/manual' && <>Game<br/>Simulation </>}
                    { location.pathname === '/simulator' && <>Manual<br/>Operations </>}
                </Text>
            </Button>
            { false &&
            <Button style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    textAlign: 'center',
                    borderRadius: '20px',
                    backgroundColor:'white',
                    border:'none',
                    height: '50px'
                }}>
                    <Text style={{
                        fontWeight: 'bold',
                        lineHeight: '18px',
                        fontSize:'16px',
                        padding: '16px 40px',
                        color: '#555'
                    }}>
                        Help!
                    </Text>
            </Button>
            }

            <Tooltip title={content} placement="bottomRight" trigger="hover" color={'#555'} >
                <img src="./assets/images/Foto.svg" style={{width: '50px' }} alt="logo cariota" />
            </Tooltip>

            <Button onClick={handleLogout} style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: 0,
                    textAlign: 'center',
                    borderRadius: '20px',
                    backgroundColor:'#00BCAD',
                    border:'none',
                    height: '50px'
                }}>
                    <Text style={{
                    fontWeight: 'bold',
                    lineHeight: '18px',
                    fontSize:'16px',
                    padding: '16px 40px',
                    color: 'white'}} >
                        Logout
                    </Text>
            </Button>

        </>

    )
}
export default AppHeader