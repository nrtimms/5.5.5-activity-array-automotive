//this includes the vehicle class as a module
const VehicleModule = require("./vehicleBaseClass")


//TO DO: Code the Car subclass here or in index.js file, i.e. class Car extends Vehicle ...
class Car extends VehicleModule.Vehicle {
    constructor(make, model, year, color, mileage){
        super(make, model, year, color, mileage);
            this.maximumPassengers = 5;
            this.passenger = 0;
            this.numberOfWheels = 4;
            this.maximumSpeed = 160;
            this.fuel = 10;
            this.scheduleService = false;
    }

loadPassenger(num){
    if(this.passenger < this.maximumPassengers){
        if((this.passenger + num) <= this.maximumPassengers){
            this.passenger = num;
            console.log(num + " passengers loaded into car")
            return this.passenger;
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

checkMileage(){
    if(this.mileage > 30000){
        this.scheduleService = true;
        console.log("Service scheduled");
        return this.scheduleService;
    }
    else{
        console.log("Service not needed")
    }
}

}

//TO DO: Creating Instances and Testing Them
let aCar =  new Car('Mercury', "Sedan", '2017', 'Blue', 40000)
aCar.loadPassenger(9)
aCar.start()
aCar.checkMileage()
console.log(aCar)

let bCar =  new Car('Mercury', "Sedan", '2017', 'Blue', 20000)
bCar.loadPassenger(4)
bCar.start()
bCar.checkMileage()
console.log(bCar)
