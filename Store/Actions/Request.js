import * as Types from '../Types/types';

//handle Ride come starts here....
export const handleRideCome=(vendor,buyer,distance,id,outletName)=>{

    //dispatch return starts here....
    return (dispatch)=>{
        return dispatch({
            type:Types.RIDER_REQUEST_COME,
            payload:{
                vendor:JSON.parse(JSON.stringify(vendor)),
                buyer:JSON.parse(JSON.stringify(buyer)),
                distance:distance,
                id:id,
                outletName:outletName
            }
        });
    }
    //dispatch return ends here......
}
//handle Rider come ends here.....





//Handle setting lat long buyer starts here.......
export const handleSetBuyerLatLongAction=(lat,long)=>{
    //return starts....
    return (dispatch,getState)=>{
        let req=JSON.parse(JSON.stringify(getState().request.completeRequest));
        console.log("FROM RIDER REDUX CABINET");
        console.log("CHECK THE REQ");
        console.log("+++++++++++++++++++++++++++++++");
        req.buyerLat=parseFloat(lat);
        req.buyerLong=parseFloat(long);

        dispatch({
            type:Types.SET_GEN_COMPLETE_REQUEST,
            payload:{
                completeRequest:JSON.parse(JSON.stringify(req))
            }
        });
    }
    //return ends .....
}
//Handle setting buyer lat long ends here.........