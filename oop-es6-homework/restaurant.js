/*1. Create a `Restaurant` class with the following properties and methods:
   - Properties:
- `name` (string): The name of the restaurant.
     - `capacity` (number): The maximum capacity of the restaurant.
     - `reservations` (array): An array to store the reservations.
     - `menu` (array): An array to store the menu items.
     - `orders` (array): An array to store the orders.
   - Methods:
     - `addReservation(reservation)`: Adds a reservation to the restaurant.
     - `removeReservation(reservationName)`: Removes a reservation from the restaurant based on the reservation name.
     - `checkAvailability()`: Returns the number of available seats in the restaurant.
     - `listReservations()`: Returns an array of reservation names.
     - `isReservationAvailable(reservationName)`: Checks if a reservation with a specific name is available.
     - `isFullyBooked()`: Checks if the restaurant is fully booked.
     - `getGuestCount()`: Returns the total number of guests across all reservations.
     - `sortReservationsAlphabetically()`: Returns an array of reservation names sorted alphabetically.
     - `addOrder(order)`: Adds an order to the restaurant.
     - `removeOrder(tableNumber)`: Removes an order from the restaurant based on the table number.
     - `listOrders()`: Returns an array of all orders.
     - `getTotalRevenue()`: Returns the total revenue generated from orders.
     - `addMenuItem(item)`: Adds a menu item to the restaurant's menu.
     - `removeMenuItem(itemName)`: Removes a menu item from the restaurant's menu based on the item name.
     - `listMenuItems()`: Returns an array of all menu items.*/

class Restaurant {
  constructor(name, capacity) {
    this.name = "La Mamonia";
    this.capacity = 35;
    this.reservations = [];
    this.menu = [];
    this.orders = [];
  }

  addReservation(reservation) {
    this.reservations.push(reservation);
  }

  removeReservation(reservationName) {
    this.reservations = this.reservations.filter(
      (reservation) => reservation.name !== reservationName
    );
  }

  checkAvailability() {
    return this.capacity - this.getGuestCount();
  }

  listReservations() {
    return this.reservations.map((reservation) => reservation.name);
  }

  isReservationAvailable(reservationName) {
    return this.reservations.some(
      (reservation) => reservation.name === reservationName
    );
  }

  isFullyBooked() {
    return this.getGuestCount() >= this.capacity;
  }

  getGuestCount() {
    return this.reservations.reduce(
      (total, reservation) => total + reservation.guestCount,
      0
    );
  }

  sortReservationsAlphabetically() {
    return this.listReservations().sort();
  }

  addOrder(order) {
    this.orders.push(order);
  }

  removeOrder(tableNumber) {
    this.orders = this.orders.filter(
      (order) => order.tableNumber !== tableNumber
    );
  }

  listOrders() {
    return this.orders;
  }

  getTotalRevenue() {
    return this.orders.reduce((total, order) => total + order.totalPrice, 0);
  }

  addMenuItem(item) {
    this.menu.push(item);
  }

  removeMenuItem(itemName) {
    this.menu = this.menu.filter((item) => item.name !== itemName);
  }

  listMenuItems() {
    return this.menu;
  }
}

/*2. Create a `Reservation` class with the following properties:
         - `name` (string): The name of the guest making the reservation.
         - `date` (string): The date of the reservation.
         - `time` (string): The time of the reservation.
         - `guestCount` (number): The number of guests in the reservation.*/

class Reservation {
  constructor(name, date, time, guestCount) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.guestCount = guestCount;
  }
}

/*3. Create a `Guest` class that inherits from the `Reservation` class and adds the following property:
         - `specialRequests` (string): Any special requests made by the guest.*/

class Guest extends Reservation {
  constructor(name, date, time, guestCount, specialRequests) {
    super(name, date, time, guestCount);
    this.specialRequests = specialRequests;
  }
}

/*4. Create an `Order` class with the following properties and methods:
         - Properties:
           - `tableNumber` (number): The table number where the order is placed.
           - `items` (array): An array of menu items ordered by the customer.
           - `totalPrice` (number): The total price of the order.
         - Methods:
           - `calculateTotalPrice()`: Calculates and returns the total price of the order based on the menu items.*/

class Order {
  constructor(tableNumber, items) {
    this.tableNumber = tableNumber;
    this.items = items;
    this.totalPrice = this.calculateTotalPrice();
  }

  calculateTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

/*5. Create an `OnlineOrder` class that inherits from the `Order` class and adds the following property:
         - `deliveryAddress` (string): The delivery address for the online order.*/

class OnlineOrder extends Order {
  constructor(tableNumber, items, deliveryAddress) {
    super(tableNumber, items);
    this.deliveryAddress = deliveryAddress;
  }
}

/*6. Create a `MenuItem` class with the following properties:
         - `name` (string): The name of the menu item.
         - `price` (number): The price of the menu item.*/

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

//Other

const menuItem1 = new MenuItem("Pasta Carbonara", 35);
const menuItem2 = new MenuItem("Pizza", 34);
const menuItem3 = new MenuItem("Salad", 20);

const myRestaurant = new Restaurant("La Mamonia", 35);

myRestaurant.addMenuItem(menuItem1);
myRestaurant.addMenuItem(menuItem2);
myRestaurant.addMenuItem(menuItem3);

const reservation1 = new Reservation("Paul", "2024.02.14", "19:00", 4);
const reservation2 = new Reservation("Kata", "2024.02.15", "18:30", 2);
const reservation3 = new Reservation("Szilard", "2024.02.16", "15:00", 2);

myRestaurant.addReservation(reservation1);
myRestaurant.addReservation(reservation2);
myRestaurant.removeReservation(reservation3);

console.log("Available tables:", myRestaurant.checkAvailability());

console.log("Reservations:", myRestaurant.listReservations());

console.log(
  'Does "Paul" have an available table?',
  myRestaurant.isReservationAvailable("Paul")
);

console.log("Is the restaurant booked?", myRestaurant.isFullyBooked());

console.log("Total guest:", myRestaurant.getGuestCount());

console.log(
  "Sorted reservations:",
  myRestaurant.sortReservationsAlphabetically()
);

const order1 = new Order(1, [menuItem1, menuItem2]);
const order2 = new Order(2, [menuItem3]);

myRestaurant.addOrder(order1);
myRestaurant.addOrder(order2);

console.log("Orders:", myRestaurant.listOrders());

console.log("Total revenue:", myRestaurant.getTotalRevenue());

myRestaurant.removeMenuItem("Salad");

console.log("Menu items:", myRestaurant.listMenuItems());
