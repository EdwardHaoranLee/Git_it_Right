import React from 'react';
import { StyleSheet, Text, View, Button,FlatList, TouchableOpacity} from 'react-native';
import {VIDEO_DATA} from '../data/videoData.js';


const MenuScreen = props =>{

  const renderGridItem = (itemData) => {
    return(
      <TouchableOpacity 
        style={styles.gridItem}
        onPress={() => props.navigation.navigate({
          name:'Preview',
          params:{videoId: itemData.item.id}
          })
        
        }
          >
        <View>
          <Text style={styles.title}>{itemData.item.name}</Text>

        </View>
      </TouchableOpacity>
      

    )};

  return (
    <View style={styles.screen}>

      <Text> ~~ This is a Menu Screen ~~ </Text>
      <View>
        <FlatList 
          keyExtractor={(item, index) => item.id}
          data={VIDEO_DATA}
          renderItem={renderGridItem}
          numColumns={2}
        /> 
      </View>

      <Text> ~~ This is a Menu Screen ~~ </Text>

    </View>)
}


const styles = StyleSheet.create({
  screen: {
    flex:1,
    margin:20,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItem:{
    // flex:1,
    margin:10,
    height:100,
    width:150,
    padding:10,
    borderRadius:15,
    justifyContent:'space-between',
    // alignItems:'flex-end',
    backgroundColor:'lightblue'

  },
  title:{
    fontSize:18,
    color:"black"
  }

});

export default MenuScreen;