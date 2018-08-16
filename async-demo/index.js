// // christmas tree problem
// console.log("Reach A");
// getUser(1,(user)=>{
//     console.log(user.id)
//     getRepo(user.userName,(repos)=>{
//         console.log('repos',repos);
//         getCommit(repos,(commits)=>{
//             // trap into callbacks hell
//         });
//     });
// });
// console.log("Reach B");


console.log("Reach A");
getUser(1,getRepo);
console.log("Reach B");

function getRepo(user){
    console.log('get user');
    getRepos(user.userName,getCmt);
}

function getCmt(repos){
    console.log('get repos')
    getCmts(repos,displayCommit);
}
function displayCommit(commits){
    console.log('get commits');
    console.log(commits);
}

function getCmts(repos,callback){
    for(var i = 0; i<repos.length; i++){
        displayCommit(repos[i]);
    }
}

function getUser(id,callback){
    setTimeout(()=>{
        console.log("Reading data from database ...");
        callback({id:id, userName:'lzp'});
    },6000);
}

function getRepos(userName,cb){
    setTimeout(()=>{
        console.log('calling repo');
        cb(['o1','o2','o3']);
    },2000);
}