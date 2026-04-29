//1. Create a User class:
class User {
  constructor ({name, email}) {
    this.name=name;
    this.email=email;
  }
  
  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

//2. Create a ShoppingCart class:
class ShoppingCart {
  constructor (User) {
    this.user=User;
    this.items=[];
  }

  addProduct(product) {
    this.items.push(product);
  }

  getCartSummary() {
    return `Shopping cart for ${this.user.name} has ${this.items.length} items.`;
  }
}

//3. Demonstrate the functionality:
const user1 = new User ({name:'Peter', email:'peter01@gmail.com'});
const cart1 = new ShoppingCart (user1);

cart1.addProduct({ name: 'Laptop', price: 1200 });
cart1.addProduct({ name: 'Keyboard', price: 100 });

console.log(user1.getUserInfo());
console.log(cart1.getCartSummary());
