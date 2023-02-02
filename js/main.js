const shopCards = document.getElementById("shopCards");
const viewcart = document.getElementById("viewCart");
const cartContainer = document.getElementById("cart-container");
const cartQuantity = document.getElementById("cartQuantity");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

products.forEach((product) => {
    let content = document.createElement("div");
    content.classList.add('col-12', 'col-sm-6', 'col-lg-4');
    content.innerHTML = `
        <div class="card">
        <img src="${product.image}" class="card-img-top" alt="Neumatico">
        <div class="card-body">
        <h2 class="card-title">${product.name}</h2>
        <p class="card-text">${product.price}</p>
        </div>
        </div>
        `;

    shopCards.append(content);

    let buy = document.createElement("button");
    content.classList.add("btn", "btn-outline-danger");
    buy.innerText = "Comprar";

    content.append(buy);

    buy.addEventListener("click", () => {

        const repeat = cart.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            cart.map((prod) => {
                if (prod.id === product.id) {
                    prod.quantity++;
                }
            });
        } else {
            cart.push({
                id: product.id,
                image: product.image,
                name: product.name,
                price: product.price,
                quantity: product.quantity,
            });
        };
        console.log(cart);
        cartCounter();
        saveLocal();
    });
});

const saveLocal = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
};


