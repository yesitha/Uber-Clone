import { FlatList, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import NavigateCard from '../component/NavigateCard';
import { useSelector } from 'react-redux'
import { selectTravelTimeInformation } from '../slices/navSlice'

const data=[
    {
        id:"Uber-X-123",
        title:"Uber X",
        multiplier:1,
        image:"https://links.papareact.com/3pn",
    },
    {
        id:"Uber-XL-455",
        title:"Uber XL",
        multiplier:1.2,
        image:"https://links.papareact.com/5w8",
    },
    {
        id:"Uber-LUX-789",
        title:"Uber LUX",
        multiplier:1.75,
        image:"https://links.papareact.com/7pf",
    },
]
const SURGE_CHARGE_RATE=4.5;
const RideOptionsCard = () => {
    const navigation= useNavigation();
    const [selected,setSelected]=useState(null);
    const getTravelTime=useSelector(selectTravelTimeInformation);
  return (
    <SafeAreaView style={[{flex:1},tw`bg-white flex-grow`]}>
        <View>
         <TouchableOpacity 
         onPress={()=>navigation.navigate(NavigateCard)}
         style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}>
        <Icon name="chevron-left" type="fontawesome"/>    
        </TouchableOpacity>   
        <Text style={tw`text-center py-4 text-xl`}>Select a Ride-{getTravelTime?.distance?.text}</Text>
        </View>
       <FlatList data={data} keyExtractor={(item)=>item.id}
       renderItem={({item:{id,title,multiplier,image},item})=>(
        <TouchableOpacity 
            onPress={()=>setSelected(item)}
            style={tw`flex-row justify-between items-center px-10 ${id===selected?.id&&"bg-gray-200"}`}>
            <Image
            style={{width:100, height:100, resizeMode:'contain'}}
            source={{uri:image}}
            />
            <View style={tw`ml-6 `}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>{getTravelTime?.duration?.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
            {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'LKR',
            }).format(getTravelTime?.duration.value*multiplier*SURGE_CHARGE_RATE/100)}
            

            </Text>
        </TouchableOpacity>
       )}
         
       />
       <View>
        <TouchableOpacity disabled={!selected} 
        style={tw`bg-black py-3 m-3 ${
            !selected&&'bg-gray-300'
        }`}>
            <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
       </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})