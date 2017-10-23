import React, { Component } from 'react';
import { View, Modal, Text, TouchableHighlight, TextInput, Button, ToastAndroid } from 'react-native';
import { FormLabel, FormInput } from 'react-native-elements';
import { styles } from './styles.js';

export default class ModalExample extends Component {

  constructor(props) {
    // Only use if you need to use props in the constructor
    super(props);     
    this.state = {
      name: '',
      price: 0,
    };
  }

  submitForm(name, price){
    // Validate
    if (name != '' && price > -1){
      console.log("Info: " + name + " -$" + price);
      this.props.addEntry(name, price);
      this.state.name = '';
      this.state.price = 0;
      this.props.modalControl(false);
    }else{
      ToastAndroid.showWithGravity("Debe Llenar Todos Los Campos.", 
        ToastAndroid.SHORT, 
        ToastAndroid.CENTER);
    }
  }

  //let openModal = this.props.open;
  //let closeModal = this.props.close;

  render() {

    //console.log("Inside Modal Show: " + this.props.visible);

    return (
      <View style={{marginTop: 22}}>
        <Modal
        animationType="slide"
        transparent={true}
        visible={this.props.visible}
        onRequestClose={() => { this.props.modalControl(false) }} >

          <View style={styles.centerView}>
            <View style={styles.formulario}>
                <Text style={{margin:10, textAlign: 'center'}}>
                Agregar Gasto ({this.state.name + " -$" + this.state.price})
                </Text>

                <FormLabel>Nombre del gasto</FormLabel>
                <FormInput
                  placeholder="Gasolina, famacia, etc."
                  onChangeText={(name) => this.setState({name})}/>

                <FormLabel>Monto del gasto</FormLabel>
                <FormInput 
                  placeholder="$$$"
                  onChangeText={(price) => this.setState({price})}/>

                <View style={styles.formSubmit}>

                  <TouchableHighlight
                    onPress={ () => { this.submitForm(this.state.name, this.state.price) } }
                    style={styles.submitButton}>

                    <Text style={{margin:4, textAlign: 'center', color: 'white'}}>
                      Agregar
                    </Text>
                  </TouchableHighlight>

                  <TouchableHighlight
                    onPress={() => { this.props.modalControl(false) }}
                    style={styles.cancelButton}>

                    <Text style={{margin:4, textAlign: 'center', color: 'white'}}>
                      Cancelar
                    </Text>

                  </TouchableHighlight>
                </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}
