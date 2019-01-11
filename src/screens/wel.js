const React = require('react');
const { Component } = require('react');
const { View, Text, Platform, TouchableHighlight } = require('react-native');

const testIDs = require('../testIDs');
const Button = require('./Button');

const { Navigation } = require('react-native-navigation');

class wel extends Component {
    static get options() {
        return {
            _statusBar: {
                backgroundColor: 'transparent',
                style: 'dark',
                drawBehind: true
            },
            topBar: {
                title: {
                    text: 'My Screen'
                },
                largeTitle: {
                    visible: false,
                },
                drawBehind: true,
                visible: false,
                animate: false
            }
        };
    }

    render() {
        return (
            <View style={styles.bar}>
                <View style={{width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center'}}/>

                <View style={{width: 2, height: 2, borderRadius: 1, backgroundColor: 'red', alignSelf: 'center'}}/>
            </View>
        );
    }

}
module.exports = wel;

const styles = {
    root: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e8e8e8',
    },
    bar: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#e8e8e8',
        justifyContent: 'space-between'
    },
    h1: {
        fontSize: 24,
        textAlign: 'center',
        margin: 30
    },
    footer: {
        fontSize: 10,
        color: '#888',
        marginTop: 10
    }
};
