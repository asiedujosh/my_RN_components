/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import {launchImageLibrary} from 'react-native-image-picker';

const App = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [base64Image, setBase64Image] = useState(null);

  // Function to open image library
  // Function to open image library and get base64
  const openImageLibrary = () => {
    const options = {
      mediaType: 'photo',
      quality: 1,
      includeBase64: true, // Ensure we get the base64 data
    };

    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        const source = {uri: response.assets[0].uri};
        setSelectedImage(source); // Set image preview
        setBase64Image(response.assets[0].base64); // Set base64 data
      }
    });
  };

  const handleSubmit = () => {
    console.log(base64Image);
  };

  return (
    <View>
      <Pressable
        style={{
          height: 50,
          width: 300,
          backgroundColor: 'green',
          alignItems: 'center',
          paddingVertical: 10,
        }}
        onPress={openImageLibrary}>
        <Text style={{color: '#fff', fontSize: 20}}>Hello welcome to test</Text>
      </Pressable>
      {selectedImage && (
        <Image
          source={selectedImage}
          style={{width: 200, height: 200, marginTop: 20}}
        />
      )}
      <Pressable
        style={{
          height: 50,
          width: 300,
          backgroundColor: 'red',
          alignItems: 'center',
          paddingVertical: 10,
          marginTop: 10,
        }}
        onPress={handleSubmit}>
        <Text style={{color: '#fff', fontSize: 20}}>Play</Text>
      </Pressable>
    </View>
  );
};

export default App;
