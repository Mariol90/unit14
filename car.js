class Vehicle{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year;
    }
    honk(){
       return "beep";
    }
    toString(){
        return `this car is ${this.make} modelo ${this.model} of year ${this.year}`
    }
}
let myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);

class Car extends Vehicle{
    constructor(make,model,year){  
        super(make, model, year);
        this.numWheels = 4;
}
}
let myFirstCar = new Car("Toyota", "Corolla", 2005);

class Motorcycle extends Vehicle {
    constructor(make,model,year){
    super(make,model,year);
    this.numWheels=2;
}
revEngine(){
    return `VROOM!!`;
}
}
let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);

class Garage {
    constructor(capacity){
        this.vehicles=[];
        this.capacity=capacity;
    }
    add(newvehicles){
        if(!(newvehicles instanceof Vehicle)){
            return "Only Vehicle here";
        }
        if (this.vehicles.length>=this.capacity){
            return "garage is full";
        }
        this.vehicles.push(newvehicles);
        return "new vehicle add on";
    }
}
let garage = new Garage(2);