let videoGif = document.querySelector('#congratsGif');
let box = document.querySelector('.box');
let input = document.querySelector('#inpuT');
let losser = document.querySelector('#losser');
let empty = document.querySelector('#empty');

let randomNum = Math.floor(Math.random()*100);
console.log(randomNum);

let checkFun = () =>{
    if(input.value == ""){
        empty.style.display = "block" ;
    }
    else if(input.value == randomNum){
        videoGif.style.display = "block" ;
    }else{
        losser.style.display = "block" ;
    }
    input.value = "" ;

   setTimeout(function(){
    location.href = "./index.html" ;
   },2000);
}


