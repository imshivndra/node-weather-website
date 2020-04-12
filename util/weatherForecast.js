const request=require('request');
const weatherForecast=(latitude,longitude,callback)=>{
    const urlWeather='http://api.weatherstack.com/current?access_key=c7a93a1f7cdabc61d6042ec4bb9cc02a&query='+latitude +','+longitude;
    
    request({url:urlWeather,json:true},(error,response)=>{
       if(error){
           callback({error:'sorry you may not be connected to internet'},undefined);
       } 
        
        else{
            callback(undefined, {weatherInfo:"It is " + response.body.current.temperature + "degree celsius outside.There are" + response.body.current.precip + "% chances of rain."
                                });
        }
    });
    
};
module.exports=weatherForecast