import { CopyFilled } from "@ant-design/icons";
import { Button, Form, Input, InputNumber, message, Popconfirm, Tooltip, Typography } from "antd";
import React from "react";
import Card from "../components/common/internal/card";
import localApi from "../helpers/localApi";
import { useAppSelector } from "../redux/hooks/useAppSelector";

const { Text } = Typography

const Manual = () => {
    const user = useAppSelector((state)=> state.user)
    const tangleData = useAppSelector((state)=> state.tangleData)
    const api = localApi()
    const [form] = Form.useForm()

    const handleCopyToClipboard = () => {
        navigator.clipboard?.writeText && navigator.clipboard.writeText(user.address);
    }

    const handleRequestFaucets = async () => {
        message.info('Request added')
        api.requestFaucets()
    }

    const handleSubmitSend = () => {
        const values: any = form.getFieldsValue()
        console.log(values)
        const valuesToSend = {
            ...values,
            amount: values.amount*1000000
        }
        api.send(valuesToSend)
    }

 return(
     <>
        <Card title="Receive" width={'90%'} >
            <Button type='primary' onClick={handleRequestFaucets}>Request Faucets</Button>
            <br />
            <div style={{marginTop: '20px'}}>
                <Text >Send to your self <b>(use Devnet)</b> </Text>
                <div style={{display: 'flex', justifyContent:'space-around', margin:'5px 0' }}>
                    <Input style={{width: '90%', textAlign: 'center' }}  value={user.address} />
                    <Tooltip title='Copied it' trigger={'click'} >
                        <Button onClick={handleCopyToClipboard} type="primary" ><CopyFilled /></Button>
                    </Tooltip>
                </div>
            </div>
        </Card>
        <Card title="Send" width={'90%'} >
            <Form form={form} >
                <Form.Item name="address" label = 'Address to send' rules={[{
                    required: true,
                    message: 'Please insert a valid addess'
                }]}>
                    <Input placeholder= "Please enter a valid IOTA address (atoi1...) " />
                </Form.Item>
                <Form.Item name="amount" label = 'Amount to send' rules={[{
                    required: true,
                    message: 'Please insert a value to send.'
                }]}>
                    <InputNumber style={{width: '100%'}} min={0} max={tangleData.balance/1000000} placeholder= "Please enter a value in Miotas " />
                </Form.Item>
                <Form.Item name="message" label = 'Message description' rules={[{
                    required: true,
                    message: 'Please enter a message description'
                }]}>
                    <Input placeholder= "Please ente a message description " />
                </Form.Item>
                <div style={{textAlign: "right", marginBottom: '5px'}} >
                        <Popconfirm
                            title='Are you confirm to clear the value fields?'
                            onConfirm={()=>{form.resetFields()}}
                            okText="Yes"
                            cancelText="No">
                            <Button type="primary" danger >Clear</Button> {'  '}
                        </Popconfirm>
                        <Popconfirm
                            title='Are you confirm to send this transaction?'
                            onConfirm={handleSubmitSend}
                            okText="Yes"
                            cancelText="No">
                            <Button type="primary" htmlType="submit">Send</Button>
                        </Popconfirm>
                </div>
            </Form>
        </Card>
     </>
 )
}

export default Manual