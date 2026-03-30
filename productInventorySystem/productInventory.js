let container = document.getElementById("productContainer");
let form = document.getElementById("productForm");
let loading = document.getElementById("loading");
let emptyMessage = document.getElementById("emptyMessage");
let filter = document.getElementById("filterCategory");
let addBtn = document.getElementById("addBtn");

let products = [];
let editId = null;



// SHOW FORM

addBtn.addEventListener("click", () => {

    form.classList.remove("hidden");
    addBtn.classList.add("hidden");

});



// FETCH PRODUCTS

async function getProducts() {

    loading.classList.remove("hidden");

    try {

        let res = await fetch("https://fakestoreapi.com/products");

        let data = await res.json();

        products = data;

        displayProducts(products);

    }

    catch (error) {

        alert("Error loading products");

    }

    loading.classList.add("hidden");

}



// DISPLAY PRODUCTS

function displayProducts(list) {

    container.innerHTML = "";

    if (list.length === 0) {

        emptyMessage.classList.remove("hidden");
        return;

    }

    emptyMessage.classList.add("hidden");

    list.forEach(product => {

        let priceStyle =
            product.price < 20
                ? "text-green-600 font-bold"
                : "text-gray-800";

        let card = document.createElement("div");

        card.className =
            "bg-white shadow-lg rounded-xl p-4 hover:shadow-2xl transition";

        card.innerHTML = `

<img src="${product.image}"
class="h-40 mx-auto object-contain">

<h2 class="font-bold mt-3">
${product.title.substring(0, 40)}
</h2>

<p class="${priceStyle}">
$${product.price}
</p>

<p class="text-sm text-gray-500">
${product.category}
</p>

<p class="text-sm mt-2">
${product.description.substring(0, 60)}...
</p>

<div class="flex gap-2 mt-3">

<button onclick="editProduct(${product.id})"
class="bg-yellow-400 px-3 py-1 rounded">
Edit
</button>

<button onclick="deleteProduct(${product.id})"
class="bg-red-500 text-white px-3 py-1 rounded">
Delete
</button>

</div>

`;

        container.appendChild(card);

    });

}



// ADD OR UPDATE PRODUCT

form.addEventListener("submit", async function (e) {

    e.preventDefault();

    let product = {

        title: document.getElementById("title").value,
        price: document.getElementById("price").value,
        description: document.getElementById("description").value,
        image: document.getElementById("image").value,
        category: document.getElementById("category").value

    };

    try {

        if (editId) {

            let res = await fetch(
                `https://fakestoreapi.com/products/${editId}`,
                {
                    method: "PUT",
                    body: JSON.stringify(product),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            let data = await res.json();

            products = products.map(p =>
                p.id === editId ? data : p
            );

            editId = null;

            alert("Product Updated");

        }

        else {

            let res = await fetch(
                "https://fakestoreapi.com/products",
                {
                    method: "POST",
                    body: JSON.stringify(product),
                    headers: {
                        "Content-Type": "application/json"
                    }
                });

            let data = await res.json();

            products.unshift(data);

            alert("Product Added");

        }

        displayProducts(products);

        form.reset();

        form.classList.add("hidden");
        addBtn.classList.remove("hidden");

    }

    catch (error) {

        alert("Error saving product");

    }

});



// EDIT PRODUCT

function editProduct(id) {

    let product = products.find(p => p.id === id);

    document.getElementById("title").value = product.title;
    document.getElementById("price").value = product.price;
    document.getElementById("description").value = product.description;
    document.getElementById("image").value = product.image;
    document.getElementById("category").value = product.category;

    editId = id;

    form.classList.remove("hidden");
    addBtn.classList.add("hidden");

}



// DELETE PRODUCT

async function deleteProduct(id) {

    if (!confirm("Delete this product?")) return;

    try {

        await fetch(
            `https://fakestoreapi.com/products/${id}`,
            { method: "DELETE" }
        );

        products = products.filter(p => p.id !== id);

        displayProducts(products);

    }

    catch {

        alert("Error deleting product");

    }

}



// FILTER CATEGORY

filter.addEventListener("change", async function () {

    let category = this.value;

    if (category === "all") {

        displayProducts(products);
        return;

    }

    loading.classList.remove("hidden");

    try {

        let res = await fetch(
            `https://fakestoreapi.com/products/category/${category}`
        );

        let data = await res.json();

        displayProducts(data);

    }

    catch {

        alert("Error filtering");

    }

    loading.classList.add("hidden");

});



getProducts();