import React from 'react';
import { Button, Divider, Form, Input, Modal, Radio, Typography } from 'antd';
import { db } from '../helpers/firebase';

const { Text } = Typography;

const FormFeedback = (props: any) => {
	const [form] = Form.useForm();

	const handleSubmit = () => {
		form.validateFields().then((values) => {
			db.collection('feedbacks').add({
				values
			})
			form.resetFields();
			props.setVisible(false);
		});
	};

	const handleCancel = () => {
		form.resetFields();
		props.setVisible(false);
	};

	return (
		<Modal
			visible={props.visible}
			title='CarIOTA Feedback'
			okText='Submit'
			cancelText='Cancel'
			onCancel={handleCancel}
			onOk={handleSubmit}
		>
			<Text>
				Dear user from CarIOTA Beta version, we appreciate your feedback
				and opinion. We are working to improve your experience, and your
				help is very welcome!
			</Text>
			<Divider />
			<Form form={form} layout='vertical' name='form_in_modal'>
				<Form.Item
					name='design'
					label='What is your opinion about the CarIOTA design?'
					rules={[
						{
							required: true,
							message: 'Please select one option!',
						},
					]}
				>
					<Radio.Group>
						<Radio value='Good enough'>Good enough</Radio>
						<Radio value='Very good'>Very good</Radio>
						<Radio value='Need improvements'>
							Need improvements
						</Radio>
					</Radio.Group>
				</Form.Item>
				<Divider />
				<Form.Item
					name='functionalities'
					label='What is your opinion about CarIOTA functionalities?'
					rules={[
						{
							required: true,
							message: 'Please select one option!',
						},
					]}
				>
					<Radio.Group>
						<Radio value='Good enough'>Good enough</Radio>
						<Radio value='Very good'>Very good</Radio>
						<Radio value='Need improvements'>
							Need improvements
						</Radio>
					</Radio.Group>
				</Form.Item>
				<Divider />
				<Form.Item
					name='know'
					label='Do you already know IOTA?'
					rules={[
						{
							required: true,
							message: 'Please select one option!',
						},
					]}
				>
					<Radio.Group>
						<Radio value='No, never heard about it'>
							No, never heard about it
						</Radio>
						<Radio value='Yes, I knew'>Yes, I knew</Radio>
						<Radio value='Yes, I have a few on my digital wallet'>
							Yes, I have a few on my digital wallet
						</Radio>
					</Radio.Group>
				</Form.Item>
				<Divider />
				<Form.Item
					name='platform'
					label='What would be your favorite platform to play CarIOTA?'
					rules={[
						{
							required: true,
							message: 'Please select one option!',
						},
					]}
				>
					<Radio.Group>
						<Radio value='Mobile phone'>Mobile phone</Radio>
						<Radio value='Personal computer'>
							Personal computer
						</Radio>
						<Radio value='Console (PS4/5, XBox, Wii, etc.)'>
							Console (PS4/5, XBox, Wii, etc.)
						</Radio>
						<Radio value='Tablet'>Tablet</Radio>
					</Radio.Group>
				</Form.Item>
				<Divider />
				<Form.Item
					name='functionality'
					label='What other functionality would you like to see in the game?'
					rules={[
						{
							required: true,
							message: "Please don't leave blank",
						},
					]}
				>
					<Input type='textarea' />
				</Form.Item>
				<Divider />
				<Form.Item
					name='comments'
					label='Please leave your comments:'
					rules={[
						{
							required: true,
							message: "Please don't leave blank",
						},
					]}
				>
					<Input type='textarea' />
				</Form.Item>
			</Form>
		</Modal>
	);
};

export default FormFeedback;
