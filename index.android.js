/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { TabBar,Button } from 'antd-mobile';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'redTab',
      hidden: false,
    };
  }

  renderContent(pageText) {
    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>
          <View style={{ paddingTop: 60 }}>
            <Text>
            你已点击“{pageText}” tab， 当前展示“{pageText}”信息
              <Icon name="rocket" size={30}/>
              </Text>
          </View>


        </View>
    );
  }

  render() {
    return (
        <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={this.state.hidden}
        >
          <TabBar.Item
              title="生活"
              key="生活"
              icon={{uri:"https://facebook.github.io/react/img/logo_og.png" }}
              selectedIcon={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
              selected={this.state.selectedTab === 'blueTab'}
              badge={1}
              onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}
              data-seed="logId"
          >
            {this.renderContent('生活')}
          </TabBar.Item>
          <TabBar.Item
              icon={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
              selectedIcon={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
              title="口碑"
              key="口碑"
              badge={'new'}
              selected={this.state.selectedTab === 'redTab'}
              onPress={() => {
            this.setState({
              selectedTab: 'redTab',
            });
          }}
              data-seed="logId1"
          >
            {this.renderContent('口碑')}
          </TabBar.Item>
          <TabBar.Item
              icon={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
              selectedIcon={{uri:"https://facebook.github.io/react/img/logo_og.png"}}
              title="朋友"
              key="朋友"
              dot
              selected={this.state.selectedTab === 'greenTab'}
              onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
            });
          }}
          >
            {this.renderContent('朋友')}
          </TabBar.Item>
        </TabBar>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
