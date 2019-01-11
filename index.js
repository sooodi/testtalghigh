/** @format */

import {AppRegistry} from 'react-native';
import React from "react";
import App from './src/App';
import { createStackNavigator,createAppContainer } from "react-navigation";
import SecondScreen from "./src/SecondScreen";

const testtalghigh = props => {
    return <App navigation={props.navigation} />;
};

testtalghigh.navigationOptions = {
    title: "Home Screen"
};

const SimpleApp = createStackNavigator({
    Home: { screen: testtalghigh },
    SecondScreen: { screen: SecondScreen, title: "Second Screen" }
});
const hh = createAppContainer(SimpleApp);
AppRegistry.registerComponent("testtalghigh", () => hh);
