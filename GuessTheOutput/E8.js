console.log("Start"); //1
setTimeout(() => { 
 console.log("Timeout"); //4
}); 
Promise.resolve().then(() => console.log("Promise"));//3
 console.log("End");//2