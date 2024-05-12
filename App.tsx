// import React, { useState } from 'react';
// import {
//   Alert,
//   Button,
//   Image,
//   Text,
//   TextInput,
//   View,
//   ToastAndroid,
// } from 'react-native';

// export default function App() {
//   const [text, setText] = useState('');

//   const checkPalindrome = () => {
//     const processedText = text.toLowerCase().replace(/[^a-z0-9]/gi, '');
//     const reversedText = processedText.split('').reverse().join('');

//     if (processedText === reversedText) {
      
//       ToastAndroid.show('This is a Palindrome!', ToastAndroid.SHORT);
//       Alert.alert('Palindrome!', 'This is a palindrome.', [{ text: 'OK' }]);
//     } else {
//       ToastAndroid.show('This is Not a Palindrome.', ToastAndroid.SHORT);
//       Alert.alert('Not a Palindrome!', 'This is not a palindrome.', [{ text: 'OK' }]);
//     }
//   };

//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>YOWWW, BRROOOO</Text>
//       <Image
//         source={{
//           uri: 'https://png.pngtree.com/png-clipart/20230426/original/pngtree-instagram-icon-instagram-logo-picture-image_3584852.png',
//         }}
//         style={{ width: 200, height: 200 }}
//       />
//       <Text>Palindrome Validator</Text>
//       <TextInput
//         style={{
//           borderWidth: 1,
//           borderColor: 'black',
//           width: 200,
//           height: 40,
//           padding: 10,
//           margin: 10,
//           borderRadius: 10,
//         }}
//         placeholder="Input Text"
//         value={text}
//         onChangeText={setText}
//       />
//       <Button title="Validate" onPress={checkPalindrome} />
//     </View>
//   );
// }



// import { FlatList, ScrollView, Text} from 'react-native' ;

// export default function App(){
// const data =[
//   {id: 1,name: 'Dape'},
//   {id: 2,name: 'Jaden'},
//   {id: 3,name: 'Vin'},
//   {id: 4,name: 'Rachel'},
//   {id: 5,name: 'V'},
//   {id: 6,name: 'Medsu'},
//   {id: 7,name: 'Cecyl'},
//   {id: 8,name: 'Derik'},
//   {id: 9,name: 'Ujang'},
//   {id: 10,name: 'Alex'},
//   {id: 11,name: 'Dosmon'},
//   {id: 12,name: 'Bailey'},
// ];
// const renderItem =({item}: {item: {id: number; name: string}}) => {
//  return <Text
//  style={{
//   backgroundColor:'white',
//   fontSize: 20,
//   padding: 10,
//   borderRadius:50,
//   shadowOffset: {width: 0, height: 2},
//   shadowOpacity: 0.8,
//   shadowRadius: 10,
//   elevation: 5,
//   margin: 5,
//  }}>
//   {item.name}
//   </Text>
// };

// return (
//   <ScrollView>
//     <FlatList
//     data={data}
//     renderItem={renderItem}
//     keyExtractor={item=>item.id.toString()}
//   />
//   </ScrollView>
// );
// }


import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, SafeAreaView } from 'react-native';
const data = [
  { id: '1', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '2', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '3', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '4', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '5', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '6', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '7', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '8', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '9', title:  'P1 Car', price: '$20.000 usd', imageUrl: 'https://i.pinimg.com/236x/c7/aa/d9/c7aad99eb9db94c15c3afdbd5b241545.jpg' },
  { id: '10', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '11', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '12', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '13', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '14', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '15', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '16', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '17', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '18', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '19', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '20', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
  { id: '21', title: 'McLaren', price: '$15.000 usd', imageUrl: 'https://i.pinimg.com/564x/0d/bd/49/0dbd4965228a9aef6ea1a13868ef6f8b.jpg' },
]

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.largeHeaderContainer}>
        <Image source={{ uri: 'https://i.pinimg.com/236x/2e/b7/4d/2eb74d4abb12e0af50aa4ad31731a0d6.jpg' }} style={styles.largeHeaderImage} />
        <Text style={styles.largeHeaderText}>Sorum Mobil</Text>
      </View>
      
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
        numColumns={3}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  largeHeaderContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

  },
  largeHeaderImage: {
    width: 50, 
    height: 50, 
    marginRight: 20,
  },
  largeHeaderText: {
    fontSize: 24, 
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 8,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#888',
    marginTop: 4,
    textAlign: 'center',
  },
});

