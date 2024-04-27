let container = document.getElementById("container")

async function getData(){
    let response = await fetch("https://jsonplaceholder.typicode.com/todos")
    let res = await response.json()
    displayData(res)
}
getData()
function displayData(res){
    container.innerHTML=""
    res.forEach((ele,i)=>{
       let sepDiv = document.createElement("div")
       sepDiv.id="cards"
       
       let id = document.createElement("p")
       id.innerText=ele.id

       let title = document.createElement("p")
       title.innerText=ele.title
       
       let complete = document.createElement("p")
       complete.innerText = ele.completed

       sepDiv.append(id,title,complete)

       container.append(sepDiv)
    })
}
