let display_user = document.getElementById("display_user")

let Fetch_users= document.getElementById("Fetch_users")

Fetch_users.addEventListener("click",getData)

async function getData(){
    try{
        let response =await fetch("https://reqres.in/api/users?page=2")
    let res = await  response.json()
     displayUser(res.data)
    
}
    catch{
    console.log("error")
}
   
}


function displayUser(arr){
    display_user.innerHTML=""
     arr.forEach((ele,i)=>{
        display_user.innerHTML +=`
        <div id="cards">
            <img src="${ele.avatar}">
            <p>${ele.first_name} + ${ele.last_name}</p>
            <p>${ele.email}</p>
        </div>
        
        `
    })



}