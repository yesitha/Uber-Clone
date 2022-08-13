import { StyleSheet, Text, View,SafeAreaView,Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../component/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import{GOOGLE_MAPS_APIKEY} from "@env"
import { selectOrigin, setDestination,setOrigin } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import NavFavorites from '../component/NavFavorites';



const HomeScreen = () => {
   const dispatch = useDispatch();
   
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
        style={{width: 100, height: 100 ,resizeMode:'contain'}}
        source={{

          uri:"https://links.papareact.com/gzs",
        }}/>
       
        <GooglePlacesAutocomplete
        styles={{
          container:{
            flex:0,
          },
          textInput:{
            fontSize:18,
          }
        }}
        fetchDetails={true}
        returnKeyType={"search"}
        enablePoweredByContainer={false}
        onPress={(data, details = null) => {
          dispatch(setOrigin({
            
           location:details.geometry.location,
           description:data.description
          }));
          dispatch(setDestination(null));
          
        }}
        minLength={2}
        query={{
          key:GOOGLE_MAPS_APIKEY,
          language:'en',
        }}
        placeholder='Where from?'
        nearbyPlacesAPI='GooglePlacesSearch'
        debounce={400}
      
        
        
        
        />
      <NavOptions/> 
      <NavFavorites/> 
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})

