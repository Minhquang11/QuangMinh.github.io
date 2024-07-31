// let products = {
//     data: [
//         {
//             product_name: "Áo tuyển Pháp",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-tuyen-phap-thun-me-2024-hattrick-sport-1-b5760264-c6f4-434e-bfb4-ab128f356b2a.jpg?v=1714492499907",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Croatia",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-tuyen-croatia-thun-me-2024-hattrick-sport-2.jpg?v=1714454450637",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Đức (Nhà)",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-duc-trang-san-nha-2024-hattrick-sport.jpg?v=1714453980330",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Đức (Khách)",
//             image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/348/425/products/quan-ao-bong-da-doi-tuyen-duc-hong-2024-hattrick-sport.jpg?v=1714453986397",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Ý (Nhà)",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-italia-y-thun-me-2024-3.jpg?v=1715385812803",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Bỉ",
//             image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-2.jpg?v=1712677551337",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Hà Lan (Nhà)",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-ha-lan-euro-2024.png?v=1711381721023",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Hà Lan (Khách)",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-5.jpg?v=1712677702990",
//             price: "125.000₫"
//         },

//         {
//             product_name: "Áo tuyển Bồ Đào Nha",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-8.jpg?v=1715386280000",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Anh",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-anh-euro-2024-3.jpg?v=1714490453153",
//             price: "125.000₫"
//         },

//         {
//             product_name: "Áo tuyển Thụy Sĩ ",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-quoc-gia-dep-euro-2024-3-1696246297077.png?v=1696248135400",
//             price: "125.000₫"
//         },
//         {
//             product_name: "Áo tuyển Ý (Khách)",
//             image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-italia-y-thun-me-2024-1.jpg?v=1715385806363",
//             price: "125.000₫"
//         },
        
//     ]
// }

// let cart = [];

// function addToCart(product) {
//     // Check if the product is already in the cart
//     let existingProduct = cart.find(item => item.product_name === product.product_name);
//     if (existingProduct) {
//         existingProduct.quantity += 1;
//     } else {
//         product.quantity = 1;
//         cart.push(product);
//     }
//     displayCart();
// }

// function displayCart() {
//     let cartContainer = document.getElementById("cart");
//     cartContainer.innerHTML = ""; // Clear existing contents

//     if (cart.length === 0) {
//         cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống</p>";
//         return;
//     }

//     let table = document.createElement("table");
//     let header = table.insertRow();
//     header.innerHTML = "<th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th>Hành động</th>";

//     let totalAmount = 0;

//     cart.forEach(item => {
//         let price = parseFloat(item.price.replace(/[^0-9.-]+/g, "")); // Parse the price correctly
//         let row = table.insertRow();
//         row.innerHTML = `
//             <td>${item.product_name}</td>
//             <td>${item.price}</td>
//             <td>${item.quantity}</td>
//             <td>${(price * item.quantity).toFixed(3)}₫</td>
//             <td><button onclick="removeFromCart('${item.product_name}')">Xóa</button></td>
//         `;
//         totalAmount += price * item.quantity;
//     });

//     let totalRow = table.insertRow();
//     totalRow.innerHTML = `
//         <td colspan="3"><b>Tổng số tiền:</b></td>
//         <td><b>${totalAmount.toFixed(3)}₫</b></td>
//         <td></td>
//     `;

//     cartContainer.appendChild(table);
// }

// function removeFromCart(productName) {
//     cart = cart.filter(item => item.product_name !== productName);
//     displayCart();
// }

// // Your existing code to create the product cards
// for (let items of products.data) {
//     let card = document.createElement("div");
//     card.classList.add("card");

//     let imgContainer = document.createElement("div");
//     imgContainer.classList.add("image-container");

//     let image = document.createElement("img");
//     image.setAttribute("src", items.image);
//     imgContainer.appendChild(image);
//     card.appendChild(imgContainer);

//     let container = document.createElement("div");
//     container.classList.add("container");

//     let name = document.createElement("h5");
//     name.classList.add("product-name");
//     name.innerText = items.product_name.toUpperCase();
//     container.appendChild(name);

//     let price = document.createElement("h6");
//     price.innerHTML = "<b>Price:</b> " + items.price;
//     container.appendChild(price);

//     let btn = document.createElement("button");
//     btn.setAttribute("onclick", `addToCart(${JSON.stringify(items)})`);
//     btn.innerHTML = "Thêm vào giỏ hàng";
//     container.appendChild(btn);

