import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  StatusBar,
  ToastAndroid,
  ScrollView
} from 'react-native';
import { Icon, List, ListItem } from 'react-native-elements';
import { styles } from './styles.js';
import { mockupData } from './mockup-data.js';
import Formulario from './formulario.js';
import ActionBar from 'react-native-action-bar';

const api_url = "http://192.168.0.23:3001";
//const api_url = "http://10.0.2.2:3001";

export default class mainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      displayForm: false,
      data: []
    }
  }

  controlModal(visible) {
    this.setState({
      displayForm: visible,
    });
  }

  componentDidMount() {
    fetch(api_url + '/endpoint/read')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  addEntry(name, price){
    fetch(api_url + '/endpoint/create', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        price: price,
      })
    }).then((response) => response.text())
    .then((response) => { 
        console.log("Server Response:" + response); 
        this.componentDidMount();
        ToastAndroid.showWithGravity(response, 
            ToastAndroid.SHORT, 
            ToastAndroid.BOTTOM);
      })
    .catch((error) => { 
        console.error(error); 
      });

    /*
    * On Memory add
    */
    /* console.log("Received on main window: " + name + price);
    console.log(this.state.data);
    let len = this.state.data.length;
    if (len > 0){
        tmp = {'id': (this.state.data[len-1].id + 1),'name': name, 'price': price};
    }else{
        tmp = {'id': 0,'name': name, 'price': price};
    }

    this.state.data.push(tmp);
    console.log(this.state.data);*/
  }

  removeEntry(_id){
    fetch(api_url + '/endpoint/delete?id='+ _id)
      .then(() => { 
        this.componentDidMount(); 
        ToastAndroid.showWithGravity('Entrada Eliminada', 
          ToastAndroid.SHORT, 
          ToastAndroid.BOTTOM);
      })
      .catch((error) => { 
        console.error(error); 
      });

    /* 
     * On-Memory Delete 
     */
    /*console.log(id);
    toDelete = new Set([id]);
    newArray = this.state.data.filter(obj => !toDelete.has(obj.id));
    this.setState({data: newArray});
    console.log(newArray);
    console.log(this.state.data);*/
  }

  render(){
    return(
    <View>

      <StatusBar
        translucent={false}
        hidden={false}
      />

      <ActionBar
          containerStyle={styles.bar}
          title={''}
          rightText={''}
          leftBadge={''}
          rightIcons={[
              {
                name: 'plus',
                onPress:() => {this.controlModal(true);},
              },
          ]}
      />

      <ScrollView style={{ marginBottom:100}}>
        <List style={styles.listClass}>{
          this.state.data.map((item, i) =>
            <ListItem
              key={i}
              
              title={item.name}
              
              leftIcon={{name: 'history'}}

              hideChevron={false}

              rightIcon={
                <TouchableOpacity
                  style={styles.deleteFrame}
                  onPress={() => this.removeEntry(item._id)}>

                  <Icon
                    style={styles.deleteIcon}
                    size={26}
                    name='delete'
                  />

                </TouchableOpacity>
              }

              subtitle={
                <View style={styles.subtitleView}>
                  <Text style={styles.ratingText}>-${item.price}</Text>
                </View>
              }
            />
          )
        }
        </List>

        <Formulario
          visible={this.state.displayForm}
          modalControl={this.controlModal.bind(this)}
          addEntry={this.addEntry.bind(this)}
        />

      </ScrollView>
    </View>
  );}
}
