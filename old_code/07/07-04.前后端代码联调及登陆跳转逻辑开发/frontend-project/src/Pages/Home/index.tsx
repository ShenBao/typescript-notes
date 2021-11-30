import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button } from 'antd';
import axios from 'axios';
import './style.css';

class Home extends Component {
  state = {
    loaded: false,
    isLogin: true
  };

  componentDidMount() {
    axios.get('/api/isLogin').then(res => {
      if (!res.data?.data) {
        this.setState({
          isLogin: false,
          loaded: true
        });
      }
    });
  }

  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className="home-page">
            <Button type="primary" style={{ marginLeft: '5px' }}>
              爬取
            </Button>
            <Button type="primary">展示</Button>
            <Button type="primary">退出</Button>
          </div>
        );
      }
      return null;
    }
    return <Redirect to="/login" />;
  }
}

export default Home;
