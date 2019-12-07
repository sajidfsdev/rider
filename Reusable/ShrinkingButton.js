import React,{ useState,useEffect } from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Alert } from 'react-native';
import Color from '../Constants/Colors';
import { useDispatch,useSelector } from 'react-redux';
import * as Types from '../Store/Types/types';
import axios from 'axios';
import API from '../Constants/API';

let tim=50;
let int=null;

const ShrinkingButton=(props)=>{

    //state management starts here....
    const [timer,setTimer]=useState(50);
    const dispatch=useDispatch();
    const requestId=useSelector(state=>state.request.id);
    const riderLat=useSelector(state=>state.request.latitude);
    const riderLong=useSelector(state=>state.request.longitude);
    const riderId=useSelector(state=>state.auth.id);
    const token_RP=useSelector(state=>state.auth.token);
    //state management ends here......


    //handle approve request starts here.....
    const handleApproveRequest=async ()=>{

                clearInterval(int);
                setTimer(50);
                tim=50;
                dispatch({type:Types.SET_BUFFERING_CODE});

                //config starts........
                const config={
                    headers:{
                        'Content-Type':'application/json',
                        'r-auth-humtoken':token_RP
                    }
                };

                //body starts here....
                const body=JSON.stringify({requestId,riderLat,riderLong,riderId});

                //try catch starts here..................
                try
                {
                    const res=await axios.post(API.server+"/rider/request/approveRequest",body,config);

                    if(res)
                    {
                        dispatch({
                            type:Types.SET_TRIP_ONE
                        });
                    }
                    else
                    {
                        dispatch({
                            type:Types.RIDE_ACCEPT_TIME_OVER
                        });

                        Alert.alert("FAILED","NETWORK ERROR");
                    }
                }
                catch(err)
                {
                    dispatch({
                        type:Types.RIDE_ACCEPT_TIME_OVER
                    });
                    if(err.response)
                    {
                        Alert("FAILED",err.response.data.errorMessage);
                    }
                    else
                    {
                        Alert.alert("FAILED",err.message);
                    }
                }
                //try catch ends here....................
    }
    //handle approve request ends here.......


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
                tim=50;
                dispatch({
                    type:Types.RIDE_ACCEPT_TIME_OVER
                });
            }
            
        },1000);
    },[]);
    //use effect edsnhere/........

    return (
        <React.Fragment>
            {/* Accept Rider Btn Starts Here...... */}
            <TouchableOpacity onPress={handleApproveRequest} style={styles.to} activeOpacity={0.5}>
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