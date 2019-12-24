import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {Layout} from 'antd'

import Home from './components/Home'

const {Header, Sider, Content} = Layout


class App extends React.Component() {
  render() {
    return (
      <Layout className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </Header>
        <Sider>
        </Sider>
        <Content>
          <Switch>
            <Route />
          </Switch>
        </Content>
      </Layout>
    )
  }
}

export default App;
