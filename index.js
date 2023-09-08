// console.log('Before');
// getUser();
// console.log('After');


// async function getUser(){
//     setTimeout(()=>{
//         console.log('Reading a user from a database...');
    
//     },2000);
// }



//given below prgram is executed by using callback to wait 
//Asynchronous 



// getRepositories('ali-raza', function (repositories) {
//     console.log('Repositories:', repositories);
//   });
  
console.log("Before");
getUser(1,getRepositories);

console.log('After');

function getRepositories(user){
    getRepositories(user.getRepositories, getCommits);
}

function getCommits(repos){
    getCommits(repos, displayCommits);
}

function displayCommits(commits){
    console.log(commits);
}


//Callbacks
//Promises
//Async/await



function getUser(id,callback){
        setTimeout(()=>{
            console.log('Reading a user from a database...');
            callback({id: id, gitHubUserName: 'ali'})
        },2000);
}

function getRepositories (username,callback){

        setTimeout(()=>{
            console.log('Calling GitHub API ..');
            callback(['repo1','repo2','repo3']);
        },3000);
}
