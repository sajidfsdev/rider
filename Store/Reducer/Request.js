import * as Types from '../Types/types';

const initialState={
    available:1,
    //1 OFF
    //10 ON
    //15 RIDER REQUEST COME
    request:{},
    committed:false,
    latitude:null,
    longitude:null,

    vendor:null,
    buyer:null,
    distance:null
};

const Request=(state=initialState,action)=>{

    //switch starts here....
    switch(action.type)
    {
        case Types.SET_AVAILABLE_TRUE:
            return {
                ...state,
                available:10
            };
            break;

        case Types.SET_AVAILABLE_FALSE:
            return {
                ...state,
                available:1
            }
            break;

        
        case Types.SET_MY_LOCATION:
            //console.log("SETTING REDUCER LAT AND LONG STARTS))))))))))))))))))))))");
            //console.log(action.payload.latitude);
            //console.log(action.payload.longitude);
            return {
                ...state,
                latitude:action.payload.latitude,
                longitude:action.payload.longitude
            };
            break;


        case Types.RIDER_REQUEST_COME:
            return {
                ...state,
                available:15,
                vendor:JSON.parse(JSON.stringify(action.payload.vendor)),
                buyer:JSON.parse(JSON.stringify(action.payload.buyer)),
                distance:action.payload.distance
            };
            break;
    }
    //switch ends here......

    //returning state...
    return state;
}//.........................................

export default Request;