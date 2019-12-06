import React,{ useState } from 'react';
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native';
import { Slider } from 'react-native-elements';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';

//changing link checking imports....
import Color from '../Constants/Colors';
import AppLoading from '../Reusable/AppLoading';
import API from '../Constants/API';
import * as Types from '../Store/Types/types';

const Test=props=>{

    const [availState,setAvailState]=useState(useSelector(state=>state.request.available));
    const [appState,setAppState]=useState(1);//1 default
                                             //2 loading

    //redux state starts here......
    const dispatch=useDispatch();
    const available_RP=useSelector(state=>state.request.available);
    //redux state ends here........


    //Handle Request For ON starts here....
    const handleIssueON=async ()=>{

    }
    //Handle Request for OFF ends here......



    //Handle Issue OFF Starts here.......
    const handleIssueOff=async ()=>{

    }
    //Handle Issue OFF ends here.........


    //set oof on starts here.....
    const setOFF=()=>{
        setAvailState(1);
    }

    const setON=()=>{
        setAvailState(10);
    }
    //set off on ends here.......

    //Monitor status starts here......
    const monitorStatus=()=>{
        
        if(availState===1)
        {
            handleIssueOff();
        }
        else
        if(availState===10)
        {
            handleIssueON();
        }
    }
    //Monitor status ends here........


    //handling thumb bg color starts here.....
    const giveThumbBgColor=()=>{
        if(availState===1)
        {
            return "red";
        }
        else
        if(availState===10)
        {
            return "green";
        }
        else
        {
            return Color.welcomeBack;
        }
    }
    //handling thumb bg color ends here.......

    //return statement starts here.....
    return (
        <React.Fragment>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',paddingLeft:30,paddingRight:30 }}>



            {/* Top Title starts here...... */}
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Availability</Text>
            </View>
            {/* Top Title ends here........ */}



            
            <Slider
                value={availState}
                onSlidingComplete={monitorStatus}
                onValueChange={value =>setAvailState(value)}
                minimumValue={1}
                maximumValue={10}
                style={{width:'100%'}}
                thumbTouchSize={{width:160,height:160}}
                thumbStyle={{height:80,width:60,backgroundColor:giveThumbBgColor()}}
                trackStyle={{height:30}}
            />
            

            {/* On Off View Starts Here.... */}
            <View style={styles.onOffView}>
                <TouchableOpacity style={styles.onoffto} onPress={setOFF}>
                    <View style={{...styles.offView,backgroundColor:availState===1?'red':'gray'}}>
                        <Text style={styles.onOffText}>OFF</Text>
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.onoffto} onPress={setON}>
                    <View style={{...styles.onView,backgroundColor:availState===10?'green':'gray'}}>
                        <Text style={styles.onOffText}>ON </Text>
                    </View>
                </TouchableOpacity>
                
            </View>
            {/* On Of  View Ends Here...... */}


            </View>
        </React.Fragment>
    );
    //return statement ends here.......

}//.................

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },


    titleView:{
        width:'100%',
        padding:5,
        marginBottom:70,
        flexDirection:'row',
        justifyContent:'center'
    },

    titleText:{
        fontFamily:'roboto-regular',
        fontSize:25,
        color:Color.success
    },

    onOffView:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:30
    },


    onOffText:{
        fontFamily:'roboto-regular',
        fontSize:18,
        color:'white'
    },

    onoffto:{
        padding:5
    },

    onView:{
        padding:5
        
    },

    offView:{
        padding:7
    }
});

export default Test;