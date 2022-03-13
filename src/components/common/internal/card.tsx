import { Typography } from 'antd'

const {Title} = Typography

type CardProps = {
    title?: string,
    height?: number,
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
            height: props.height,
         }}>
            <Title level={5} style={{textAlign: 'center'}} >{props.title}</Title>
            {props.children}
        </div>
    )
}

export default Card