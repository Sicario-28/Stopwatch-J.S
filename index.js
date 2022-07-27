
let stopwatch=document.querySelector("h2")
let start=document.getElementById("startbtn")
let btnpause=document.getElementById("pausebtn")
let reset=document.getElementById("resetbtn")
let starttime=0
let ellapsedtime=0
let intervalid;
let currenttime=0
let pause=true
let hrs=0
let mins=0
let secs=0
let millisecs=0


start.addEventListener("click",()=>{
    if(pause){
        pause=false
        starttime=Date.now()-ellapsedtime
        intervalid=setInterval(updatetime,1)
    }
})
btnpause.addEventListener("click",()=>{
    if(!pause){
        pause=true
        clearInterval(intervalid)
    }
})
reset.addEventListener("click",()=>{
 starttime=0
 ellapsedtime=0
 currenttime=0
  hrs=0
  mins=0
  secs=0

stopwatch.textContent="00:00:00:00"
})

function updatetime(){
   ellapsedtime=Date.now()-starttime
   hrs=Math.floor(ellapsedtime/(1000*60*60)%60)
   mins=Math.floor(ellapsedtime/(1000*60)%60)
   secs=Math.floor(ellapsedtime/(1000)%60)
   millisecs=Math.floor(ellapsedtime %100)
   secs=secs.toString()
   mins=mins.toString()
   hrs=hrs.toString()
   millisecs.toString()
   secs=pad(secs)
   mins=pad(mins)
   hrs=pad(hrs)
   millisecs=pad(millisecs)

stopwatch.textContent=`${hrs}:${mins}:${secs}:${millisecs}`

function pad(unit){
    
    return (unit.length<2?"0"+unit:unit)
}
    
}







