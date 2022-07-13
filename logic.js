function RunClock() {
 let date = new Date();
 let hous = date.getHours();
 let minute = date.getMinutes();
 let Second = date.getSeconds();
 let today = date.getDate();
 let session = "AM"
 var hours;
 if (hous >12) {
    hours = hous -12
 }
 if(hous >= 12){
     session ="PM"
 }
 hours = (hours<=9)? "0"+ hours:hours;
 minute = (minute<=9)? "0"+minute:minute; 
 Second = (Second<=9)? "0"+Second:Second;
 let Time =hours +":" + minute +":"+Second+" "+ session;
  document.getElementById("Time").innerText = Time;

setTimeout(()=>RunClock(),1000);
} 
 
 const date1 =()=>{
    let dat = new Date();
    let year = dat.getFullYear();
    let d = dat.getDate();
    let din = dat.getDay();
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let din1 = ["Sunday","Monday","Tuesday","Wednesday","thursday","Friday","Saturday"]
    let arvind =(`${d}-${months[dat.getMonth()]}-${year} ${din1[din]}`);
    document.getElementById("ddd").innerText=arvind;
}
 date1();
