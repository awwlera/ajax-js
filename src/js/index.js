fetch('https://dummyjson.com/products').then(response => {
    console.log(response);
    return response.json();
}).then(data => {
    const wrapper = document.querySelector('.wrapper');

    data.products.map((item) => {
        console.log(item);
        const card = `
        <div class="card">
            <div class="card-img">
                <img src="${item.thumbnail}" alt="image description" class="img">
            </div>
            <h2 class="card-title">${item.title} </h2>
            <span class="price">${item.price} $</span>
            <a class="btn-buy" href="https://dummyjson.com/products/${item.id}">Buy</a>
        </div>`;
        wrapper.insertAdjacentHTML('beforeend', card);
    });
});


