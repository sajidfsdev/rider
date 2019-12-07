import React,{ useState,useEffect } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import Color from '../Constants/Colors';

let tim=50;
let int=null;

const ShrinkingButton=(props)=>{

    //state management starts here....
    const [timer,setTimer]=useState(50);
    //state management ends here......


    //use effect starts here.....
    useEffect(()=>{
         int=setInterval(()=>{
            if(tim>1)
            {
            setTimer(tim-1);
            tim--;
            console.log("timer cont");
            }
            else
            {
                clearInterval(int);
                setTimer(50);
                console.log("ended");
            }
            
        },1000);
    },[]);
    //use effect edsnhere/........

    return (
        <React.Fragment>
            {/* Accept Rider Btn Starts Here...... */}
            <TouchableOpacity style={styles.to} activeOpacity={0.5}>
                <View style={styles.parentView}>
                    <View style={{...styles.childView,width:((timer*2)+"%")}}
                    >
                        <Text style={styles.toText}>ACCEPT</Text>
                    </View>
                </View>
            </TouchableOpacity>
            {/* Accept Ride Btn Ends Here......... */}
        </React.Fragment>
    );
    
}//.............................

const styles=StyleSheet.create({
    to:{
        width:'100%'
    },


    parentView:{
        width:'100%',
        padding:20,
        display:'flex',
        flexDirection:'row',
        justifyContent:'center'
    },


    childView:{
        backgroundColor:Color.success,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },

    toText:{
        fontFamily:'roboto-regular',
        color:'white',
        fontSize:15
    }
});

export default ShrinkingButton;