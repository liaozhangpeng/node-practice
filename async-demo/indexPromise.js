console.log("Reach A");

// function getRepo(user){
//     console.log('get user')
//     getRepos(user.userName,getCmt);
// }

// function getCmt(repos){
//     console.log('get repos')
//     getCmts(repos,displayCommit);
// }
// function displayCommit(commits){
//     console.log('get commits');
//     console.log(commits);
// }

const p = getUser(1);
p.then(user=>getRepos(user))
 .then(repo=>getCmts(repo));


 console.log("Reach B");

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

function getRepos(user){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('calling repos');
            resolve(['o1','o2','o3']);
        },2000);
    });
    
}