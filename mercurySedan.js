//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mercury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


//After you write the derived Car class, you should test it out.

//Note: You can code your derived Car class here or make a file named index.js and do it there.


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule{
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
            this.maximumPassengers = 5;
            this.passengers = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
    }

loadPassenger(num){
    if(this.passengers < this.maximumPassengers){
        if((this.passengers + num) <= this.maximumPassengers){
            this.passengers = num;
            return this.passengers;
        }
        else{
            console.log("This " + this.make + " " + this.model + " can only fit " + this.maximumPassengers + " passengers.");
        }
    }   
    else{
        console.log("This " + this.make + " " + this.model + " is full.");
    }
}

start(){
    if(this.fuel > 0){
        console.log("The car has started.");
        this.started = true;
        return this.started;
    }
    else{
        console.log("The car has no fuel");
        this.started = false;
        return this.started;
    }
}

checkMileage(mileage){
    if(mileage > 30000){
        this.scheduleService = true;
        return this.scheduleService;
    }
}

}

//TO DO: Creating Instances and Testing Them
let aCar =  new Car('Mercury', "Sedan", '2017', 'Blue', 40000)
aCar.loadPassenger(4)
aCar.start()
aCar.checkMileage()
console.log(aCar)

//You can use the same instance "v" of the Vehicle class above for the base class.


//Create at least two new instances of the Car class and test them here:
