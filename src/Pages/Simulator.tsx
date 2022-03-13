import React, { useState, useEffect} from "react";
import Unity, { UnityContext } from "react-unity-webgl";
import { Typography } from 'antd'
import { LoadingOutlined } from '@ant-design/icons'
const { Title } = Typography

const unityContext = new UnityContext({
    loaderUrl: "build/build.loader.js",
    dataUrl: "build/build.data",
    frameworkUrl: "build/build.framework.js",
    codeUrl: "build/build.wasm",
  });

const Simulator = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [progression, setProgression] = useState(0);

  useEffect(function () {
    unityContext.on("progress", function (progression) {
      setProgression(progression);
    });
  }, []);

  useEffect(function () {
    unityContext.on("loaded", function () {
      setIsLoaded(true);
    });
  }, []);
 return (
   <>
      <Title level={1} style={{display: isLoaded ? 'none' : 'block'}} >Loading {(progression * 100).toFixed(0)}% ... <LoadingOutlined /> </Title>
      <Unity unityContext={unityContext} style={{width: '100%', display: isLoaded ? 'block' : 'none' }} />
   </>
 )


}

export default Simulator