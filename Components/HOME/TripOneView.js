import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const TripOneView=(props)=>{

    //return starts here......
    return (
        <View style={styles.container}>
            <Text>TRIP ONE VIEW STARTS</Text>
        </View>
    );
    //return ends here........

}//.........................

const styles=StyleSheet.create({
    container:{
        flex:1
    }
});

export default TripOneView;