import {useState, useEffect} from 'react';
import { Image, StyleSheet, Platform,Text,View, ScrollView, TextInput, TouchableOpacity, Modal, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SQLite from 'expo-sqlite';


export default function HomeScreen() {

  const [modalVisible, setModalVisible] = useState(false);

  const db = SQLite.openDatabaseAsync('CourseDb.db');
  

  return (
    <SafeAreaView>
      <ScrollView>
    <View style={styles.container}>

      <Text style={styles.headerText}>MY GPA</Text>
      <Text style={styles.headerSubText}>Welcome back!</Text>
      <View style={styles.statPart}>

      <View style={styles.stat}>
        <Text style={styles.statHeader}>15</Text>
        <Text style={styles.statSubHeader}>CGPA</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.statHeader}>15</Text>
        <Text style={styles.statSubHeader}>Cr Hrs</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.statHeader}>15</Text>
        <Text style={styles.statSubHeader}>Courses</Text>
      </View>

      <View style={styles.stat}>
        <Text style={styles.statHeader}>15</Text>
        <Text style={styles.statSubHeader}>Courses</Text>
      </View>

      </View>

    <View>
      <TextInput placeholder='SEARCH COURSE' style={styles.searchBar} />
    </View>

    <TouchableOpacity style={styles.addBtn} onPress={() => setModalVisible(true)}>
      <Text >+ ADD COURSE</Text>
    </TouchableOpacity>

    <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        
        onRequestClose={() => {
          
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Enter Course Details!</Text>
            <TextInput placeholder='Course Name' style={styles.searchBar2}/>
            <TextInput placeholder='Credit Hour' style={styles.searchBar2} keyboardType='numeric'/>
            <TextInput placeholder='Grade (A-F)' style={styles.searchBar2}/>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Cancel</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              >
              <Text style={styles.textStyle}>Add</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      

    </View>

    
    
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container:{
      margin:15,
      
    },

    headerText: {
      fontSize: 30, 
      fontWeight: 'bold',
      color: '#36454F'
    },

    headerSubText:{
      fontSize:20,
    },

    statHeader:{
      fontSize: 50, 
      fontWeight: 'bold',
      color: '#36454F',
      
    },

    statSubHeader:{
      fontSize: 20, 
      fontWeight: 'bold',
      color: '#36454F'
    },

    stat:{
      width: 170,
      height: 120,
      backgroundColor: '#ffffff',
      borderRadius: 15,
      margin: 5,
      
      
    },

    statPart:{
      flexDirection: 'row',
      justifyContent: 'center',
      flexWrap: 'wrap'
    },

    searchBar:{
      width: 350,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 40,
      fontSize: 15,
      padding: 10,
      marginTop: 15
    },

    searchBar2:{
      width: 250,
      height: 50,
      backgroundColor: '#F0F0F0',
      borderRadius: 10,
      fontSize: 15,
      padding: 10,
      marginTop: 15
    },

    addBtn:{
      alignItems: 'center',
      width: 350,
      height: 50,
      backgroundColor: 'white',
      fontSize: 15,
      justifyContent: 'center',
      marginTop: 15
    },



    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      
      width: 300,
      height: 500,
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
});

