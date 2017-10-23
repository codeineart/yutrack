import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { Icon,List, ListItem } from 'react-native-elements';
import { styles } from './src/styles.js';
import MainPage from './src/mainPage.js';
import Modal from 'react-native-modal';


export default class Example extends Component {
    render() {
        return (
            <View style={styles.appContainer}>
              <MainPage></MainPage>
            </View>
        );
    }
}
