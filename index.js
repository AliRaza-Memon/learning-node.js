// console.log('Before');
// getUser();
// console.log('After');


// async function getUser(){
//     setTimeout(()=>{
//         console.log('Reading a user from a database...');
    
//     },2000);
// }



console.log("Before");

getUser(1,function(user){
    console.log("Ali Raza");
    console.log('User',user);
});
console.log('After');

//Callbacks
//Promises
//Async/await

function getUser(id,callback){
        setTimeout(()=>{
            console.log('Reading a user from a database...');
            callback({id: id, gitHubUserName: 'mosh'})
        },2000);
}

