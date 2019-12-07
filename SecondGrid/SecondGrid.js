import React from 'react';
import { YellowBox,Alert } from 'react-native';
import DrawerNav from '../Navigations/Drawer';
import OpenSocket from 'socket.io-client';
import API from '../Constants/API';
import Soc from '../Constants/Socket';
import axios from 'axios';

import { useSelector,useDispatch } from 'react-redux';
import * as Types from '../Store/Types/types';
import * as Actions from '../Store/Actions/Request';

const secondGrid=props=>{

    const dispatch=useDispatch();
    //redux state starts here......
    const id_RP=useSelector(state=>state.auth.id);
    const token_RP=useSelector(state=>state.auth.token);

    //redux state ends here........

    //sending updated location to server starts here......
    const sendPosToServer=async (latitude,longitude)=>{

        //const config......
        const config={
            headers:{
                'Content-Type':'application/json',
                'r-auth-humtoken':token_RP
            }
        };


        //body starts here....
        const body=JSON.stringify({
            id:id_RP,
            latitude:latitude,
            longitude:longitude
        });

        //try catch starts here......
        try
        {
            const res=await axios.post(API.server+"/rider/request/updateLoc",body,config);

            if(res)
            {

            }
            else
            {
                return resp.status(500).json({
                    errorMessage:"Network Error Detected"
                });
            }
        }
        catch(err)
        {
            if(err.response)
            {
                Alert.alert("Failed",err.response.data.errorMessage);
            }
            else
            {
                Alert.alert("Failed",err.message);
            }
        }
        //try catch ends here........
    }
    //sending updated location ends here..................


    //Navigating the position starts here........
    navigator.geolocation.watchPosition(
        position => {
        console.log("////////////////////////////////////");
        console.log("///////////POSITION DETECTED////////");
         console.log(position.coords.latitude);
         console.log(position.coords.longitude);

         //secind location to server starts here.......
            sendPosToServer(position.coords.latitude,position.coords.longitude);
         //sending location to server ends here........
         dispatch({
             type:Types.SET_MY_LOCATION,
             payload:{
                 latitude:position.coords.latitude,
                 longitude:position.coords.longitude
             }
         });
        console.log("/////////////////////////////////////");
        console.log("/////////////////////////////////////");
        }, 
        error => console.log(error),
        { 
          enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 1000,
          distanceFilter: 10
        }
       );
    //Navigating the position ends here..........

    


    YellowBox.ignoreWarnings([
        'Unrecognized WebSocket connection option(s) `agent`, `perMessageDeflate`, `pfx`, `key`, `passphrase`, `cert`, `ca`, `ciphers`, `rejectUnauthorized`. Did you mean to put these under `headers`?'
      ]);


      //socket starts here......
      
        //implementing socket requests starts here........
        const io=OpenSocket(API.server,{
            query:{
                userId:id_RP,
                type:"RIDER"
            }
        });

        //socket registered opertions starts here.....
        io.on("RIDECOME",(data)=>{
            console.log("RIDER REQUEST HAS COME))))))))))))))))))))))))))");
            console.log(data);
            console.log("))))))))))))))))))))))))))))))))))))))))))))))))");
           dispatch(Actions.handleRideCome(
               JSON.parse(JSON.stringify(data.vendor)),
               JSON.parse(JSON.stringify(data.buyer)),
               parseFloat(data.distance)
           ));
        });
        //socket registered operations ends here......

        Soc.setIO(io);
        //implementing socket request ends here...........
      //socket ends here........

    //return statement starts here...
    return (
        <DrawerNav />
    );
    //return stateent ends here......

}//......................

export default secondGrid;