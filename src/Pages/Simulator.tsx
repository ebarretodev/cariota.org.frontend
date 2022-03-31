import React, { useState, useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
import { useAppSelector } from "../redux/hooks/useAppSelector";
import { useNavigate } from "react-router-dom";
const { Title } = Typography

const unityContext = new UnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

const Simulator = () => {

  const navigate = useNavigate()
  const user = useAppSelector(state => state.user )
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);

  useEffect(()=>{
    if(user.type){
      navigate('/manual')
    }
  }, [])

  useEffect(() => {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  useEffect(() => {
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);

  useEffect(()=>{
    unityContext.on("initialized", function () {
      console.log('Initialized event call')
      unityContext.send("GameConnections", "GetToken", user.token);
      unityContext.send("GameConnections", "GetUsername", user.username);
    })
  },[])

  useEffect( () => {
    unityContext.on("debug", (message) => console.log(`Unity said: ${message}`))
  }, []);

 return (
   <>
      <Title level={1} style={{display: isLoaded ? 'none' : 'flex', marginTop: '30px' }} >Loading {(progression * 100).toFixed(0)}% ... <LoadingOutlined /> </Title>
      <Unity unityContext={unityContext} style={{width: '100%', height: '93%' , marginTop: '30px', display: isLoaded ? 'flex' : 'none' }} />
   </>
 )


}

export default Simulator