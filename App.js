import React, {Component} from 'react';
import {Dimensions, StyleSheet, Text, View, TouchableOpacity,Button, ScrollView, ToastAndroid } from 'react-native';
import tictactoe from './src/tictactoe';
import { render } from 'react-dom';


type  props= {};

export default class  App extends Component<props>{

constructor(props){
  super(props);

  tictactoe.start();

  this.state = {
    board: tictactoe.board,
    gameOver: tictactoe.gameover,
    valueApp: '',
    indexApp: '' 
    
  }
}


makePlay(index){
tictactoe.make_play(index)

this.indexApp = index  

this.setState({
  board: tictactoe.board,
  gameOver: tictactoe.gameover
})

}

Play(){

  /*ToastAndroid.show( this.indexApp + '', ToastAndroid.LONG); */  
  let nextGame = tictactoe.make_next_play(this.indexApp); 
  
  this.setState({is_updated:true}); 
  
  this.setState({
    board: tictactoe.board,
    gameOver: tictactoe.gameover
  })
  
  }



isGameOver(){
  if(this.state.gameOver) {
    ToastAndroid.show( 'VOCÊ GANHO:', ToastAndroid.LONG); 
  } 
}


  render(){
  return (
    <View style={styles.container}>
    
      {this.state.board.map((value, index) =>(
        <TouchableOpacity key= {index} style={styles.piece} 
        onPress={()=>{this.makePlay(index)}}>
         <Text style = {styles.pieceText}>
           {value}
         </Text>
         </TouchableOpacity>
        )) }


  {
    this.isGameOver()
  }


<View style={{ width: '90%',marginTop: 100 }}>
<Button
  title="Start Game"
  onPress={() => this.isStart()} />
</View>

<View style={{ width: '90%', marginTop: -20 }}>
<Button
  title="Make Game"  
  onPress={() => this.Play()} />
</View>
</View>


  );
 }

isStart(){
tictactoe.start();
this.setState({is_updated:true});

}

}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    backgroundColor: '#F5FCFF'
  },
piece:{
  width: Dimensions.get('window').width/3,
  height: Dimensions.get('window').width/3,
  backgroundColor: "#ddd",
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth:0.5,
  borderColor: '#111'


},
pieceText:{
  fontSize: 60

},

piece2Text:{
  fontSize: 50

}


});
