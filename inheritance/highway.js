/*Create a Highway with different types of vehicles (bus, car, motorcyle, etc...). Bus, Car, Motorcycle instances 
inherit from Vehicle.*/

class Vehicle {
  on() {
    console.log(`This ${this.name} is on the highway.`);
  }

  left() {
    console.log(`This ${this.name} has left the highway.`);
  }
}

class Bus extends Vehicle {
  name = "bus";

  passanger() {
    console.log(`The ${this.name} has stopped at the bus station.`);
  }
}

class Bicycle extends Vehicle {
  name = "bicycle";

  gas() {
    console.log(`The ${this.name} has stopped at a gas station.`);
  }
}

class Motorcycle extends Vehicle {
  name = "motorcycle";

  dinner() {
    console.log(`The ${this.name} has stopped to get lunch.`);
  }
}

class Car extends Vehicle {
  name = "car";

  broken() {
    console.log(`The ${this.name} has broken down.`);
  }
}

const busOnTheHighway = new Bus();
const bicycleOnTheHighway = new Bicycle();
const motorcycleOnTheHighway = new Motorcycle();
const carOnTheHighway = new Car();

busOnTheHighway.passanger();
carOnTheHighway.broken();
bicycleOnTheHighway.gas();
motorcycleOnTheHighway.left();


/*Create 2 Highways and allow a list of uinque/different vehicles to run on it.*/


class Highway {
  vehicles = [];

  addVehicle(vehicle) {
    this.vehicles.push(vehicle);
  }

  runAllVehicles() {
    console.log("Vehicles running on the highway:");
    this.vehicles.forEach((vehicle) => {
      vehicle.run();
    });
  }
}

const highway1 = new Highway();
const highway2 = new Highway();

highway1.addVehicle({
  name: "bus",
  run: function () {
    console.log(`The ${this.name} is on the second highway.`);
  },
});

highway1.addVehicle({
  name: "bicycle",
  run: function () {
    console.log(`The ${this.name} is on the second highway.`);
  },
});

highway2.addVehicle({
  name: "motorcycle",
  run: function () {
    console.log(`The ${this.name} is on the first highway.`);
  },
});

highway2.addVehicle({
  name: "car",
  run: function () {
    console.log(`The ${this.name} is on the fist highway.`);
  },
});

highway1.runAllVehicles();
highway2.runAllVehicles();