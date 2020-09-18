const request=require('request');
const weatherForecast=(latitude,longitude,callback)=>{
    const urlWeather='http://api.weatherstack.com/current?access_key=c7a93a1f7cdabc61d6042ec4bb9cc02a&query='+latitude +','+longitude;
    
    request({url:urlWeather,json:true},(error,response)=>{
       if(error){
           callback({error:'sorry you may not be connected to internet'},undefined);
       } 
        
        else{
            callback(undefined, {place:response.body.location.name,
                country:response.body.location.country,
                temperature: response.body.current.temperature +'° Celsius' ,
                precipitation: 'Precipitation : ' + response.body.current.precip + ' MM' ,
                wind_speed:'Wind Speed : ' + response.body.current.wind_speed + ' Km/hr',
                pressure:'Pressure : ' + response.body.current.pressure + ' MB',
                humidity:'Humidity : ' + response.body.current.humidity + ' %',
                icon: response.body.current.weather_icons[0],
                weather_description: response.body.current.weather_descriptions[0]

                                });
        }
    });
    
};
module.exports=weatherForecast