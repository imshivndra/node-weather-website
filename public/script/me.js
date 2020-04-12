const weatherForm=document.querySelector('form');
const search=document.querySelector('input');
const messageOne =document.querySelector('#message1');
const messsageTwo=document.querySelector('#message2');

 weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location=search.value;
    
   messageOne.textContent='loading...';
 messsageTwo.textContent="";
     
fetch('http://localhost:3000/weather?address="'+location +'"').then((response)=>{
 response.json().then((data)=>{
     if(data.error){
         
         messageOne.textContent=data.error;
         messsageTwo.textContent="";
      }   
        else{messageOne.textContent=data.location;
             messsageTwo.textContent=data.weatherInfo;
             }
    })
})
});
