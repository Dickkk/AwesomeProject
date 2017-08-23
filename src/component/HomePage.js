/**
 * Created by chaoice3240 on 2017/8/23.
 */
import {connect} from 'react-redux';
import store from '../../redux/store.js';
import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'redTab',
            hidden: false,
        };
    }


    render() {
        return (
            <View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});
const mapStateToProps = function (store) {
    return {
        diclist: store.diclist
    };
};

export default connect(mapStateToProps)(HomePage);