import React from 'react';
import { View,Text,StyleSheet } from 'react-native';

const TripTwo=(props)=>{

    //return starts here.........
    return (
        <React.Fragment>
            <View style={styles.container}>
                <Text>
                    HEY RIDER NOW GOES TO VENDOR.....
                </Text>
            </View>
        </React.Fragment>
    );
    //return ends here...........

}//.......................

const styles=StyleSheet.create({
    container:{
        flex:1
    }
});

export default TripTwo;