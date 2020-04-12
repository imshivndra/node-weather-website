const request=require('request');
const geocode=(address,callback)=>{
    const urlMap='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURIComponent(address)+'.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiaWFtc2hpdmVuZHJhIiwiYSI6ImNrOGo3dXc2MDBiY2EzZHFsZm1uc3g0eWkifQ.ma8orhSgl6PRYsEetbNI-g';
    request({url:urlMap,json:true},(error,response)=>{
        
        if(error){
            callback({error:'you are not connected to internet'},undefined);
        }
        else if(response.body.message){
            callback({error:'please enter correct location'},undefined);
        }
        else if(response.body.features.length===0){
            callback({error:'please enter a valid city'},undefined);
        }
        else{
            callback(undefined,{
                "latitude":response.body.features[0].center[1],
                "longitude":response.body.features[0].center[0],
                "location":response.body.features[0].place_name
            
            });
        }
            
        
    });
}
module.exports=geocode