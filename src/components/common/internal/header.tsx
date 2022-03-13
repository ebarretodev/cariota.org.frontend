import { Button, Typography} from 'antd'
import { useNavigate, useLocation } from "react-router-dom";

const { Text } = Typography


const AppHeader = () => {
    const location = useLocation()
    const navigate = useNavigate()

    const handleBack = () => {
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
                    Balance <br/>
                    150 MIOTA (USD 140.00)
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
                    { location.pathname === '/simulator' && <>Manual<br/>Transactions </>}
                </Text>
            </Button>

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
            <img src="./assets/images/Foto.svg" style={{width: '50px' }} alt="logo cariota" />

            <Button onClick={handleBack} style={{
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
                        Back
                    </Text>
            </Button>

        </>

    )
}
export default AppHeader