import * as Types from '../Types/types';

const initialState={
    available:1,
    //1 OFF
    //10 ON
    //15 RIDER REQUEST COME
    //20 TRIP ONE
    //25 TRIP TWO
    //2020 BUFFERRING
    bufferring:false,
    request:{},
    committed:false,
    latitude:null,
    longitude:null,

    vendor:null,
    buyer:null,
    distance:null,
    id:null,
    outletName:'',
    buyerId:null
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
                distance:action.payload.distance,
                id:action.payload.id,
                outletName:action.payload.outletName
            };
            break;

        case Types.RIDE_ACCEPT_TIME_OVER:
            return {
                ...state,
                available:10
            };
            break;


        case Types.SET_BUFFERING_CODE:
            return {
                ...state,
                available:2020
            };
            break;

        case Types.SET_TRIP_ONE:
            return {
                ...state,
                available:20,
                buyerId:action.payload.buyerId
            };
            break;

        case Types.SET_GEN_BUFFERRING:
            return {
                ...state,
                bufferring:true
            };
            break;


        case Types.END_GEN_BUFFERRING:
            return {
                ...state,
                bufferring:false
            };
            break;

        case Types.REFRESH_REQUEST_STATUS:
           
            return {
                ...state,
                available:action.payload.available,
                id:action.payload.requestId,
                buyerId:action.payload.buyerId,
                buyer:JSON.parse(JSON.stringify(action.payload.buyer))
            };
            break;
    }
    //switch ends here......

    //returning state...
    return state;
}//.........................................

export default Request;