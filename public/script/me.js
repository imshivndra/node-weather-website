const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageError =document.querySelector('#error');
const city=document.querySelector('.p1');
const country=document.querySelector('.p2');
const temp=document.querySelector('#temperature');
const precip=document.querySelector('#precipitation');
const humi=document.querySelector('#humidity');
const press=document.querySelector('#pressure');
const speed=document.querySelector('#wind');


 weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
     if(location.length===0){
         return messageError.textContent='Please Enter City';
     }
    
   messageError.textContent='loading...';

     
fetch('/weather?address='+location).then((response)=>{
 response.json().then((data)=>{
     if(data.error){
         
         messageError.textContent=data.error;

  city.textContent="";
 country.textContent="";
temp.textContent="";
precip.textContent="";
humi.textContent="";
press.textContent="";
speed.textContent="";


         
      }   
        else{   var element = document.getElementById("img-1");
        element.classList.add("showimage");
          
          messageError.textContent=data.weather_description;

  city.textContent=data.place + " " +data.region;
 country.textContent=data.country;
temp.textContent=data.temperature;
precip.textContent=data.precipitation;
humi.textContent=data.humidity;
press.textContent=data.pressure;
speed.textContent=data.wind_speed;

 

  const imageNew=document.querySelector('#img-1');
        imageNew.src=data.icon;


             
             
             }
    })
})


});






