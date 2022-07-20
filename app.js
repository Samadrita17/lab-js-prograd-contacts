//Enter your code here..
const btnGet=document.getElementById("btnGet")
const message=document.getElementById("message")
btnGet.addEventListener('click',fun)
async function fun()
{
    await fetch('https://jsonplaceholder.typicode.com/users').then(res=>res.json()).then(data=>{
        console.log(data)
        var player='<h2>Lists of Users</h2>';
        data.forEach(function(user) {
         player+=
        `<div class="player">
          <div class="strength">Name : ${user.name}</div>
          <div>Email   : ${user.email}</div>
          <div>Phone   : ${user.phone}</div>
          <div>Website : ${user.website}</div>
          <div>Company : ${user.company.name}</div>
          <div>City    : ${user.address.city}</div>
          <div>Zipcode : ${user.address.zipcode}</div>
         </div>`
        })
message.innerHTML=player
    }).catch(error=>console.log('error',error))

}



/*
async function fun()
{
try{
    let res=await fetch('https://jsonplaceholder.typicode.com/users')
    let res2=await res.json()
    console.log(res2)
    res2.forEach(function(ele)
    {
        console.log(ele.address.city)
    })
    var player='<h2>Lists of Users</h2>';
                    res2.forEach(function(user) {
                     player+=
                    `<div class="player">
                      <div class="strength">Name : ${user.name}</div>
                      <div>Email   : ${user.email}</div>
                      <div>Phone   : ${user.phone}</div>
                      <div>Website : ${user.website}</div>
                      <div>Company : ${user.company.name}</div>
                      <div>City    : ${user.address.city}</div>
                      <div>Zipcode : ${user.address.zipcode}</div>
                     </div>`
                    })
    message.innerHTML=player

}
catch(error)
{
    console.log('error',error)
}
}*/


















