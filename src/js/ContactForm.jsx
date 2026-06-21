import React from 'react';
import { Button, ConfigProvider, Form, Input, message } from 'antd';
import {
  MailOutlined,
  MessageOutlined,
  SendOutlined,
  UserOutlined
} from '@ant-design/icons';
import '../css/ant-contact.css';

const { TextArea } = Input;

function ContactForm() {
  const [form] = Form.useForm();
  const [messageApi, contextHolder] = message.useMessage();

  const submitForm = async values => {
    try {
      window.emailjs?.init('Hrg8hqQiqNUHEGlgf');
      await window.emailjs.send(
        'service_ga3651o',
        'template_8lfbjzq',
        { ...values, message: values.message || 'No message provided' },
        'Hrg8hqQiqNUHEGlgf'
      );
      messageApi.success('Message sent successfully! 🚀');
      form.resetFields();
    } catch {
      messageApi.error('Failed to send message. Please try again.');
    }
  };

  return (
    <ConfigProvider theme={{ token: { colorPrimary: '#0564bd', borderRadius: 10 } }}>
      {contextHolder}
      <div className="ant-contact-form">
        <Form form={form} layout="vertical" onFinish={submitForm} requiredMark={false}>
          <div className="ant-contact-form__row">
            <Form.Item name="name" label="Your Name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input prefix={<UserOutlined />} placeholder="Your Name" />
            </Form.Item>
            <Form.Item name="email" label="Your Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
              <Input prefix={<MailOutlined />} placeholder="Your Email" />
            </Form.Item>
          </div>
          <Form.Item name="subject" label="Subject" rules={[{ required: true, message: 'Please enter a subject' }]}>
            <Input prefix={<MessageOutlined />} placeholder="Subject" />
          </Form.Item>
          <Form.Item name="message" label="Message (Optional)">
            <TextArea placeholder="Message (Optional)" rows={4} maxLength={400} showCount />
          </Form.Item>
          <div className="ant-contact-form__actions">
            <Button type="primary" htmlType="submit">Send</Button>
          </div>
        </Form>
      </div>
    </ConfigProvider>
  );
}

export default ContactForm;
