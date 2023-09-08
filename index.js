// console.log('Before');
// getUser();
// console.log('After');


// async function getUser(){
//     setTimeout(()=>{
//         console.log('Reading a user from a database...');
    
//     },2000);
// }



//given below prgram is executed by using callback to wait 
console.log("Before");


// getRepositories('ali-raza', function (repositories) {
//     console.log('Repositories:', repositories);
//   });
  

getUser(1,function(user){
    console.log("Ali Raza");
    console.log('User',user);

    getRepositories(user.getRepositories,(repos) =>{
        console.log('Repos',repos)
    });

});
console.log('After');

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
