// await only can be used for promise and inside of async function
// use try catch block to handle error

async function displayCmts(){
    try{
        const user = await getUser(1);
        const repos = await getRepos(user.userName);
        const commit = await getCmts(repos);  
            console.log(commit);
    }
    catch(err){
        console.log('Error',err.message);
    }

}
displayCmts();

function getCmts(repos){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("*** Commit ***");
            resolve(repos);
        },2000);
    });
}

function getUser(id){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Reading data from database ...");
            resolve({id:id, userName:'lzp'});
        },4000);
    });
}

function getRepos(userName){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling repos');
            resolve(['o1','o2','o3']);
        },2000);
    });
    
}

console.log('A');