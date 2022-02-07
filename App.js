import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [ 
        {name: 'milk'},
        {name: 'coffee'},
        {name: 'orange'},
        {name: 'bread'},
    ],
    ivalue: '',
    searchText: "",
    filteredData: [],
    display: 'none',
    isvisible: false,
  }
}
haha = () => {
  this.setState({isvisible: true});
}
addnew = () => {
      const newlist = [...this.state.data];
      newlist.push({name: this.state.ivalue});
      this.setState({data: newlist});
 }

search = (searchText) => {
  this.setState({searchText: searchText});

  let filteredData = this.state.data.filter(function (item) {
    return item.name.includes(searchText);
  });

  this.setState({filteredData: filteredData});
  if(this.state.filteredData && this.state.filteredData.length < 0)
  {
    alert("No such Data in the List...");
  }
}; 
  render(){
  return (
    <>
        <View style={{marginTop:15, flexDirection:'row'}}>
          <TextInput
              style={{borderColor:'black',borderWidth:2, marginLeft:15, width:270}}
              placeholder="Search"
              onChangeText={(text) => this.search(text)}
              />

          <TouchableOpacity>
            <Text 
            style={{fontSize:25,
            color:'white',
            backgroundColor:'blue',
            marginLeft:50, 
            width:40,
            textAlign:'center'}} 
            //onPress={this.addnew}
            onPress={this.haha}>+
            </Text>
            </TouchableOpacity>
        </View>

        <View>
        <FlatList
          //data = {this.state.data}
          data={this.state.filteredData && this.state.filteredData.length > 0 ? this.state.filteredData : this.state.data}
          renderItem={({item}) => 
          <Text style={styles.fx}>{item.name}</Text>}
        /> 
        </View>

        <View style = {styles.container}>
            <Modal transparent = {false}
               visible = {this.state.isvisible}
               onRequestClose = {() => { console.log("Modal has been closed.") } }>
               
               <View style = {styles.modal}>
                  <TouchableOpacity onPress = {() => {
                    this.addnew();
                     this.setState({isvisible: false});
                    }}>
                    <TextInput
                    style={{marginTop:30,borderColor:'black',borderWidth:2, marginLeft:15, width:250}}
                    placeholder="Enter Name to Add in List"
                    onChangeText={(text) => this.setState({ ivalue: text })}
                    /> 
                     <Text style = {styles.text}>Back to List</Text>
                  </TouchableOpacity>
               </View>
            </Modal>
      </View>
    </>  
  )};
}
export default App;

const styles = StyleSheet.create({
  tx: {
    flex:1,
    alignItems:'center',
    justifyContent:'center',
  },
  fx: {  
    marginLeft:15,
    marginRight:15,
    marginTop:10,
    backgroundColor:'lightyellow',
    borderColor:'black',
    borderWidth:2,
    borderRadius:10,
    padding:10,
    fontSize: 23,
    color:'blue',
    fontWeight: '400',
  },
  container: {
    alignItems: 'center',
    textAlign:'center',
 },
 modal: {
    marginTop: 15,
    alignItems: 'center',
    alignSelf:'center',
    backgroundColor: 'smokewhite',
    height:200,
    width:400,
 },
 text: {
    color: 'black',
    marginTop: 20,
    fontSize: 20,
    color: 'white',
    textAlign:'center',
    fontWeight: 'bold',
    backgroundColor: 'black',
 }
});
