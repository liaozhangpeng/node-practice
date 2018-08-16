const p = Promise.resolve({id:7});
p.then(value=>console.log(value));


// AWAYS reject a error, not just a string.
const q = Promise.reject(new Error('reason for rejection'));
q.catch(err=>console.log(err));


// parelle promises
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation 1...');
        resolve(1);
    },2000
    );
});

const p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation 2...');
        resolve(2);
    },2000
    );
});

const p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Async operation 3...');
        resolve(3);
    },2000
    );
});

//Promise.all will resolve all promise parelle
//Promise.all([p1,p2,p3]).then(result=>console.log(result));

// Promise.race will resolve promise which is resolved first
Promise.race([p1,p2,p3]).then(result=>console.log(result));