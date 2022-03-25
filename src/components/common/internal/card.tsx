import { Typography } from 'antd'
import { Content } from 'antd/lib/layout/layout'

const {Title} = Typography

type CardProps = {
    title?: string,
    height?: string,
    width?: string,
    scroll?: boolean,
    children?: React.ReactNode,
}

const Card = ( props: CardProps ) => {
    return (
        <div style={{
            boxShadow: '0px 4px 12px 3px rgba(0, 0, 0, 0.32)',
            borderRadius: '5px',
            marginTop: '30px',
            marginRight: '8px',
            padding: '10px',
            textAlign: 'center',
            height: props.height,
            width: props.width,
         }}>
            <Title level={5} >{props.title}</Title>
            <div style={{
                height: '85%',
                overflowY: props.scroll ? 'scroll' : 'hidden'
            }}>
                {props.children}
            </div>
        </div>
    )
}

export default Card