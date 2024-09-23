class Product {
    constructor(id, name, price) {
        this.id = id;    // Unique identifier for the product
        this.name = name; // Name of the product
        this.price = price; // Price of the product
    }
}

//Create a Shopping Cart Item Class
class ShoppingCartItem {
    constructor(product, quantity) {
        this.product = product; // The Product object
        this.quantity = quantity; // Number of this product in the cart
    }

    // Method to calculate the total price for this item
    totalPrice() {
        return this.product.price * this.quantity; // Price multiplied by quantity
    }
}

//Create a Shopping Cart Class
class ShoppingCart {
    constructor() {
        this.items = []; // Array to hold the cart items
    }

    // Method to get the total price of all items in the cart
    getTotal() {
        return this.items.reduce((total, item) => total + item.totalPrice(), 0); // Add up total prices
    }

    // Method to add an item to the cart
    addItem(product, quantity) {
        const cartItem = new ShoppingCartItem(product, quantity); // Create a new ShoppingCartItem
        this.items.push(cartItem); // Add it to the cart
    }

    // Method to remove an item by product ID
    removeItem(productId) {
        this.items = this.items.filter(item => item.product.id !== productId); // Filter out the item
    }

    // Method to display all items in the cart
    displayItems() {
        this.items.forEach(item => {
            console.log(`${item.product.name} - Quantity: ${item.quantity} - Total Price: $${item.totalPrice().toFixed(2)}`);
        });
    }
}

//Testing the Classes
// Create products
const product1 = new Product(1, 'Laptop', 999.99);
const product2 = new Product(2, 'Phone', 499.99);
const product3 = new Product(3, 'Tablet', 299.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(product1, 1); // Add 1 Laptop
cart.addItem(product2, 2); // Add 2 Phones
cart.addItem(product3, 3); // Add 3 Tablets

// Display cart items
console.log('Cart Items:');
cart.displayItems();
console.log(`Total Cart Price: $${cart.getTotal().toFixed(2)}`); // Display total price

// Remove an item from the cart
cart.removeItem(2); // Remove the Phone

// Display cart items after removal
console.log('Cart Items after removal:');
cart.displayItems();
console.log(`Total Cart Price after removal: $${cart.getTotal().toFixed(2)}`);

