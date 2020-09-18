const path=require('path');
const express=require('express');
const app=express();
const hbs=require('hbs');
const geocode=require('../util/geocode');
const forecast=require('../util/weatherForecast');
const port=process.env.PORT||3000;

//define path for express config.
const publicPath=path.join(__dirname,'../public');
const viewsPath=path.join(__dirname,'../templates/views');
const partialPath=path.join(__dirname,'../templates/partials');

//setting handle bar and location.
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialPath);

app.use(express.static(publicPath));//giving access to public folder from client side.

app.get('',(req,res)=>{
   res.render('index',
              {
       heading:" Weather Forecast",
       name:"shivendra"
   }
             ) }
       );
app.get('/help',(req,res)=>{
    res.render('help',{
        helpText:"will be updated soon !!"
        
    
    }
    )
});

app.get('/about',(req,res)=>{
    res.render('about',{
        aboutText:"know about us :) :D !!"
        
    }
    )
});



app.get('/weather',(req,res)=>{
   
    if(!req.query.address){
         res.send("please enter city");
    }
                      
 else{
    geocode(req.query.address,(error,{latitude ,longitude,location}={})=>{
         if(error){
                  return res.send(error);
                                          }
          forecast(latitude,longitude,(error,{temperature,country,precipitation,humidity,pressure,icon,weather_description,wind_speed})=>{
             if(error){
                     return res.send(error);
                                               }
                      res.send({temperature,location,country,precipitation,humidity,pressure,icon,weather_description,wind_speed
                               
                                            });
                                            
                                                                                    
                                                                                                                                                            });            
                                                                                   
                                                                                                
             });
    }     
    
   
        
    
});

app.get('/help/*',(req,res)=>{
    res.render('error',{
        message:"Help article not found ",
        name:"shivendra"
        
    })
});

app.get('*',(req,res)=>{
    res.render('error',{
        message:"Page not found ! ",
        name:"shivendra"
    })
});

app.listen(port,()=>{
    console.log(port);
});






