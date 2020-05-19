import React from 'react'

import { Form, Input, Select, Button } from 'antd';
import 'antd/dist/antd.css'
const { Option } = Select;

const PLUS = 'plus'
const MINUS = 'minus'

class PriceInput extends React.Component {

  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps
      && (
        nextProps.value.number !== prevState.number
        || nextProps.value.currency !== prevState.currency
      )
    ) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.number !== nextState.number
  }

  constructor(props) {
    super(props);

    const value = props.value || {};
    this.state = {
      number: value.number || 0,
      currency: value.currency || 'rmb',
    };
  }

  handleNumberChange = e => {
    const number = parseInt(e.target.value || 0, 10);
    if (Number.isNaN(number)) {
      return;
    }
    // if (!('value' in this.props)) {
    //   this.setState({ number });
    // }
    this.triggerChange({ number });
  };

  handleCurrencyChange = currency => {
    // if (!('value' in this.props)) {
    //   this.setState({ currency });
    // }
    this.triggerChange({ currency });
  };

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const onChange = this.props.onChange;
    if (onChange) {
      onChange(Object.assign({}, this.state, changedValue));
    }
  };

  render() {
    console.log('PriceInput render')
    const { size } = this.props;
    const state = this.state;
    return (
      <span>
        <Input
          type="text"
          size={size}
          value={state.number}
          onChange={this.handleNumberChange}
          style={{ width: '65%', marginRight: '3%' }}
        />
        <Select
          value={state.currency}
          size={size}
          style={{ width: '32%' }}
          onChange={this.handleCurrencyChange}
        >
          <Option value="rmb">RMB</Option>
          <Option value="dollar">Dollar</Option>
        </Select>
      </span>
    );
  }
}

class AMount extends React.Component {

  state = {
    count: 0
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.count !== nextState.count
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    // Should be a controlled component.
    if ('value' in nextProps
      && (
        nextProps.value.count !== prevState.count
      )
    ) {
      return {
        ...(nextProps.value || {}),
      };
    }
    return null
  }

  handleClick (type) {
    let count = this.state.count
    switch (type) {
      case PLUS:
        count++
        break;
      case MINUS:
        count--
        break;
    }
    // this.setState({
    //   count
    // })

    this.triggerChange({ count })
  }

  triggerChange = changedValue => {
    // Should provide an event to pass value to Form.
    const doChange = this.props.doChange;
    if (doChange) {
      doChange(Object.assign({}, this.state, changedValue));
    }
  }
  
  render () {
    console.log('amount render')
    return (
      <div>
        <Button type="primary" shape="circle" icon="plus" onClick={this.handleClick.bind(this, PLUS)} />
        <span>{this.state.count}</span>
        <Button type="primary" shape="circle" icon="minus" onClick={this.handleClick.bind(this, MINUS)} />
      </div>
    )
  }


}

class Demo extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      callback();
      return;
    }
    callback('Price must greater than zero!');
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item label="Price">
          {getFieldDecorator('price', {
            initialValue: { number: 0, currency: 'rmb' },
            rules: [{ validator: this.checkPrice }],
          })(<PriceInput />)}
        </Form.Item>
        <Form.Item>
        {getFieldDecorator('amount', {
          initialValue: { count: 0 },
          trigger: 'doChange'
        })(<AMount />)}
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedDemo = Form.create({ name: 'customized_form_controls' })(Demo);

export default WrappedDemo;