//     card.appendChild(container);
//     document.getElementById("product").appendChild(card);
// }
let products = {
    data: [
        {
                        product_name: "Áo tuyển Pháp",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-tuyen-phap-thun-me-2024-hattrick-sport-1-b5760264-c6f4-434e-bfb4-ab128f356b2a.jpg?v=1714492499907",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Croatia",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-tuyen-croatia-thun-me-2024-hattrick-sport-2.jpg?v=1714454450637",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Đức (Nhà)",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-duc-trang-san-nha-2024-hattrick-sport.jpg?v=1714453980330",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Đức (Khách)",
                        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/348/425/products/quan-ao-bong-da-doi-tuyen-duc-hong-2024-hattrick-sport.jpg?v=1714453986397",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Ý (Nhà)",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-italia-y-thun-me-2024-3.jpg?v=1715385812803",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Bỉ",
                        image: "https://bizweb.dktcdn.net/thumb/1024x1024/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-2.jpg?v=1712677551337",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Hà Lan (Nhà)",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-ha-lan-euro-2024.png?v=1711381721023",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Hà Lan (Khách)",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-5.jpg?v=1712677702990",
                        price: "125.000₫"
                    },
            
                    {
                        product_name: "Áo tuyển Bồ Đào Nha",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/ao-bong-da-doi-tuyen-quoc-gia-euro-2024-dep-thun-me-8.jpg?v=1715386280000",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Anh",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-anh-euro-2024-3.jpg?v=1714490453153",
                        price: "125.000₫"
                    },
            
                    {
                        product_name: "Áo tuyển Thụy Sĩ ",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-doi-tuyen-quoc-gia-dep-euro-2024-3-1696246297077.png?v=1696248135400",
                        price: "125.000₫"
                    },
                    {
                        product_name: "Áo tuyển Ý (Khách)",
                        image: "https://bizweb.dktcdn.net/100/348/425/products/quan-ao-bong-da-italia-y-thun-me-2024-1.jpg?v=1715385806363",
                        price: "125.000₫"
                    },
    ]
}

let cart = [];

function addToCart(product) {
    let existingProduct = cart.find(item => item.product_name === product.product_name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    displayCart();
}

function formatPrice(price) {
    return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}

function parsePrice(price) {
    return parseFloat(price.replace(/\./g, '').replace('₫', ''));
}

function displayCart() {
    let cartContainer = document.getElementById("cart");
    cartContainer.innerHTML = ""; // Clear existing contents

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống</p>";
        return;
    }

    let table = document.createElement("table");
    let header = table.insertRow();
    header.innerHTML = "<th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tổng</th><th>Hành động</th>";

    let totalAmount = 0;

    cart.forEach(item => {
        let price = parsePrice(item.price); // Parse the price correctly
        let row = table.insertRow();
        row.innerHTML = `
            <td>${item.product_name}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${formatPrice(price * item.quantity)}</td>
            <td><button onclick="removeFromCart('${item.product_name}')">Xóa</button></td>
        `;
        totalAmount += price * item.quantity;
    });

    let totalRow = table.insertRow();
    totalRow.innerHTML = `
        <td colspan="3"><b>Tổng số tiền:</b></td>
        <td><b>${formatPrice(totalAmount)}</b></td>
        <td></td>
    `;

    cartContainer.appendChild(table);

    let checkoutButton = document.createElement("button");
    checkoutButton.innerText = "Đặt hàng";
    checkoutButton.onclick = displayCheckoutForm;
    cartContainer.appendChild(checkoutButton);
}

function displayCheckoutForm() {
    let checkoutContainer = document.getElementById("checkout");
    checkoutContainer.innerHTML = `
        <h2>Thông tin đặt hàng</h2>
        <form id="checkout-form">
            <label for="name">Họ và tên:</label>
            <input type="text" id="name" name="name" required><br>
            <label for="address">Địa chỉ:</label>
            <input type="text" id="address" name="address" required><br>
            <label for="phone">Số điện thoại:</label>
            <input type="text" id="phone" name="phone" required><br>
            <button type="submit">Xác nhận đặt hàng</button>
        </form>
    `;

    document.getElementById("checkout-form").addEventListener("submit", handleOrderSubmission);
}

function handleOrderSubmission(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let address = document.getElementById("address").value;
    let phone = document.getElementById("phone").value;

    alert(`Cảm ơn bạn, ${name}! Đơn hàng của bạn đã được đặt. Chúng tôi sẽ giao hàng tới ${address}.`);

    // Clear the cart
    cart = [];
    displayCart();
    document.getElementById("checkout").innerHTML = "";
}

// Your existing code to create the product cards
for (let items of products.data) {
    let card = document.createElement("div");
    card.classList.add("card");

    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");

    let image = document.createElement("img");
    image.setAttribute("src", items.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);

    let container = document.createElement("div");
    container.classList.add("container");

    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText = items.product_name.toUpperCase();
    container.appendChild(name);

    let price = document.createElement("h6");
    price.innerHTML = "<b>Price:</b> " + items.price;
    container.appendChild(price);

    let btn = document.createElement("button");
    btn.setAttribute("onclick", `addToCart(${JSON.stringify(items)})`);
    btn.innerHTML = "Thêm vào giỏ hàng";
    container.appendChild(btn);

    card.appendChild(container);
    document.getElementById("product").appendChild(card);
}

