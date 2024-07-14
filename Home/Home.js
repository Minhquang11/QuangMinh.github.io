const url = 'https://hapi-books.p.rapidapi.com/nominees/romance/2020';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '4b4c403403msh773666ff3fef4cfp18cab5jsnfbb2aa3b82af',
        'x-rapidapi-host': 'hapi-books.p.rapidapi.com'
    }
};
async function getData() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(JSON.parse(result));
    } catch (error) {
        console.error(error);
    }


    vart
    for(let item of JSON.parse(result)){
        let card = document.createElement("div")
        card.classList.add("card")
    
        let imgContainer = document.createElement("div")
        imgContainer.classList.add("image-container")
    
        let image = document.createElement("img")
        image.setAttribute("src", items.image)
        imgContainer.appendChild(image)
        card.appendChild(imgContainer)
    
        let container = document.createElement("div")
        container.classList.add("container")
    
        let name = document.createElement("h5");
        name.classList.add("product-name");
        name.innerText = items.name.toUpperCase();
        container.appendChild(name);
    
        let price = document.createElement("h6");
        price.innerHTML = "<b>Price:</b> " + items.price;
        container.appendChild(price);
    
        let btn = document.createElement("button")
        btn.setAttribute("onclick", "addToCart()")
        btn.innerHTML = "Thêm vào giỏ hàng"
        container.appendChild(btn)
      
        card.appendChild(container);
        document.getElementById("products").appendChild(card);
    }
}
getData()


