import * as Types from '../Types/types';

const initialState={
    available:1,
    request:{},
    committed:false,
    latitude:null,
    longitude:null
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
            console.log("SETTING REDUCER LAT AND LONG STARTS))))))))))))))))))))))");
            console.log(action.payload.latitude);
            console.log(action.payload.longitude);
            return {
                ...state,
                latitude:action.payload.latitude,
                longitude:action.payload.longitude
            };
            break;
    }
    //switch ends here......

    //returning state...
    return state;
}//.........................................

export default Request;