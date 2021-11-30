import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import './login.css';

interface FormFields {
  password: string;
}

interface Props {
  form: WrappedFormUtils<FormFields>;
}

class LoginForm extends Component<Props> {
  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values.password);
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="login-page">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入登陆密码' }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              登陆
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const WrappedLoginForm = Form.create({
  name: 'login'
})(LoginForm);

export default WrappedLoginForm;
