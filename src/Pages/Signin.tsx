import { Form, Layout, Typography, Button, Input, message} from 'antd'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import localApi, { storeToken } from '../helpers/localApi'
import { setClearData } from '../redux/reducers/tangleDataReducer'
import { setAddress, setEmail, setToken, setUsername } from '../redux/reducers/userReducer'

const { Content } = Layout
const { Title } = Typography

const Signin = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const api = localApi()

  const handleLogin = (values: any) => {
    api.signin(values)
      .then(res=>{
          storeToken(res.data.token)
          dispatch(setUsername(res.data.username))
          dispatch(setToken(res.data.token))
          dispatch(setEmail(res.data.email))
          dispatch(setAddress(res.data.address))
          dispatch(setClearData(0))
          navigate('/simulator')
      })
      .catch(err=>message.error(err.response.data.error))
  }

  return (
    <Content style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#00BCAD'
    }}>
      <div style={{
        width: '800px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '500px',
        boxShadow: '0px 4px 12px 3px rgba(0, 0, 0, 0.32)',
        borderRadius: '5px',
        backgroundColor: 'white'
      }}>
        <img src="./CariotaLogoCorreto.svg" alt="logo cariota" style={{width: '60%'}} />
        <Title level={1} style={{margin: '10px', marginBottom: '30px'}}> Sign in </Title>
        <Form onFinish={handleLogin}>
          <Form.Item name="email" label = 'Email' rules={[{
                      required: true,
                      message: 'Insert your email'
          }]}>
              <Input placeholder= "Email" type='email'/>
          </Form.Item>
          <Form.Item name="passHash" label = 'Password' rules={[{
              required: true,
              message: 'Please insert your password.'
          }]}>
              <Input placeholder= "Password" type="password"/>
          </Form.Item>
          <div style={{display: 'flex', flexDirection: 'column', height: '50%', justifyContent: 'space-between' }} >
              <Button type="primary" htmlType="submit">Login</Button>
              <Button type="default" onClick={()=>{navigate('/signup')}} >Sign up</Button>
              <Button type="link" onClick={()=>{navigate('/')}} >Return</Button>
          </div>
        </Form>
      </div>
    </Content>
  )
}

export default Signin