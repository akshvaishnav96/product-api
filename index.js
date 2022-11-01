let fetchbtn = document.getElementById("fetchdata")

fetchbtn.addEventListener("click",()=>{
    url = "https://fakestoreapi.com/products";

    fetch(url).then((response)=>{
        return response.json()
    }).then((data)=>{
        console.log(data)
    })
})

let showbtn = document.getElementById("showdata")

showbtn.addEventListener("click",async()=>{
    url = "https://fakestoreapi.com/products";

        let response = await fetch(url)
        let data = await response.json()
        str = "";
        for (let key in data){
            str += `<div class="card" style="width:90%">
                <img src="${data[key].image}" class="card-img-top" alt="...">
                <div class="card-body">
                <hr>
                <h5 class="card-title">Title : ${data[key].title}</h5>
                <hr>
                <h5 class="card-title">Category : ${data[key].category}</h5>
                <hr>
                <p class="card-text">${data[key].description}</p>
                <hr>
                <a href="#" class="btn btn-primary buybtn">Buy Now ${data[key].price}$</a>
                <hr>
                <h6 class="card-title">Count Available : ${data[key].rating.count}</h6>
                <div class="rate"> 
                <h6 class="card-title" id="starm">Rating : ${data[key].rating.rate}</h6>
                </div>
                </div>
                </div>`
            let titlearea = document.getElementById("data")
            titlearea.innerHTML = str

           
        }
    })





 