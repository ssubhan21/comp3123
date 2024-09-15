/*var p1 = new Promise((resolve, reject) => {
    if(a == 10){
        resolve('Success-1');
    } else {
        reject('failure-1')
    }
   
})

p1.then((result) => {
    console.log('success');
},
(error)=> {
    console.log('failure')
})*/
var a = 100;
function makepromise(a){
var p1 = new Promise((resolve, reject) => {
    if(a == 10){
       var r = {
        status: true,
        message:'success'
       }
       resolve(r);
    } else {
        reject('failure-1')
    }
   
})
return p1;
}

makepromise(10).then((result) => {
    console.log(result);
},
(error)=> {
    console.log(error)
})