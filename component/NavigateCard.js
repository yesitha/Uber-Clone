import { StyleSheet, Text, View,SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import {GOOGLE_MAPS_APIKEY} from '@env';
import { setDestination } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';
import{RideOptionsCard} from './RideOptionsCard';

import { Icon } from '@rneui/base';

const NavigateCard = () => {

    const dispatch= useDispatch();
    const navigation=useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Yesitha</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
        <GooglePlacesAutocomplete
        styles={{
          container:{
            backgroundColor:'white',
            paddingTop:20,
            flex:0,
          },
          textInput:{
            fontSize:18,
            backgroundColor:"#DDDDDF",
            borderRadius:0,
          },
          textInputContainer:{
          paddingHorizontal:20,
          paddingBottom:0,
        },
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(setDestination({
            
           location:details.geometry.location,
           description:data.description
          }));
         
          navigation.navigate('RideOptionsCard');
        }}
        minLength={2}
        query={{
          key:GOOGLE_MAPS_APIKEY,
          language:'en',
        }}
        placeholder='Where to?'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      
        />
        </View>
        <NavFavorites/>
      </View>
      <View style={tw`flex-row  bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
        onPress={()=>navigation.navigate('RideOptionsCard')}
        style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type='font-awesome' color="white" size={16}/>
            <Text style={tw`text-white text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
            <Icon name="fast-food-outline" type='ionicon' color="black" size={16}/>
            <Text style={tw` text-center`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const styles = StyleSheet.create({})