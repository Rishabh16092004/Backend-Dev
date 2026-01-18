console.log("first")

function login(cb){
    setTimeout(()=>{
        console.log("login");
        cb();
    },2000)
}

function userdeatils(cb){
    setTimeout(()=>{
        console.log("user detail")
        cb();
    },1000)
}

function password(){
    setTimeout(()=>{
        console.log("password")
    },3000)
}

//callback hell
login(()=>{
    userdeatils(()=>{
        password()
    })
})
console.log("end")