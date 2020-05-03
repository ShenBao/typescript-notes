import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Button, message } from 'antd';
import ReactEcharts from 'echarts-for-react';
import request from '../../request';
import moment from 'moment';
import './style.css';

interface CourseItem {
  title: string;
  count: number;
}

interface DataStructure {
  [key: string]: CourseItem[];
}

interface State {
  loaded: boolean;
  isLogin: boolean;
  data: DataStructure;
}

class Home extends Component {
  state: State = {
    loaded: false,
    isLogin: true,
    data: {}
  };

  componentDidMount() {
    request.get('/api/isLogin').then(res => {
      const data: boolean = res.data;
      if (!data) {
        this.setState({
          isLogin: false,
          loaded: true
        });
      } else {
        this.setState({
          loaded: true
        });
      }
    });

    request.get('/api/showData').then(res => {
      const data = res.data;
      if (data) {
        this.setState({ data });
      }
    });
  }

  handleLogoutClick = () => {
    request.get('/api/logout').then(res => {
      const data: DataStructure = res.data;
      if (data) {
        this.setState({
          isLogin: false
        });
      } else {
        message.error('退出失败');
      }
    });
  };

  handleCrowllerClick = () => {
    request.get('/api/getData').then(res => {
      const data: boolean = res.data;
      if (data) {
        message.success('爬取成功');
      } else {
        message.error('退出失败');
      }
    });
  };

  getOption: () => echarts.EChartOption = () => {
    const { data } = this.state;
    const courseNames: string[] = [];
    const times: string[] = [];
    const tempData: {
      [key: string]: number[];
    } = {};
    for (let i in data) {
      const item = data[i];
      times.push(moment(Number(i)).format('MM-DD HH:mm'));
      item.forEach(innerItem => {
        const { title, count } = innerItem;
        if (courseNames.indexOf(title) === -1) {
          courseNames.push(title);
        }
        tempData[title] ? tempData[title].push(count) : (tempData[title] = [count]);
      });
    }
    const result: echarts.EChartOption.Series[] = [];
    for (let i in tempData) {
      result.push({
        name: i,
        type: 'line',
        data: tempData[i]
      });
    }
    return {
      title: {
        text: '课程在线学习人数'
      },
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: courseNames
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: times
      },
      yAxis: {
        type: 'value'
      },
      series: result
    };
  };

  render() {
    const { isLogin, loaded } = this.state;
    if (isLogin) {
      if (loaded) {
        return (
          <div className="home-page">
            <div className="buttons">
              <Button type="primary" style={{ marginRight: '25px' }} onClick={this.handleCrowllerClick}>
                爬取
              </Button>
              <Button type="primary" onClick={this.handleLogoutClick}>
                退出
              </Button>
            </div>
            <ReactEcharts option={this.getOption()} />
          </div>
        );
      }
      return null;
    }
    return <Redirect to="/login" />;
  }
}

export default Home;
