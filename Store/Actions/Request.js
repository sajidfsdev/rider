import * as Types from '../Types/types';

//handle Ride come starts here....
export const handleRideCome=(vendor,buyer,distance)=>{

    //dispatch return starts here....
    return (dispatch)=>{
        return dispatch({
            type:Types.RIDER_REQUEST_COME,
            payload:{
                vendor:JSON.parse(JSON.stringify(vendor)),
                buyer:JSON.parse(JSON.stringify(buyer)),
                distance:distance
            }
        });
    }
    //dispatch return ends here......
}
//handle Rider come ends here.....