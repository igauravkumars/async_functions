let container = document.getElementById("container")

async function getData(){
    let response = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries")
    let res = await response.json()
    displayData(res.data)
}
getData()

function displayData(data){
     
    data.forEach((ele,i)=>{
         let sepDiv = document.createElement("div")
         sepDiv.id="card"

         let id = document.createElement("p")
         id.innerText=`id:${ele.id}`

         let Rank = document.createElement("p")
         Rank.innerText = `Rank:${ele.Rank}`

         let country = document.createElement("p")
         country.innerText =`Country:${ele.country}` 

         let  population = document.createElement("p")
         population.innerText = `Population${ele.population}`
         console.log(ele)

         sepDiv.append(id,Rank,country,population)

         container.append(sepDiv)

    })
}