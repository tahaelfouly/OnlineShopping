function searchProduct() {
    const query = document.getElementById("searchBox").value.toLowerCase();
    const products = ["Computer 1", "Computer 2", "Computer 3",
                        "App 1", "App 2", "App 3",
                        "System 1", "System 2", "System 3",
                        "Hard 1", "Hard 2", "Hard 3",
                        "Phone 1", "Phone 2", "Phone 3"];
    const result = products.find(product => product.toLowerCase().includes(query));
    document.getElementById("result").textContent = result ? `Found: ${result}` : "No results found ";
}

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Message sent successfully!');
});

