const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({id:2});
    },2000);
});

setTimeout(()=>{p.then((result)=>console.log(result))},4000);
