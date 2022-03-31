import { message } from 'antd'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'
import { useAppSelector } from '../redux/hooks/useAppSelector'
import { setAddress, setEmail, setToken, setUsername } from '../redux/reducers/userReducer'
import localApi, { getToken, storeToken } from './localApi'

const RequireAuth = () => {
    const token = getToken()
    const dispatch = useDispatch()
    const api = localApi()
    const user = useAppSelector((state)=>state.user)

    if(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)){
        message.error('Application is not supported on mobile devices')
        return <Navigate to='/' />
    }

    if (token){
        storeToken(token)
        dispatch(setToken(token))
        return <Outlet />
    }
    return <Navigate to='/signin' />
}

export default RequireAuth