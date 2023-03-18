let resp = fetch('https://cloud-api-gateway.altorumleren.com/oauth/api/v1/b3caf465-235a-4d15-a99d-ffbff5f24552/userList')
console.log(resp);

function startChopping(){
    setTimeout()
}

startChopping().then((cutVeg)=>{
    startCookVeg(cutVeg);

}).catch((err)=>{
    console.log("something went wrong while chopping")
}).finally(()=>{
    
})
